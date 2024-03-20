// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import Headers from "../Utils/Headers";
// import validator from "validator";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
// import MultiSelect from "multiselect-react-dropdown";
// function AddUser() {
//   const [username, setUserName] = useState("");
//   const rolenames = [];
//   const [role_names, setrole_names] = useState([]);
//   const [userid, setUserId] = useState("");
//   const [email, setEmail] = useState("");
//   let [roles, setRoles] = useState([]);
//   let [final_roles, setFinalRoles] = useState([]);
//   const [isActive, setIsActive] = useState(true);
//   const [roleList, setRoleList] = useState([]);
//   const [emailErr, setEmailErr] = useState("");
//   const [usernameErr, setUserNameErr] = useState("");
//   const [useridErr, setUserIdErr] = useState("");
//   const [rolesErr, setRolesErr] = useState("");
//   const navigate = useNavigate();
//   const user_data = JSON.parse(
//     window.sessionStorage.getItem("user_data"),
//   );
//   const logged_user = user_data.name;

//   useEffect(() => {
//     const getRoles = async () => {
//       const roleListResponse = await fetch(
//         `http://localhost:5000/role/all`,
//         {
//           headers: {
//             "x-access-token":
//               window.sessionStorage.getItem("token"),
//           },
//         },
//       );
//       const roleListData = await roleListResponse.json();

//       for (let i = 0; i < roleListData.role.length; i++) {
//         rolenames.push(roleListData.role[i].role_name);
//       }
//       setrole_names(roleListData.role);
//       console.log(rolenames.length);
//       setRoleList(roleListData.role);
//     };
//     getRoles();
//   }, []);
//   console.log(role_names);
//   const handleCancel = (e) => {
//     e.preventDefault();
//     setUserName("");
//     setEmail("");
//     setUserId("");
//     setRoles("");
//     setIsActive(false);
//     navigate("/user");
//   };
//   const handleUserIDChange = (e) => {
//     if (!userid) {
//       setUserIdErr("Please Enter User ID");
//     }
//     if (userid) {
//       setUserIdErr("");
//     }
//     let regex = /^[A-Za-z0-9 ]+$/;

//     if (!regex.test(userid)) {
//       setUserIdErr("Name can't include special characters");
//     } else {
//       setUserIdErr("");
//     }
//     if (userid.length > 6) {
//       setUserIdErr(
//         "User ID should not be more than 6 characters",
//       );
//     }
//     setUserId(e.target.value);
//   };
//   const handleUserNameChange = (e) => {
//     if (!username) {
//       setUserNameErr("Please Enter User Name");
//     }
//     if (username) {
//       setUserNameErr("");
//     }
//     let regex = /^[A-Za-z0-9 ]+$/;

//     if (!regex.test(username)) {
//       setUserNameErr(
//         "Name can't include special characters",
//       );
//     } else {
//       setUserNameErr("");
//     }
//     if (username.length > 20) {
//       setUserNameErr(
//         "User Name should not be more than 20 characters",
//       );
//     }
//     setUserName(e.target.value);
//   };
//   const handleUserEmailChange = (e) => {
//     const patternCheck = /[a-z0-9]+@[zensar]+\.[a-z]{2,3}/;
//     if (!patternCheck.test(email)) {
//       setEmailErr("Please Enter Valid Zensar Email");
//     }
//     if (patternCheck.test(email)) {
//       setEmailErr("");
//     }
//     setEmail(e.target.value);
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     final_roles.length = 0;
//     roles.forEach((element) => {
//       if (!final_roles.includes(element)) {
//         final_roles.push(element);
//       }
//     });
//     console.log(final_roles);
//     setEmailErr("");
//     setRolesErr("");
//     setUserIdErr("");
//     setUserNameErr("");
//     if (!email) {
//       setEmailErr("Please Enter Email");
//     }
//     if (!userid) {
//       setUserIdErr("Please Enter User ID");
//     }
//     if (userid.length > 20) {
//       setUserIdErr(
//         "User ID should not contain more than 20 characters",
//       );
//     }
//     if (!username) {
//       setUserNameErr("Please Enter User Name");
//     }
//     if (username.length > 20) {
//       setUserIdErr(
//         "User Name should not contain more than 20 characters",
//       );
//     }
//     if (!roles) {
//       setRolesErr("Please Enter Roles");
//     }
//     var check_email = email;
//     if (validator.isEmail(check_email)) {
//       const user = {
//         username,
//         roles,
//         userid,
//         email,
//         isActive,
//       };
//       console.log(user);
//       const result = await fetch(
//         "http://localhost:8080/addUser",
//         {
//           method: "POST",
//           headers: {
//             "x-access-token":
//               window.sessionStorage.getItem("token"),
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             user_id: userid,
//             name: username,
//             email: email,
//             is_active: isActive,
//             created_by: logged_user,
//             role_id: final_roles,
//           }),
//         },
//       );
//       const data = await result.json();
//       if (result.status === 404) {
//         setEmailErr("Please Enter Email");
//         setUserIdErr("please Enter User ID");
//         setUserNameErr("Please Enter User Name");
//         setRolesErr("Please Enter Roles");
//       }
//       if (result.status === 401) {
//         setUserIdErr("User ID Already Exists");
//       }

//       if (result.status === 402) {
//         setUserNameErr("User Name Already Exists");
//       }
//       if (result.status === 405) {
//         setEmailErr("Enter Valid Email");
//       }
//       if (result.status === 403) {
//         setEmailErr("User Email Already Exists");
//       }
//       if (result.status === 500) {
//         return toast.error("Server Trashed", {
//           autoClose: 1000,
//         });
//       }
//       if (result.status === 200) {
//         toast.success("Successfully Added New User", {
//           autoClose: 1000,
//         });
//         setUserId("");
//         setUserName("");
//         setEmail("");
//         // final_roles.length=0;
//         // roles.length=0;
//         setFinalRoles([]);
//         setRoles([]);
//         setIsActive(true);
//       }
//     } else {
//       setEmailErr("Please Enter Valid Email");
//     }
//   };

//   return (
//     <div className='p-2'>
//       <div className='App'>
//         <Headers />
//       </div>
//       <div className='container-wrap p-3'>
//         <h2
//           className='mb-4 '
//           data-testid='AddUser'>
//           Add User
//         </h2>
//         <form>
//           <div className='row mb-3'>
//             <div className='col-md-1'>
//               <div className='form-group px-2'>
//                 <label
//                   className='fw-bolder  '
//                   htmlFor='first'>
//                   User Id
//                 </label>
//               </div>
//             </div>

//             <div className='col-md-4'>
//               <div className='form-group'>
//                 <input
//                   type='text'
//                   className={`form-control ${
//                     useridErr && "add__input"
//                   }`}
//                   value={userid}
//                   onChange={handleUserIDChange}
//                   placeholder='Enter User Id'
//                 />
//                 {useridErr && (
//                   <p className={`mb-0 mx-4 add__warning`}>
//                     <ExclamationTriangleIcon className='add__warningIcon' />
//                     {useridErr}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className='col-sm-1'></div>
//             <div className='col-md-1'>
//               <div className='form-group px-2'>
//                 <label
//                   className='fw-bolder '
//                   htmlFor='first'>
//                   User Name
//                 </label>
//               </div>
//             </div>

//             <div className='col-md-4'>
//               <div className='form-group '>
//                 <input
//                   type='text'
//                   className={`form-control ${
//                     usernameErr && "add__input"
//                   }`}
//                   placeholder='Enter User Name'
//                   value={username}
//                   onChange={handleUserNameChange}
//                 />
//                 {usernameErr && (
//                   <p className={`mb-0 mx-4 add__warning`}>
//                     <ExclamationTriangleIcon className='add__warningIcon' />
//                     {usernameErr}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div className='row mb-3'>
//             <div className='col-md-1 '>
//               <div className='form-group px-2'>
//                 <label
//                   className='fw-bolder'
//                   htmlFor='first'>
//                   Email
//                 </label>
//               </div>
//             </div>

//             <div className='col-md-4'>
//               <div className='form-group '>
//                 <input
//                   type='text'
//                   className={`form-control ${
//                     emailErr && "add__input"
//                   }`}
//                   value={email}
//                   onChange={handleUserEmailChange}
//                   placeholder='Enter Email Id'
//                 />
//                 {emailErr && (
//                   <p className={`mb-0 mx-4 add__warning`}>
//                     <ExclamationTriangleIcon className='add__warningIcon' />
//                     {emailErr}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div className='col-sm-1'></div>
//             <div className='col-md-1'>
//               <div className='form-group px-2'>
//                 <label
//                   className='fw-bolder'
//                   htmlFor='first'>
//                   User Role
//                 </label>
//               </div>
//             </div>

//             <div className='col-md-4'>
//               <div className='form-group'>
//                 <MultiSelect
//                   placeholder='  Select Roles'
//                   className='text-dark'
//                   isObject={false}
//                   selectedValues={final_roles}
//                   options={role_names.map(
//                     (item) => item.role_name,
//                   )}
//                   showCheckbox
//                   value={roles}
//                   onRemove={(e) => {
//                     console.log(e);
//                     roles.length = 0;
//                     console.log(roles);
//                     for (let j in e) {
//                       for (let i in role_names) {
//                         if (
//                           role_names[i].role_name === e[j]
//                         ) {
//                           roles.push(role_names[i].role_id);
//                         }
//                       }
//                     }
//                     console.log(roles);
//                   }}
//                   onSelect={(e) => {
//                     console.log(e);
//                     for (let j in e) {
//                       for (let i in role_names) {
//                         if (
//                           role_names[i].role_name === e[j]
//                         ) {
//                           //console.log(role_names[i].role_id)
//                           roles.push(role_names[i].role_id);
//                         }
//                       }
//                     }
//                     //console.log(roles)
//                   }}
//                 />
//                 {rolesErr && (
//                   <p className={`mb-0 mx-4 add__warning`}>
//                     <ExclamationTriangleIcon className='add__warningIcon' />
//                     {rolesErr}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className='row g-3'>
//             <div className='col-sm-1 '>
//               <label className='fw-bolder px-2 py-1'>
//                 isActive
//               </label>
//             </div>
//             &nbsp;&nbsp;
//             <div className='col-sm-3 form-check form-switch'>
//               <input
//                 className='form-check-input'
//                 type='checkbox'
//                 checked='true'
//                 role='switch'
//                 id='flexSwitchCheckDefault'
//                 data-testid='checkbox'
//                 value={isActive}
//                 onChange={(e) =>
//                   setIsActive(e.target.checked)
//                 }
//               />
//             </div>
//           </div>
//           <div className='row addList__button'>
//             <div className='col-md-2'>
//               <button
//                 type='submit'
//                 onClick={handleSubmit}
//                 className='btn btn-primary'
//                 data-testid='submit'>
//                 Submit
//               </button>
//             </div>
//             <div className='col-md-3'>
//               <button
//                 onClick={handleCancel}
//                 className='btn btn-primary'
//                 type='button'
//                 data-testid='button'>
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddUser;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Headers from "../Utils/Headers";
import validator from "validator";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import MultiSelect from "multiselect-react-dropdown";
import "./style.css";
function AddUser() {
  const [username, setUserName] = useState("");
  const rolenames = [];
  const [role_names, setrole_names] = useState([]);
  const [userid, setUserId] = useState("");
  const [email, setEmail] = useState("");
  let [roles, setRoles] = useState([]);
  let [final_roles, setFinalRoles] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [roleList, setRoleList] = useState([]);
  const [emailErr, setEmailErr] = useState("");
  const [usernameErr, setUserNameErr] = useState("");
  const [useridErr, setUserIdErr] = useState("");
  const [rolesErr, setRolesErr] = useState("");
  const navigate = useNavigate();
  const user_data = JSON.parse(window.sessionStorage.getItem("user_data"));
  const logged_user = user_data.name;

  useEffect(() => {
    const getRoles = async () => {
      const roleListResponse = await fetch(`http://localhost:5000/role/all`, {
        headers: {
          "x-access-token": window.sessionStorage.getItem("token"),
        },
      });
      const roleListData = await roleListResponse.json();

      for (let i = 0; i < roleListData.role.length; i++) {
        rolenames.push(roleListData.role[i].role_name);
      }
      setrole_names(roleListData.role);
      console.log(rolenames.length);
      setRoleList(roleListData.role);
    };
    getRoles();
  }, []);
  console.log(role_names);
  const handleCancel = (e) => {
    e.preventDefault();
    setUserName("");
    setEmail("");
    setUserId("");
    setRoles("");
    setIsActive(false);
    navigate("/user");
  };
  const handleUserIDChange = (e) => {
    if (!userid) {
      setUserIdErr("Please Enter User ID");
    }
    if (userid) {
      setUserIdErr("");
    }
    let regex = /^[A-Za-z0-9 ]+$/;

    if (!regex.test(userid)) {
      setUserIdErr("Name can't include special characters");
    } else {
      setUserIdErr("");
    }
    if (userid.length > 6) {
      setUserIdErr("User ID should not be more than 6 characters");
    }
    setUserId(e.target.value);
  };
  const handleUserNameChange = (e) => {
    if (!username) {
      setUserNameErr("Please Enter User Name");
    }
    if (username) {
      setUserNameErr("");
    }
    let regex = /^[A-Za-z0-9 ]+$/;

    if (!regex.test(username)) {
      setUserNameErr("Name can't include special characters");
    } else {
      setUserNameErr("");
    }
    if (username.length > 20) {
      setUserNameErr("User Name should not be more than 20 characters");
    }
    setUserName(e.target.value);
  };
  const handleUserEmailChange = (e) => {
    const patternCheck = /[a-z0-9]+@[zensar]+\.[a-z]{2,3}/;
    if (!patternCheck.test(email)) {
      setEmailErr("Please Enter Valid Zensar Email");
    }
    if (patternCheck.test(email)) {
      setEmailErr("");
    }
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    final_roles.length = 0;
    roles.forEach((element) => {
      if (!final_roles.includes(element)) {
        final_roles.push(element);
      }
    });
    console.log(final_roles);
    setEmailErr("");
    setRolesErr("");
    setUserIdErr("");
    setUserNameErr("");
    if (!email) {
      return setEmailErr("Please Enter Email");
    }
    if (!userid) {
      return setUserIdErr("Please Enter User ID");
    }
    if (userid.length > 20) {
      return setUserIdErr("User ID should not contain more than 20 characters");
    }
    if (!username) {
      return setUserNameErr("Please Enter User Name");
    }
    if (username.length > 20) {
      return setUserIdErr(
        "User Name should not contain more than 20 characters"
      );
    }
    if (roles.length === 0) {
      return setRolesErr("Please Enter Roles");
    }
    var check_email = email;
    if (validator.isEmail(check_email)) {
      const user = {
        username,
        roles,
        userid,
        email,
        isActive,
      };
      console.log(user);
      const result = await fetch("http://localhost:8080/addUser", {
        method: "POST",
        headers: {
          "x-access-token": window.sessionStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userid,
          name: username,
          email: email,
          is_active: isActive,
          created_by: logged_user,
          role_id: final_roles,
        }),
      });
      const data = await result.json();
      if (result.status === 404) {
        setEmailErr("Please Enter Email");
        setUserIdErr("please Enter User ID");
        setUserNameErr("Please Enter User Name");
        setRolesErr("Please Enter Roles");
      }
      if (result.status === 401) {
        setUserIdErr("User ID Already Exists");
      }

      if (result.status === 402) {
        setUserNameErr("User Name Already Exists");
      }
      if (result.status === 405) {
        setEmailErr("Enter Valid Email");
      }
      if (result.status === 403) {
        setEmailErr("User Email Already Exists");
      }
      if (result.status === 500) {
        return toast.error("Server Trashed", {
          autoClose: 1000,
        });
      }
      if (result.status === 200) {
        toast.success("Successfully Added New User", {
          autoClose: 1000,
        });
        setUserId("");
        setUserName("");
        setEmail("");
        // final_roles.length=0;
        // roles.length=0;
        setFinalRoles([]);
        setRoles([]);
        setIsActive(true);
      }
    } else {
      setEmailErr("Please Enter Valid Email");
    }
  };

  return (
    <div className="wrapper">
      <div className="App">
        <Headers />
      </div>
      <div className="container-wrap">
        <h2 className="mb-4 " data-testid="AddUser">
          Add User
        </h2>
        <form>
          <div className="row ms-3">
            <div className="col-md-1">
              <div className="form-group">
                <label className="fw-bolder  " htmlFor="first">
                  User Id
                </label>
              </div>
            </div>

            <div className="col-md-5">
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control responsive ${
                    useridErr && "add__input"
                  }`}
                  value={userid}
                  onChange={handleUserIDChange}
                  placeholder="Enter User Id"
                />
                {useridErr && (
                  <p className={`mb-0 mx-4 add__warning`}>
                    <ExclamationTriangleIcon className="add__warningIcon" />
                    {useridErr}
                  </p>
                )}
              </div>
            </div>

            <div className="col-md-1">
              <div className="form-group">
                <label className="fw-bolder " htmlFor="first">
                  User Name
                </label>
              </div>
            </div>

            <div className="col-md-5">
              <div className="form-group ">
                <input
                  type="text"
                  className={`form-control responsive ${
                    usernameErr && "add__input"
                  }`}
                  placeholder="Enter User Name"
                  value={username}
                  onChange={handleUserNameChange}
                />
                {usernameErr && (
                  <p className={`mb-0 mx-4 add__warning`}>
                    <ExclamationTriangleIcon className="add__warningIcon" />
                    {usernameErr}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="row ms-3">
            <div className="col-md-1 ">
              <div className="form-group">
                <label className="fw-bolder" htmlFor="first">
                  Email
                </label>
              </div>
            </div>

            <div className="col-md-5">
              <div className="form-group ">
                <input
                  type="text"
                  className={`form-control responsive ${
                    emailErr && "add__input"
                  }`}
                  value={email}
                  onChange={handleUserEmailChange}
                  placeholder="Enter Email Id"
                />
                {emailErr && (
                  <p className={`mb-0 mx-4 add__warning`}>
                    <ExclamationTriangleIcon className="add__warningIcon" />
                    {emailErr}
                  </p>
                )}
              </div>
            </div>

            <div className="col-md-1">
              <div className="form-group">
                <label className="fw-bolder" htmlFor="first">
                  User Role
                </label>
              </div>
            </div>

            <div className="col-md-5 user__role">
              <div className="form-group">
                <MultiSelect
                  className={`${rolesErr && "add__input"}`}
                  placeholder="  Select Roles"
                  isObject={false}
                  selectedValues={final_roles}
                  options={role_names.map((item) => item.role_name)}
                  showCheckbox
                  value={roles}
                  onRemove={(e) => {
                    console.log(e);
                    roles.length = 0;
                    console.log(roles);
                    for (let j in e) {
                      for (let i in role_names) {
                        if (role_names[i].role_name === e[j]) {
                          roles.push(role_names[i].role_id);
                        }
                      }
                    }
                    console.log(roles);
                  }}
                  onSelect={(e) => {
                    console.log(e);
                    for (let j in e) {
                      for (let i in role_names) {
                        if (role_names[i].role_name === e[j]) {
                          //console.log(role_names[i].role_id)
                          roles.push(role_names[i].role_id);
                        }
                      }
                    }
                    //console.log(roles)
                  }}
                />
                {rolesErr && (
                  <p className={`mb-0 mx-4 add__warning`}>
                    <ExclamationTriangleIcon className="add__warningIcon" />
                    {rolesErr}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="row ms-3">
            <div className="col-md-1 ">
              <label className="fw-bolder">isActive</label>
            </div>

            <div className="col-md-4 ms-3 form-check form-switch px-5">
              <input
                className="form-check-input"
                type="checkbox"
                checked="true"
                role="switch"
                id="flexSwitchCheckDefault"
                data-testid="checkbox"
                value={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
              />
            </div>
          </div>
          <div className="row addList__button ms-3">
            <div className="col-md-2">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary"
                data-testid="submit"
              >
                Submit
              </button>
            </div>
            <div className="col-md-3">
              <button
                onClick={handleCancel}
                className="btn btn-primary"
                type="button"
                data-testid="button"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
