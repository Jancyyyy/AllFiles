const Panel = require("../../models/Panel");
const User = require("../../models/User");
const PanelSkills = require("../../models/PanelSkills");
const InterviewType = require("../../models/InterviewType");
const Skill = require("../../models/Skills");
// const CandidateRoles = require("../../models/candidate_roles");
const Grade = require("../../models/Grade");

function getpanel(req, res, next){

    var response = {};

    Grade.find({}, (err,result) => {
        let gradesArray = [];
        for(let i in result){
            gradesArray[i] = result[i].grade;
        }
        response.gradesArray = gradesArray;
    });

    Skill.find({}, (err,result) => {
        let skills = [];
        for(let i in result){
            skills[i] = result[i].skill_name;
        }
        response.skills = skills;
    });

    InterviewType.find({}, (err,result) => {
        let interviewTypeArray = [];
        for(let i in result){
            interviewTypeArray[i] = result[i].type;
        }
        response.interviewTypeArray = interviewTypeArray;
    })

    User.find({user_id : req.body.user_id}, (error, result)=>{
        if(error){
            res.send({err: error});
            return ;
        }
        if(result.length < 1){
            return res.send({err: "User not found"});
        }
        response.name = result[0].name;
        response.email =  result[0].email;
        console.log(response);
        console.log("---------------------------------------");
        Panel.find({user_id : req.body.user_id}, (error, result)=>{
            if(error){
                return res.send({err: error});
            }
            response.grade = (result[0].grade);
            response.contact = result[0].contact;
            response.is_active = result[0].is_active;
            console.log(response);
            // console.log(result);    
            console.log("---------------------------------------");
            PanelSkills.find({panel_id: result[0].id}, (error, result)=>{
                if(error){
                    return res.send({err: error});
                }
                let length = result.length;
                PanelSkills.aggregate([
                    {
                        $lookup: {
                            from : "skills",
                            localField: "skill_id",
                            foreignField: "skill_id",
                            as: "skills"
                        }
                    },
                    {
                        $match:{
                            is_deleted: false
                        }
                    }
                ] , (error, result)=>{
                    if(error){
                        return res.send({err: error});
                    }

                    let skillsArray = [];
                    for(let i = 0; i< length; i++){
                        skillsArray[i] = result[i].skills[0].skill_name;
                    }

                    response.skillsArray = skillsArray;
                })
                

                PanelSkills.aggregate([
                    {
                        $lookup: {
                            from : "interview_types",
                            localField: "type_id",
                            foreignField: "type_id",
                            as: "types"
                        }
                    }
                ] , (error, result)=>{
                    if(error){
                        return res.send({err: error});
                    }
                    
                    let typeArray = [];
                    let isActiveArray = [];
                    for(let i = 0; i< length; i++){
                        isActiveArray[i] = result[i].is_active;
                        typeArray[i] = result[i].types[0].type;
                    }
                    response.typeArray = typeArray;
                    response.isActiveArray = isActiveArray;
                    console.log(response);
                    res.send(response);
                })
            });
        } );
    });
}

async function editpanel(req,res){
    console.log(req.body.bodyObject);
    try{

        const result  = await Panel.find({user_id: req.body.bodyObject.user_id});
        const panelID = result[0].id;
        let newSkills = req.body.bodyObject.skills;
        let skillArr = [];
        let typeArr = [];
        for(let i in newSkills){
            let skillID = await Skill.findOne({skill_name: newSkills[i].role});
            skillID = skillID.skill_id;
            let typeID = await InterviewType.findOne({type: newSkills[i].interviewType});
            typeID = typeID.type_id;
            skillArr.push(skillID);
            // console.log(skillID);
            typeArr.push(typeID);
            // console.log(typeID);
        }
        try{
            console.log(skillArr);
            console.log(typeArr);
            for(let i in skillArr){
                let pSkills = await PanelSkills.find({panel_id: panelID, skill_id: skillArr[i]});
                if(pSkills.length){
                    let rr = await PanelSkills.updateOne({panel_id: panelID, skill_id: skillArr[i]}, {$set:{is_deleted: false, type_id: typeArr[i]}});
                    console.log(rr);
                }
                else{
                    let newSkill = new PanelSkills(
                        {
                            id: Math.ceil(Math.random()*(1000)),
                            panel_id: panelID,
                            skill_id: skillArr[i],
                            type_id: typeArr[i],

                        }
                    );
                    console.log(newSkill);
                    await PanelSkills.insertMany([newSkill]);
                }
            }
            
        }
        catch(err){
            console.log(err);
            return res.status(500).send({err: err})   
        }
        res.status(200).send({msg: "successful"});
        return ;
    }
    catch(err){
        console.log(err);
        return res.status(500).send({err : err});
    }
    
}


module.exports = {getpanel, editpanel};
