export const refreshTokenSetup = (res) => {
  //timing to renew access token
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    console.log("newAuthRes: ", newAuthRes);
    // saveUserToken(newAuthRes.access_token)
    console.log("new auth token: ", newAuthRes.id_token);

    //Setup the other timer after the first one  finshed
    setTimeout(refreshToken, refreshTiming);
  };
  //Setup first refersh timer
  setTimeout(refreshToken, refreshTiming);
};
