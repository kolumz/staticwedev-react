import React from "react";

import { GoogleLogout } from "react-google-login";

const clientId =
  "297275039677-r49lv3tktjeq781s4v75o2omt5k3cjaf.apps.googleusercontent.com";

const Logout = () => {
  const onSuccess = (res) => {
    alert("logged out!");
    console.log(res);
  };
  const onFailure = (res) => {
    console.log(res);
  };
  return (
    <div>
      {/* <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onSuccess={onSuccess}
        cookiePolicy={"single_host_origin"}
        // isSignedIn={true}
      /> */}
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        onFailure={onFailure}
      ></GoogleLogout>
    </div>
  );
};

export default Logout;
