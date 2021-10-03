import React from "react";

import styled from 'styled-components';
import { AccountBox } from "./Components/AccountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  background-color:orange;
  `;


function App() {
  return (
    <AppContainer>
      <AccountBox/>
    </AppContainer>
  );
}

export default App;
