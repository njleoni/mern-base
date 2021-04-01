import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '899511652234-cls2folp54noje6mq3njs0c6f8ubqg9s.apps.googleusercontent.com';

function Logout() {
  const onSuccess = (res) => {
    console.log('Logged out');
  };

  return (
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
  );
}

export default Logout;