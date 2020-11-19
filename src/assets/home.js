import React, {Component} from 'react';
// import '../../commons.css';
import Header from '../../components/js/header.js';
import Main from '../../components/js/main.js';
import Nav from '../../components/js/nav.js';
import Footer from '../../components/js/footer.js';
import styled from 'styled-components';

class Home extends Component{
  render(){
    return(
        <div>
          <Header />
          <Content>
            <Section>
              <Main />
            </Section>
            <Nav />
          </Content>
          <Footer />
        </div>
    );
  }
}
export default Home;


const Content = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`;  

const Section = styled.div`
  background-color: black;
  color: white;
`;