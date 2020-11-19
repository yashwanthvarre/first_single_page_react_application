import React from "react";
import Header from "./Header";
import Main from "./Main";
import { withRouter, Switch, Route } from "react-router-dom";


import Nav from './nav.js';
import Footer from './footer.js';
import styled from 'styled-components';




const App = () => (
  <div>
    <Header />
    <Content>
      <Section>
        <Main />
      </Section>
      <Nav/>
    </Content>
    <Footer/>
    
  </div>
);

export default withRouter(App);

const Content = styled.div`
  display: grid;
  // border: 3px solid black;
  grid-template-columns: 70% 30%;
`;

const Section = styled.div`
  background-color: white;
  border: 2px solid black;
  color: black;
`;
