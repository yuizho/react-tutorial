import React, { FC } from "react";

interface LoginStatus {
  isLoggedIn: boolean;
}

const Greeting: FC<LoginStatus> = (props: LoginStatus) => {
  if (props.isLoggedIn) {
    return (
      <>
        <h1>Welcome back!</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>Please sign up.</h1>
      </>
    );
  }
};

export default Greeting;
