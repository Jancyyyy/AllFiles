import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Headers from "../Utils/Headers";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Box, Modal, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import MultiSelect from "multiselect-react-dropdown";
import { logout } from "../../features/userSlice";
import './style.css'
function UpdateUser() {
  const { id } = useParams();
  const user_name = useRef(HTMLInputElement);
  const user_id = useRef(HTMLInputElement);
  const email = useRef(HTMLInputElement);
  // const roles = useRef(HTMLInputElement);
  let [roles, setRoles] = useState([]);
  const [Email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const isActive = useRef(HTMLInputElement);
  const [roleList, setRoleList] = useState([]);
  const [userroles, setUserroles] = useState([]);
  let [finaluserroles, setFinaluserroles] = useState([]);
  let [finaluserroles1, setFinaluserroles1] = useState([]);
  const [roleMaster, setRoleMaster] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [usernameErr, setUserNameErr] = useState("");
  const [useridErr, setUserIdErr] = useState("");
  const [rolesErr, setRolesErr] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [open, setOpen] = useState(false);
  const [paragraph, setParagraph] = useState("");
  const dispatch = useDispatch();
  const [role_names, setrole_names] = useState([]);
  const rolenames = [];
  let [final_roles, setFinalRoles] = useState([]);
  const navigate = useNavigate();
  const user_data = JSON.parse(
    window.sessionStorage.getItem("user_data"),
  );

  const logged_user = user_data.name;
  useEffect(() => {
    const getRoles = async () => {
      const roleListResponse = await fetch(
        `http://localhost:5000/role/all`,
        {
          headers: {
            "x-access-token":
              window.sessionStorage.getItem("token"),
          },
        },
      );
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

  async function update(e) {
    e.preventDefault();

    final_roles.length = 0;

    roles.forEach((element) => {
      if (!final_roles.includes(element)) {
        final_roles.push(element);
      }
    });
    console.log(final_roles);
    if (
      logged_user === user_name.current.value &&
      isActive.current.checked === false
    ) {
      console.log(roleMaster);
      const result = fetch(
        `http://localhost:8080/updateUser/${id}`,
        {
          method: "PUT",
          headers: {
            "x-access-token":
              window.sessionStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user_name.current.value,
            email: Email,
            role_id: final_roles,
            is_active: isActive.current.checked,
            updated_by: logged_user,
          }),
        },
      );
      setEmailErr("");
      setRolesErr("");
      setUserIdErr("");
      setUserNameErr("");

      if (!Email) {
        return setEmailErr("Please Enter Email");
      }
      if (!roles.current.value) {
        return setRolesErr("Please Enter Roles");
      }

      if ((await result).status === 404) {
        setEmailErr("Please Enter Email");
        setUserIdErr("please Enter User ID");
        setUserNameErr("Please Enter User Name");
        setRolesErr("Please Enter Roles");
      }
      if ((await result).status === 405) {
        setEmailErr("Enter Valid Zensar Email");
      }
      if ((await result).status === 500) {
        return toast.error("Server Trashed", {
          autoClose: 1000,
        });
      }
      const user_id = JSON.parse(
        window.sessionStorage.getItem("user_data"),
      ).user_id;
      fetch("http://localhost:8080/logout", {
        method: "PUT",
        headers: {
          "x-access-token":
            window.sessionStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id }),
      });
      toast.success("Successfully Logged Out", {
        autoClose: 1000,
      });
      sessionStorage.removeItem("token");
      dispatch(logout());
      navigate("/login");
    } else {
      e.preventDefault();
      setEmailErr("");
      setRolesErr("");
      setUserIdErr("");
      setUserNameErr("");
      if (!Email) {
        return setEmailErr("Please Enter Email");
      }
      if (!user_id.current.value) {
        return setUserIdErr("Please Enter User ID");
      }

      if (user_id.current.value.length > 20) {
        return setUserIdErr(
          "User ID should not contain more than 20 characters",
        );
      }
      console.log(roleMaster);
      const result = fetch(
        `http://localhost:8080/updateUser/${id}`,
        {
          method: "PUT",
          headers: {
            "x-access-token":
              window.sessionStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user_name.current.value,
            user_id: user_id.current.value,
            email: Email,
            role_id: final_roles,
            is_active: isActive.current.checked,
            updated_by: logged_user,
          }),
        },
      );

      if ((await result).status === 404) {
        setEmailErr("Please Enter Email");
        setUserIdErr("please Enter User ID");
        setUserNameErr("Please Enter User Name");
        setRolesErr("Please Enter Roles");
      }
      if ((await result).status === 405) {
        setEmailErr("Enter Valid Zensar Email");
      }
      if ((await result).status === 500) {
        return toast.error("Server Trashed", {
          autoClose: 1000,
        });
      }
      if ((await result).status === 200) {
        toast.success("Successfully Updated the User", {
          autoClose: 1000,
        });
        navigate("/user");
      }
    }
  }

  const handleUserNameChange = (e) => {
    if (!user_name.current.value) {
      return setUserNameErr("Please Enter User Name");
    }

    if (user_name.current.value) {
      setUserNameErr("");
    }

    const names = String(user_name.current.value);

    let regex = /^[A-Za-z0-9 ]+$/;

    if (!regex.test(names)) {
      setUserNameErr(
        "Name can't include special characters",
      );
    } else {
      setUserNameErr("");
    }

    const name = String(user_name.current.value);

    if (name.length > 20) {
      return setUserNameErr(
        "User Name should not contain more than 20 characters",
      );
    }

    setDisabled(false);
  };
  const handleUserEmailChange = (e) => {
    setDisabled(false);
    const patternCheck = /[a-z0-9]+@[zensar]+\.[a-z]{2,3}/;

    if (!patternCheck.test(Email)) {
      setEmailErr("Please Enter Valid Zensar Email");
    }

    if (patternCheck.test(Email)) {
      setEmailErr("");
    }

    setEmail(e.target.value);
  };

  useEffect(() => {
    fetch(`http://localhost:8080/getbyid/${id}`, {
      method: "GET",

      headers: {
        "x-access-token":
          window.sessionStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())

      .then((data, err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(data);
        const temp = data.user[0];
        console.log(temp);
        user_name.current.value = temp.name;
        email.current.value = temp.email;
        setEmail(temp?.email);
        setUserroles([]);
        for (let x = 0; x < temp?.roles?.length; x++) {
          if (
            !userroles.includes(temp?.roles[x]?.role_name)
          ) {
            setUserroles((oldArray) => [
              ...oldArray,
              temp?.roles[x]?.role_name,
            ]);
          }
        }
        console.log(userroles);
        isActive.current.checked = temp.is_active;
      });
  }, []);

  function handleCancel(e) {
    e.preventDefault();
    navigate("/user");
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    let text = `Are you sure you want to ${
      isActive.current.checked
        ? "enable Yourself"
        : "disable Yourself, Doing So will log you out."
    } `;
    if (logged_user === user_name.current.value) {
      setOpen(true);
      setParagraph(text);
      isActive.current.checked = !isActive.current.checked;
    } else {
      // isActive.current.checked = !isActive.current.checked;
      setDisabled(!disabled);
    }
  };
  const disable = () => {
    setDisabled(!disabled);
    isActive.current.checked = !isActive.current.checked;
    setOpen(false);
  };

  return (
    <div className='wrapper'>
      <div className='App'>
        <Headers />
      </div>

      <div className='container-wrap'>
        <h2 className='mb-4 '>Update User</h2>

        <form>
          <div className='row ms-3'>
            <div className='col-md-1'>
              <div className='form-group'>
                <label
                  className='fw-bolder  '
                  for='first'>
                  User Id
                </label>
              </div>
            </div>

            <div className='col-md-5'>
              <div className='form-group'>
                <input
                  autoFocus='true'
                  id='userid'
                  type='text'
                  className={`form-control responsive ${
                    useridErr && "add__input"
                  }`}
                  ref={user_id}
                  value={id}
                  placeholder='Enter User Id'
                  disabled
                  onChange={(e) => {
                    setDisabled(false);
                  }}
                />

                {useridErr && (
                  <p className={`mb-0 mx-4 add__warning`}>
                    <ExclamationTriangleIcon className='add__warningIcon' />

                    {useridErr}
                  </p>
                )}
              </div>
            </div>

            

            <div className='col-md-1'>
              <div className='form-group'>
                <label
                  className='fw-bolder '
                  htmlFor='first'>
                  User Name
                </label>
              </div>
            </div>

            <div className='col-md-5'>
              <div className='form-group '>
                <input
                  type='text'
                  className={`form-control responsive ${
                    usernameErr && "add__input"
                  }`}
                  placeholder='Enter User Name'
                  ref={user_name}
                  onChange={handleUserNameChange}
                />

                {usernameErr && (
                  <p className={`mb-0 mx-4 add__warning`}>
                    <ExclamationTriangleIcon className='add__warningIcon' />

                    {usernameErr}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className='row ms-3'>
            <div className='col-md-1 '>
              <div className='form-group'>
                <label
                  className='fw-bolder'
                  for='first'>
                  Email
                </label>
              </div>
            </div>

            <div className='col-md-5'>
              <div className='form-group '>
                <input
                  type='text'
                  className={`form-control responsive ${
                    emailErr && "add__input"
                  }`}
                  value={Email}
                  placeholder='Enter Email Id'
                  onChange={handleUserEmailChange}
                />

                {emailErr && (
                  <p className={`mb-0 mx-4 add__warning`}>
                    <ExclamationTriangleIcon className='add__warningIcon' />

                    {emailErr}
                  </p>
                )}
              </div>
            </div>

            

            <div className='col-md-1'>
              <div className='form-group'>
                <label
                  className='fw-bolder'
                  for='first'>
                  User Role
                </label>
              </div>
            </div>

            <div className='col-md-5 user__role'>
              <div className='form-group'>
                <MultiSelect
                  className='text-dark'
                  isObject={false}
                  placeholder='  Select Roles'
                  selectedValues={userroles}
                  options={role_names.map(
                    (item) => item.role_name,
                  )}
                  showCheckbox
                  onRemove={(e) => {
                    console.log(e);
                    setDisabled(false);
                    roles.length = 0;
                    console.log(roles);
                    for (let j in e) {
                      for (let i in role_names) {
                        if (
                          role_names[i].role_name === e[j]
                        ) {
                          roles.push(role_names[i].role_id);
                        }
                      }
                    }
                    console.log(roles);
                  }}
                  onSelect={(e) => {
                    console.log(e);
                    setDisabled(false);
                    for (let j in e) {
                      for (let i in role_names) {
                        if (
                          role_names[i].role_name === e[j]
                        ) {
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
                    <ExclamationTriangleIcon className='add__warningIcon' />
                    {rolesErr}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className='row ms-3 '>
            <div className='col-md-1 '>
              <div className='form-group'>
                <label
                  className='fw-bolder'
                  for='first'>
                  isActive
                </label>
              </div>
            </div>

            <div className='col-md-4 ms-3'>
              <div className='form-group'>
                <div className='form-check form-switch form-switch-md'>
                  <input
                    className='form-check-input'
                    onChange={handleOpen}
                    type='checkbox'
                    data-testid='checkbox'
                    role='switch'
                    id='flexSwitchCheckDefault'
                    ref={isActive}></input>
                </div>
              </div>
            </div>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'>
            <Box sx={style}>
              <Typography
                id='modal-modal-title'
                variant='h4'
                component='h2'>
                <p>{paragraph}</p>
              </Typography>
              <div className='addModal__btn'>
                <div className=''>
                  <button
                    type='submit'
                    className=''
                    onClick={disable}>
                    Ok
                  </button>
                </div>
                <div className=''>
                  <button
                    onClick={handleClose}
                    className='btn btn-danger'>
                    Cancel
                  </button>
                </div>
              </div>
            </Box>
          </Modal>

          <div className='row ms-3 addList__button'>
            <div className='col-md-2'>
              <button
                type='submit'
                disabled={disabled}
                onClick={update}
                className='btn btn-primary'
                data-testid='submit'>
                Update
              </button>
            </div>

            <div className='col-md-3'>
              <button
                onClick={handleCancel}
                className='btn btn-primary'
                type='button'
                data-testid='button'>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
