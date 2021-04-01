import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import API from '../../utils/API';
// refresh token

const clientId =
  '899511652234-cls2folp54noje6mq3njs0c6f8ubqg9s.apps.googleusercontent.com';

function Login({ id }) {
  const [user, setUser] = useState([]);
  // const [userSearch, setUserSearch] = useState()
  console.log(id);

  const onSuccess = (res) => {
    // setUserSearch(res.profileObj.email);
    setUser(res.profileObj.email);
    // console.log(res);
    // console.log(`Login Success for ${res.profileObj.email}`);
    //TODO send a request to DB to identify the user,
    // *If the user exists pass back the info
    // *If user doens't exist create user in DB
    //* this will be used once checkUser is working
    //* this is to validate post is working
    // checkUser();
    updateUser();
    // saveUser();
  };
    //* updates username in results 
    function updateUser() {
      API.updateUser({
        _id: id,
        userName: user
      })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    };
    
    //* saveUser works when called
      // function saveUser() {
      //   // console.log(user.email);
      //   API.saveUser({
      //     username: user.email
      //   })
      //   // .then(res => loadUser())
      //   .then(res => console.log(res))
      //   .catch(err => console.log(err));
      // };

    //* checkUser checks to see if the user exists in the DB
    // function checkUser() {
    //   API.getUser(userSearch)
    //     .then(res => setUser(res.data))
    //     .catch(err => console.log(err));
    //     logicTest()
    // };

    //* logic test - if user already exists call loadUser function, if NOT calls saveUser function
    // function logicTest() {
    //   if (user[0].username !== userSearch) {
    //       saveUser()
    //   } else {
    //     console.log("This works")
    //   }
    // };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login.`
    );
  };

  return (
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
  );
}

export default Login;