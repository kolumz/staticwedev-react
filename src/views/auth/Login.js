import React from "react";

import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "./store/authSlice";
const clientId =
  "297275039677-r49lv3tktjeq781s4v75o2omt5k3cjaf.apps.googleusercontent.com";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      // send data to store
      dispatch(login({ result, token }));
      //navigate to hamepage
      navigate("/");
    } catch {}
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log(res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        // isSignedIn={true}
      />
      ,
    </div>
  );
};

export default Login;
