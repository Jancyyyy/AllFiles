import React, { useEffect, useState } from "react";
import { PencilIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import "./SingleList.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { Box, Modal, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../../features/userSlice";

function SingleList({ hash, user, search, handleSearch }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userid, setUserId] = useState();
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  let [final_roles, setFinalRoles] = useState([]);
  // const [roles, setRoles] = useState();
  let roles = [];
  const [isActive, setIsActive] = useState(user?.Action);
  const userRole = useSelector(selectUser);
  const [role, setRole] = useState("");
  const [open, setOpen] = useState(false);
  const [paragraph, setParagraph] = useState("");

  const user_data = JSON.parse(
    window.sessionStorage.getItem("user_data"),
  );
  const logged_user = user_data.name;
  const logged_role = user_data.role_id;

  // useEffect(() => {
  //   let isApiSubscribed = true;

  //   const getRoleList = async () => {
  //     const roleListResponse = await fetch(
  //       `http://localhost:5000/role/role-id/${user?.user_roles[0]?.role_id}`,
  //       {
  //         headers: {
  //           "x-access-token":
  //             window.sessionStorage.getItem("token"),
  //         },
  //       },
  //     );

  //     const roleListData = await roleListResponse.json();

  //     setRoles(roleListData?.role_name);
  //   };

  //   if (isApiSubscribed) {
  //     getRoleList();
  //   }
  //   return () => {
  //     isApiSubscribed = false;
  //   };
  // }, []);

  const handleOpen = () => {
    let text = `Are you sure you want to ${
      !isActive ? "enable" : "disable"
    } this User`;
    if (logged_user === username && isActive) {
      setOpen(true);
      setParagraph(text + " , Doing So will log you out ");
    } else {
      setOpen(true);
      setParagraph(text);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateToggle = async (e) => {
    if (logged_user === username && isActive) {
      const responseToggle = await fetch(
        `http://localhost:8080/updateIsActive/${userid}`,
        {
          method: "PUT",
          headers: {
            "x-access-token":
              window.sessionStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            is_active: !isActive,
            updated_by: logged_user,
          }),
        },
      );
      search({ preventDefault: () => {} });
      if (responseToggle.status === 200) {
        setIsActive(!isActive);
      }

      if (responseToggle.status === 500) {
        alert("Error");
      }
      const toggle = await responseToggle.json();

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
      // window.sessionStorage.setItem('user_data', '');
      toast.success("Successfully Logged Out", {
        autoClose: 1000,
      });

      sessionStorage.removeItem("token");
      dispatch(logout());

      // window.sessionStorage.setItem('token', '')
      navigate("/login");
    } else {
      const responseToggle = await fetch(
        `http://localhost:8080/updateIsActive/${userid}`,
        {
          method: "PUT",
          headers: {
            "x-access-token":
              window.sessionStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            is_active: !isActive,
            updated_by: logged_user,
          }),
        },
      );
      search({ preventDefault: () => {} });
      if (responseToggle.status === 200) {
        setIsActive(!isActive);
      }

      if (responseToggle.status === 500) {
        alert("Error");
      }
      const toggle = await responseToggle.json();
    }
  };

  useEffect(() => {
    let isApiSubscribed = true;
    setUserId(user?.user_id);
    setUserName(user?.name);
    setEmail(user?.email);
    setIsActive(user?.is_active);
    for (let x = 0; x < user?.roles?.length; x++) {
      roles.push(user?.roles[x]?.role_name);
    }
    final_roles.length = 0;
    roles.forEach((element) => {
      if (!final_roles.includes(element)) {
        final_roles.push(element);
      }
    });
  }, [user]);

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

  return (
    <>
      {
        <>
          <tr className='singleList'>
            <td>{hash}</td>
            <td>{userid}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
              {final_roles.map((role) => (
                // <>{role},{" "}</>
                <>
                  {final_roles.length > 1
                    ? `${role}, `
                    : role}
                </>
              ))}
            </td>
            <td>{isActive}</td>
            <td>
              {logged_role == 1001 && (
                <>
                  <Link to={`/edit/${userid}`}>
                    <PencilIcon className='singleList__pencilIcon' />
                  </Link>
                  <span className='bar'>|</span>
                  <span
                    className='form-check form-switch form-switch-sm'
                    style={{ display: "inline-block" }}
                    onClick={handleOpen}>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      // disabled={logged_user === username}
                      data-testid='searchCheck'
                      id='flexSwitchCheckDefault'
                      // onChange={handleUpdateToggle}
                      value={isActive}
                      checked={isActive}
                    />
                  </span>
                </>
              )}
            </td>
          </tr>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'>
            <Box sx={style}>
              <Typography
                id='modal-modal-title'
                variant='h4'
                component='h3'>
                <p>{paragraph}</p>
              </Typography>
              <div className='addModal__btn'>
                <div className=''>
                  <button
                    type='submit'
                    className=''
                    onClick={handleUpdateToggle}>
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
        </>
      }
    </>
  );
}

export default SingleList;
