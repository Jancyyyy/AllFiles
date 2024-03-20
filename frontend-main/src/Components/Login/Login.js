import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./Login.css";
import { login } from "../../features/userSlice";
import logo from "../../assets/login-page-logo.png";
import visibleImg from "../../assets/visible.png";
import inVisibleImg from "../../assets/invisible.png";
import { useDispatch } from "react-redux";

const hostURL = "http://localhost:8080";

function LoginPage() {
  var user_name = useRef(HTMLInputElement);
  var password = useRef(HTMLInputElement);
  var rememberMe = useRef(HTMLInputElement);
  var [loginStatus, setLoginStatus] = useState(<></>);
  var [loginBtnEnable, setLoginBtnEnable] = useState(true);
  var [visible, setVisible] = useState(false);
  const [cookie, setCookie] = useCookies(["loginData"]);
  const navigate = useNavigate();
  const [errDenied, setErrDenied] = useState(false);

  const dispatch = useDispatch();

  function cookieParse(cookie) {
    let res = cookie.split("; ");
    for (let i in res) {
      let temp = res[i].split("=");
      res[i] = [temp[0], temp[1]];
    }
    let result = {};
    for (let i of res) {
      result[i[0]] = unescape(i[1]); //.replace('%20', " ")//.replace('%40', "@");
    }
    return result;
  }



  useEffect(() => {
    const cookies = cookieParse(document.cookie);
    if (cookies.User_Name) {
      user_name.current.value = cookies.User_Name;
      // password.current.value = (cookies.Password);
    }
    if (user_name.current.value.length) {
      setLoginBtnEnable(false);
    }
  }, []);

  function handlesinglerole(id,userrole) {
   // e.preventDefault();
   console.log(id);
   console.log(userrole)
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

  function loginSubmit(e) {
    e.preventDefault();
    if (rememberMe.current.checked) {
      setCookie("User_Name", user_name.current.value, {
        path: "/",
        maxAge: 1 * 24 * 60 * 60,
      });
    }
    fetch(hostURL + "/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user_name.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.err) {
          setLoginStatus(
            <small className='text-danger'>
              {data.err}
            </small>,
          );
          return;
        }
        fetch(`http://localhost:8080/getbyid/${data.user.user_id}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data, err) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log(data.user[0].user_id);
            console.log(data.user[0].roles[0].role_id)
            if(data.user[0].roles.length==1){
              handlesinglerole(data.user[0].user_id,data.user[0].roles[0].role_id);
            }
            else{
              navigate(`/selectrole/${data.user[0].user_id}`);
            }
          });
      
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function checkInputFields() {
    if (
      user_name.current.value.length > 0 &&
      password.current.value.length > 0
    ) {
      setLoginBtnEnable(false);
    } else {
      setLoginBtnEnable(true);
    }
  }

  function toggleVisibility() {
    setVisible((prev) => !prev);
  }

  return (
    <header align='center'>
      <div className='container  p-5 login-page-content col-md-5'>
        <img
          src={logo}
          className='img-fluid'
          alt='logo'
        />
        <br />
        <h5>{loginStatus}</h5>
        {errDenied && (
          <div className='search__warning'>
            <p className='m-0'>Access Denied!!</p>
            <p className='m-0'>
              Please Contact Panel Admin
            </p>
          </div>
        )}
        <form className='login-page-form'>
          <div className='form-group'>
            <label
              for='login-user-id'
              className='login__label'
              style={{ float: "left" }}>
              <b>User ID or Email</b>
            </label>
            <input
              ref={user_name}
              onInput={checkInputFields}
              id='login-user-id'
              type='text'
              className='form-control login__input'
              placeholder='Enter your User ID or email'
            />
          </div>
          <div className='form-group'>
            <label
              for='login-password'
              className='login__label'
              style={{ float: "left" }}>
              <b>Password</b>
            </label>
            <div className='password-field'>
              <input
                ref={password}
                onInput={checkInputFields}
                id='login-password'
                type={visible ? "text" : "password"}
                className='form-control login__input'
                placeholder='Enter your password'
              />
              <img
                id='password-visibility'
                onClick={toggleVisibility}
                src={
                  visible ? visibleImg : inVisibleImg
                }></img>
            </div>
          </div>
          <div className='small'>
            <div style={{ float: "left" }}>
              <input
                type='checkbox'
                ref={rememberMe}
                className='form-check-input '
                id='login-remember-me'
              />
              <label
                for='login-remember-me'
                style={{ marginLeft: "5px" }}
                className='form-check-label login__label'>
                Remember me
              </label>
            </div>

            <div style={{ float: "right" }}>
              <Link to='/forgot'>Forgot Password ?</Link>
            </div>
          </div>
          <button
            onClick={loginSubmit}
            disabled={loginBtnEnable}
            id='login-submit-btn'
            className='btn btn-primary w-100'>
            Login
          </button>
        </form>
      </div>
    </header>
  );
}

export default LoginPage;
