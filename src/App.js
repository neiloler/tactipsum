import React, { Component } from "react";
import Lorem from "react-lorem-component";
import styled from "styled-components";
import logo from "./logo.svg";

const AppWrapper = styled.div`
  text-align: center;
`;

const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppIntro = styled.div`
  font-size: large;
`;

const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

class App extends Component {
  randomNumber = () => {
    return Math.round(Math.random() * 10) + 1;
  };

  render() {
    return (
      <AppWrapper>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <h2>Tactipsum</h2>
        </AppHeader>
        <AppIntro>
          <Lorem seed={this.randomNumber()} />
        </AppIntro>
      </AppWrapper>
    );
  }
}

export default App;
