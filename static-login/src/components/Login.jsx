import React from "react";
import Input from "./Input";
import Button from "./Button";
import WelcomeH1 from "./WelcomeH1";
import userMock from "../Mock/MockUser";

let isLogged = true;

const loadUser = () => {
  return `Olá ${userMock.name}, seja bem vindo!`;
};

const sendForm = () => {
  let userName = document.getElementById("user");
  let passWord = document.getElementById("password");
};

const verificarLogin = () => {
  if (!isLogged) {
    return (
      <>
        <form className="form">
          <WelcomeH1 content="Olá anonimo, por favor faça Login!" />
          <br />
          <Input id="user" type="text" placeHolder="Username" />
          <Input id="password" type="text" placeHolder="Password" />
          <Button type="submit" content="Logar" onclick={sendForm()} />
        </form>
      </>
    );
  } else {
    return <WelcomeH1 content={loadUser()} />;
  }
};

function Login(props) {
  return <div className="container">{verificarLogin()}</div>;
}

export default Login;
