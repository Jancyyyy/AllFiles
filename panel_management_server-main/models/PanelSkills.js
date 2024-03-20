const mongoose=require('mongoose');

const panelSkillSchema=mongoose.Schema({
  
  // _id:{ 
  //   type: objectId
  // },

  created_by:{ 
    type: String
  },

  created_on:{ 
    type:Date
  },

  deleted_by:{ 
    type: String
  },

  deleted_on:{ 
    type:Date
  },

  duration_id:{ 
    type: String
  },

  id:{ 
    type: Number
  },

  is_deleted:{ 
    type: Boolean
  },

  panel_id:{ 
    type: Number
  },

  skill_id:{ 
    type: Number
  },

  type_id:{ 
    type: String
  },

  updated_by:{ 
    type: String
  },

  updated_on:{ 
    type:Date
  }
})

module.exports=mongoose.model('panels_skills',panelSkillSchema);