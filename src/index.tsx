import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { format } from "path";
import Clock from "./components/Clock";
import Toggle from "./components/Toggle";
import Greeting from "./components/Greeting";
import NumberList from "./components/NumberList";
import Form from "./components/Form";

type User = {
  firstName: string;
  lastName: string;
};

const user = {
  firstName: "Harper",
  lastName: "Perez",
};
function formatName(user: User) {
  return user.firstName + " " + user.lastName;
}

function tick() {
  ReactDOM.render(
    <>
      <Clock />
      <Toggle />
      <Greeting isLoggedIn={false} />
      <NumberList numbers={[1, 2, 3, 4, 5]} />
      <Form />
    </>,
    document.getElementById("root")
  );
}

setInterval(tick, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
