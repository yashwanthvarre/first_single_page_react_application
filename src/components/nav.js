import React from 'react';
import GNews from './newsAPI';
import styled from 'styled-components';
import { Button} from 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";




function Nav() {
    return (
            <div>
                <Link to="/">Home</Link>
                <Heading> News:</Heading>
                <GNews />
                <Courtesy>
                    Powered by google
                </Courtesy>
            </div>
    );
}


const Heading = styled.p`
	font-size: 1.5em;
	font-weight: bold;
	color: palevioletred;
	padding-left: 5%;
`;

 

const Courtesy = styled.p`
	font-size: small;
	font-style: italic;
	color: black;
`;
export default Nav;