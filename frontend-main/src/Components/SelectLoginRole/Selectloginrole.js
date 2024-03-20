
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { login } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import logo from "../../assets/login-page-logo.png";
import "../User/UserList.scss";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

function Selectloginrole() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const [errDenied, setErrDenied] = useState(false);
  const [roleList, setRoleList] = useState([]);
  let [userrole, setRoles] = useState();
  const [rolesErr, setRoleErr] = useState("");
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:8080/getbyid/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data, err) => {
        if (err) {
          console.log(err);
          return;
        }

        setRoleList(data.user[0].roles);
      });
  }, []);

  function handlechange(e) {
    e.preventDefault();
    let r = e.target.value;
    console.log(r);
    setRoles(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit : " + userrole);
    if (!userrole) {
      return setRoleErr("Please Select a Role");
    }
    else {
      setRoleErr("");
      fetch("http://localhost:8080/login/loginwithrole", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: id,
          role_id: userrole,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.err) {
            return;
          }
          fetch(`http://localhost:5000/role/role-id/1001`, {
            headers: {
              "x-access-token": data?.token,
            },
          })
            .then((res) => {
              console.log(res);
              return res.json();
            })
            .then((roles) => {
              console.log(roles);
              if (roles.is_deleted) {
                window.sessionStorage.setItem(
                  "user_data",
                  JSON.stringify(data.user),
                );

                dispatch(
                  login({
                    username: data.user.name,
                    role_id: +userrole,
                  }),
                );
                window.sessionStorage.setItem(
                  "token",
                  data.token,
                );
              } else {
                setErrDenied(true);
              }
              return;
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <header align='center'>
      <div className='container  p-5 login-page-content col-md-5'>
        <img
          src={logo}
          className='img-fluid'
          alt='logo'
        />
        <div className='selectheader'>
          <h2 className='text-dark '>
            Choose Role to Login
          </h2>
        </div>
        {/* <form align='center'> */}
        <form align='center'>
          <div className='form-group' align='center'>
            <select
              className={`form-control ${
                rolesErr && "add__input"
              }`}
              // data-toggle="dropdown"
              value={userrole}
              onChange={handlechange}
              id='select'
              aria-label='Select Role '>
              <option
                value=''
                data-testid='selectRole'>
                Select Role
              </option>
              {roleList &&
                roleList?.map(
                  (role) =>
                    role?.is_deleted && (
                      <option value={role.role_id}>
                        {role.role_name}
                      </option>
                    ),
                )}
            </select>
            {rolesErr && (
              <p className={`mb-0 mx-4 add__warning`}>
                <ExclamationTriangleIcon className='add__warningIcon' />
                {rolesErr}
              </p>
            )}
          </div>
          <div className=' selectrole ' align='center'>
            <button
              type='submit'
              onClick={handleSubmit}
              className='btn btn-primary mt-5 me-5'
              align='center'
              data-testid='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Selectloginrole;
