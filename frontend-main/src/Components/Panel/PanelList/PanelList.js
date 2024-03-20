import React, {
  useReducer,
  useState,
  useRef,
  useEffect,
} from "react";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {PencilIcon} from '@heroicons/react/24/solid';
import './PanelList.css';

import NavBar from "../../Utils/Headers";

const hostURL = "http://localhost:8000";
function PanelList() {
  const [searchList, setSearchList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [roleList, setRoleList] = useState([1]);
  const [iTypeList, setITypeList] = useState([1]);
  const [gradeList, setGradeList] = useState([]);
  const [buttons, setButtons] = useState([]);
  const userData = JSON.parse(window.sessionStorage.getItem('user_data'));

  const navigate = useNavigate();
  const pageSize = 10;

  const assocID = useRef(HTMLInputElement);
  const assocName = useRef(HTMLInputElement);
  const email = useRef(HTMLInputElement);
  const role = useRef(HTMLInputElement);
  const grade = useRef(HTMLInputElement);
  const isActive = useRef(HTMLInputElement);
  const interviewType = useRef(HTMLInputElement);

  function reset(){
    assocID.current.value = "";
    assocName.current.value = "";
    email.current.value = "";
    role.current.value = "";
    grade.current.value = "";
    interviewType.current.value = "";
  }

  useEffect(() => {
    let isApiSubscribed = true;
    const getRole = async () => {
      const roleListResponse = await fetch(
        `http://localhost:5000/role/all-role`,
        {
          headers: {
            "x-access-token":
              window.sessionStorage.getItem("token"),
          },
        },
      );

      console.log(roleListResponse);

      const roleListData = await roleListResponse.json();
      console.log(roleListData);

      // setRoleList(roleListData);
    };

    const getGrade = async () => {
      const roleListResponse = await fetch(
        `http://localhost:5000/grade/all-grade`,
        {
          headers: {
            "x-access-token":
              window.sessionStorage.getItem("token"),
          },
        },
      );

      console.log(roleListResponse);

      const roleListData = await roleListResponse.json();
      console.log(roleListData);

      setGradeList(roleListData);
    };

    if (isApiSubscribed) {
      getRole();
      getGrade();
    }

    return () => {
      isApiSubscribed = false;
    };
  }, []);

  console.log(roleList);
  
  async function search(e) {
      
    setPage(1)
    console.log(assocName.current.value);
    e.preventDefault();
    fetch(hostURL + "/panelList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: assocID.current.value,
        name: assocName.current.value,
        email: email.current.value,
        role: parseInt(role.current.value),
        grade: grade.current.value,
        interviewType: interviewType.current.value,
        isActive: isActive.current.checked,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(1)
        console.log(result);
        setSearchList(result.data);
        setTotalPages(result.totalItems);
        setITypeList(result.intTypes);
        setRoleList(result.allSkills);
        let temp = []
        for(let i=1;i <= Math.ceil(result.totalItems/pageSize); i++){
          if(page === i){
            temp.push(<button
              className="btn btn-primary col-sm-3"
              onClick={(e) => {
                e.preventDefault();
                setPage(i);
              }}>
              {i}
            </button>);
          }
          else{
            temp.push(<button
              className= "btn btn-outline-primary col-sm-3"
              onClick={(e) => {
                e.preventDefault();
                setPage(i);
              }}>
              {i}
            </button>)
          }
        }
        setButtons([...temp]); 
      });
  }

  async function handleActivateUser(item) {
    console.log(item);
    const raw_data = await fetch(
      hostURL + "/panelList/updateActive/" + item.user_id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isActive: item.is_active }),
      },
    );
    if (item.is_active) {
      toast.success("Panel Inactivated", {
        autoClose: 1000,
      });
    } else {
      toast.success("Panel Activated", { autoClose: 1000 });
    }
    const data = await raw_data.json();
    setPage(1);
    search({ preventDefault: () => {} });
  }

  useEffect(() => {
    // console.log(user)
    isActive.current.checked = true;
    search({ preventDefault: () => {} });
  }, []);

  useEffect(()=>{
    let temp = []
        for(let i=1;i <= Math.ceil(totalPages/pageSize); i++){
          if(page === i){
            temp.push(<button
              className="btn btn-primary col-sm-3"
              onClick={(e) => {
                e.preventDefault();
                setPage(i);
              }}>
              {i}
            </button>);
          }
          else{
            temp.push(<button
              className= "btn btn-outline-primary col-sm-3"
              onClick={(e) => {
                e.preventDefault();
                setPage(i);
              }}>
              {i}
            </button>)
          }
        }
        setButtons([...temp]);
  }, [page]);

  return (
    <div className='wrapper'>
      <NavBar />

      <div className='container-wrap px-3'>
        <h2>Panels List</h2>
        <div className='container-wrap'>
          <form className='px-2'>
            <div className='row mb-4'>
              <div className='col-md-12'>
                <button
                  type='button'
                  onClick={(e) => {
                    navigate("/addpanel");
                  }}
                  className='btn btn-primary float-end ms-4 '
                  disabled={userData.role_id == 1003}
                  >
                  +Add Panel
                </button>
              </div>
            </div>
            <div className='row mb-6'>
              <div className='col-md-1'>
                <div className='form-group'>
                  <label
                    className='fw-bolder'
                    htmlFor='userid'>
                    Associate Id
                  </label>
                </div>
              </div>
              <div className='col-md-5'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control responsive'
                    id='userid'
                    ref={assocID}
                    maxLength='7'
                    placeholder='Enter Associate Id '
                  />
                </div>
              </div>
             

              <div className='col-md-1'>
                <div className='form-group'>
                  <label
                    className='fw-bolder'
                    htmlFor='name'>
                    Name
                  </label>
                </div>
              </div>

              <div className='col-md-5'>
                <div className='form-group '>
                  <input
                    ref={assocName}
                    type='text'
                    className='form-control responsive'
                    maxLength='30'
                    placeholder='Enter Associate Name'
                    id='name'
                  />
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <div className='col-md-1'>
                <div className='form-group'>
                  <label
                    className='fw-bolder'
                    htmlFor='grade'>
                    Grade
                  </label>
                </div>
              </div>
              <div className='col-md-5 Panel__Grade'>
                <div className='form-group'>
                  <select
                    style={{
                      textTransform: "",
                    }}
                    className='form-select responsive'
                    ref={grade}>
                    <option value=''>Select Grade</option>
                    {gradeList?.role &&
                      gradeList?.role?.map(
                        ({ grade, is_deleted, grade_id }) =>
                          is_deleted && (
                            <option value={grade}>
                              {grade}
                            </option>
                          ),
                      )}
                  </select>
                </div>
              </div>
              {/* &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; */}
              
              <div className='col-md-1'>
                <div className='form-group'>
                  <label
                    className='fw-bolder'
                    htmlFor='first'>
                    Interview Type
                  </label>
                </div>
              </div>
              <div className='col-md-5 Panel__Interview'>
                <div className='form-group'>
                  <select
                    id='role'
                    ref={interviewType}
                    className='form-select responsive'
                    aria-label='Select Role'>
                    <option value=''>
                      Select Interview Type
                    </option>
                    <option value='TP1'>L1</option>
                    <option value='TP2'>L2</option>
                    {/* <option value='TP4'>L1&L2</option> */}
                    <option value='TP3'>HR</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <div className='col-md-1'>
                <div className='form-group'>
                  <label
                    className='fw-bolder'
                    htmlFor='email'>
                    Email
                  </label>
                </div>
              </div>
              <div className='col-md-5 Panel__Email'>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control responsive'
                    id='email'
                    ref={email}
                    placeholder='Enter Email'
                  />
                </div>
              </div>
             
              <div className='col-md-1'>
                <div className='form-group'>
                  <label
                    className='fw-bolder'
                    htmlFor='first'>
                    Roles
                  </label>
                </div>
              </div>
              <div className='col-md-5 Panel__Role'>
                <div className='form-group'>
                  <select
                    id='role'
                    ref={role}
                    style={{
                      textTransform: "capitalize",
                    }}
                    className='form-select responsive'
                    aria-label='Select Role'>
                    <option value=''>Select Role</option>
                    <option value={2001}>AES-DigitalFS-JavaMS</option>
                    <option value={2002}>AES-DigitalFS-JavaFS</option>
                    <option value={2004}>AES-DigitalFS-DotnetFS</option>
                    <option value={2003}>AES-FED-Angular</option>
                    <option value={2005}>AES-FED-React</option>
                    <option value={2006}>AES-FED-MEAN</option>
                    <option value={2007}>AES-FED-MERN</option>
                    <option value={2008}>AES-AgileDevOps-Agile</option>
                    <option value={2009}>AES-AgileDevOps-DevOps</option>
                    <option value={2010}>AES-DigitalPlatforms-AEM</option>
                    <option value={2011}>AES-DigitalPlatforms-Liferay</option>
                    <option value={2012}>AES-DigitalPlatforms-Sitecore</option>
                    <option value={2013}>AES-DigitalPlatforms-M365</option>
                    <option value={2014}>AES-DigitalPlatforms-Drupal</option>
                    <option value={2015}>AES-Lowcode-Outsystems</option>
                    <option value={2016}>AES-Lowcode-MSApps</option>
                    <option value={2017}>AES-Mobility-IOS</option>
                    <option value={2018}>AES-Mobility-Android</option>
                    <option value={2019}>AES-Mobility-ReactNative</option>
                    <option value={2020}>AES-ApplicationModernization-Mainframe</option>
                    <option value={2021}>AES-DigitalFS-Integration</option>
                    <option value={2022}>AES-CloudApps-Azure</option>
                    <option value={2023}>AES-CloudApps-AWS</option>
                    <option value={2024}>AES-CloudApps-GCP</option>
                    <option value={2025}>AES-Mobility-Others</option>
                    <option value={2001}>AES-DigitalFS-JavaMS</option>
                    <option value={2002}>AES-DigitalFS-JavaFS</option>
                    <option value={2004}>AES-DigitalFS-DotnetFS</option>
                    <option value={2003}>AES-FED-Angular</option>
                    <option value={2005}>AES-FED-React</option>
                    <option value={2006}>AES-FED-MEAN</option>
                    <option value={2007}>AES-FED-MERN</option>
                    <option value={2008}>AES-AgileDevOps-Agile</option>
                    <option value={2009}>AES-AgileDevOps-DevOps</option>
                    <option value={2010}>AES-DigitalPlatforms-AEM</option>
                    <option value={2011}>AES-DigitalPlatforms-Liferay</option>
                    <option value={2012}>AES-DigitalPlatforms-Sitecore</option>
                    <option value={2013}>AES-DigitalPlatforms-M365</option>
                    <option value={2014}>AES-DigitalPlatforms-Drupal</option>
                    <option value={2015}>AES-Lowcode-Outsystems</option>
                    <option value={2016}>AES-Lowcode-MSApps</option>
                    <option value={2017}>AES-Mobility-IOS</option>
                    <option value={2018}>AES-Mobility-Android</option>
                    <option value={2019}>AES-Mobility-ReactNative</option>
                    <option value={2020}>AES-ApplicationModernization-Mainframe</option>
                    <option value={2021}>AES-DigitalFS-Integration</option>
                    <option value={2022}>AES-CloudApps-Azure</option>
                    <option value={2023}>AES-CloudApps-AWS</option>
                    <option value={2024}>AES-CloudApps-GCP</option>
                    <option value={2025}>AES-Mobility-Others</option>
                    {/* {roleList?.role &&
                      roleList?.role?.map(
                        ({
                          role_name,
                          is_deleted,
                          role_id,
                        }) =>
                          is_deleted && (
                            <option value={role_name}>
                              {role_name}
                            </option>
                          ),
                      )} */}
                  </select>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <div className='col-md-1'>
                <div className='form-group'>
                  <label
                    className='fw-bolder'
                    htmlFor='userid'>
                    IsActive
                  </label>
                </div>
              </div>
              <div className='col-md-5 ms-3'>
                <div className='form-group'>
                  <div className='col-sm-3 form-check form-switch'>
                    <input
                      ref={isActive}
                      className='form-check-input'
                      type='checkbox'
                      data-testid='checkbox'
                      role='switch'
                      id='isActive'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-1 me-4'>
                <button
                  type='button'
                  onClick={search}
                  className='btn btn-primary'
                  data-testid='submit'
                  value="search"
                  >
                  Search
                </button>
              </div>

              

              <div className='col-md-2'>
                <button
                  type='button'
                  onClick={reset}
                  className='btn btn-primary'
                  id='cancelbutton'
                  data-testid='reset'
                  value=''>
                  Reset
                </button>
              </div>
            </div>

            <div className='col-sm-12 overflow-auto'>
              <table className='panel table table-striped table-responsive'>
                <thead>
                  <tr align="center">
                    <th>#</th>
                    <th>Associate Id</th>
                    <th>Associate Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Grade</th>
                    <th>Roles</th>
                    {/* <th>Interview Type</th> */}
                    {userData.role_id == 1003 ? "" : <th>Action</th>}
                  </tr>
                </thead>
                <tbody>
                  {searchList.map((item, index) => {
                    if (
                      index >= (page - 1) * pageSize &&
                      index < page * pageSize
                    ) {
                      return (
                        <tr align="center" key={index}>
                          <th scope='row'>{index + 1}</th>
                          <td>{item.user_id}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.contact}</td>
                          <td>{item.grade?.toUpperCase()}</td>
                          <td>{item.skill.map(skill=>{
                            if(skill.skill_name && skill.type){
                              return <div className="small">{skill.skill_name} - {skill.type}</div>
                            }
                            else{
                              return <></>
                            }
                          })}</td>
                          {/* <td>{item.type}</td> */}
                          {userData.role_id == 1003 ? "" : 
                          <td>
                            <div className='d-flex col-12'>
                              <PencilIcon
                              className="singleList__pencilIcon"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate(
                                    "/" +
                                      item.user_id +
                                      "/editpanel",
                                  );
                                }}
                              />
                              &emsp;|&emsp;
                              <div className='col-sm-3 form-check form-switch'>
                                <input
                                  className='form-check-input'
                                  checked={item.is_active}
                                  type='checkbox'
                                  onChange={(e) => {
                                    e.preventDefault();
                                    handleActivateUser(
                                      item,
                                      );
                                    }}
                                    data-testid='checkbox'
                                    role='switch'
                                    id='isActive'
                                    />
                              </div>
                            </div>
                          </td>
                                  }
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
            <b>
              {totalPages === 0 ? "No records fetched" : ""}
            </b>
            <b>
              {totalPages
                ? page * pageSize -
                  9 +
                  " - " +
                  (page * pageSize <= totalPages
                    ? page * pageSize
                    : totalPages) +
                  " of " +
                  Math.ceil(totalPages) +
                  " records"
                : ""}
            </b>
          </form>
          <div
            className='btn-group pagination-responsive'
            style={{ float: "right" }}>
            <button
              className='btn btn-outline-primary col-sm-4'
              disabled={page === 1}
              onClick={() => {
                setPage(page - 1);
              }}>
              {"<"}Prev
            </button>
            {buttons}
            {/* <button
              className='btn btn-outline-primary col-sm-3'
              onClick={(e) => {
                e.preventDefault();
              }}>
              {page}
            </button> */}
            <button
              className='btn btn-outline-primary col-sm-4'
              disabled={
                page >= Math.ceil(totalPages / pageSize)
              }
              onClick={() => {
                setPage(page + 1);
              }}>
              Next{">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PanelList;
