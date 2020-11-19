import React from 'react';
import { Component } from "react";

import styled from 'styled-components';
// import Header from 'header.js';
import feed2img from '../assets/ANN.png';




class Blog2 extends Component {
    render() {
        return (
            <Body>
                <div className="Blog2">
                    <Title> Artificial Neural Network</Title>
                    <p> Date : 22/4/2005</p>
                    <ImgCss src={feed2img} alt="blog-image" />
                    <p>
                        An artificial neural network (ANN) is the piece of a computing system designed to simulate the way the human brain analyzes and processes information.
                        It is the foundation of artificial intelligence (AI) and solves problems that would prove impossible or difficult by human or statistical standards.
                        ANNs have self-learning capabilities that enable them to produce better results as more data becomes available.
                        Artificial neural networks are built like the human brain, with neuron nodes interconnected like a web.
                        The human brain has hundreds of billions of cells called neurons. Each neuron is made up of a cell body that is responsible for processing information by carrying information towards (inputs) and away (outputs) from the brain.
                        An ANN initially goes through a training phase where it learns to recognize patterns in data, whether visually, aurally, or textually.
                        During this supervised phase, the network compares its actual output produced with what it was meant to produce—the desired output.
                        The difference between both outcomes is adjusted using backpropagation.
                        This means that the network works backward, going from the output unit to the input units to adjust the weight of its connections between the units until the difference between the actual and desired outcome produces the lowest possible error.
                    </p>
                    {/* <ImgCss src={neural_network} alt="blog-image" /> */}
                    <p>
                        How do Artificial Neural Networks work?
                    </p>
                    <p>
                        1) We have an input layer which is the data we provide to the ANN.
                        2) We have the hidden layers, which is where the magic happens.
                        3) Lastly, we have the output layer, which is where the finished computations of the network are placed for us to use.
                        4) Every layer has a certain set of neurons.
                        5) ANN is a kind of supervised learning algorithm.
                        6) After the input gets passed through all the layers it checks wether the output is similar to labeled data or not.
                        6)If the data is matched then it is fine or else the network starts back propagation .i.e the process starts all over again so that the oupyt and input match.
                    </p>
                </div>
            </Body>
        );
    }
}



const ImgCss = styled.img`
 	width: 100%;
	height: auto;
	padding: 2px, 2px;
`;
const Body = styled.main`
  padding-left: 5%;
  color:red;
  `;

const Title = styled.p`
 	font-weight: bold;
 	 font-size: 24px;
 	 text-align: center;
`;
export default Blog2;