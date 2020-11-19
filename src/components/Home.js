import React from 'react'
import feed1img from '../assets/Decision_Tree.png';
import feed2img from '../assets/ANN.png';
import feed3img from '../assets/clustering.png';
import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";

const Button = styled.button`
  font-size: 2.6vmin;
  color: black;
  border-style: none;
  border-color: none;
  border-image: none;
  outline: none;
  background-color: red;
`
const Home = () => (
  <Body>
    <Title> Stories:</Title>
    <div >
      <Title> Decision Tree</Title>
      <li><Link to='/roster'>Full blog of decision tree</Link></li>
      <p> Date:25/10/2010</p>
      <ImgCss src={feed1img} alt="blog-image" />
      <p>
        Summary:
        </p>
      <p>
        Decision tree learning is one of the predictive modelling approaches used in statistics, data mining and machine learning.
        It uses a decision tree (as a predictive model) to go from observations about an item (represented in the branches) to conclusions about the item's target value (represented in the leaves).
        Tree models where the target variable can take a discrete set of values are called classification trees; in these tree structures, leaves represent class labels and branches represent conjunctions of features that lead to those class labels. Decision trees where the target variable can take continuous values (typically real numbers) are called regression trees.
        Decision trees are among the most popular machine learning algorithms given their intelligibility and simplicity
          </p>

    </div>
    <div >

      <Title> Artificial Neural Network</Title>
      <li><Link to='/schedule'>Full blog of Artificial Neural Network</Link></li>
      <p> Date 22/4/2005</p>
      <ImgCss src={feed2img} alt="blog-image" />
      <p>
        Summary:
        </p>

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

    </div>

    <div >

      <Title> Clustering</Title>
      <div>
        {/* <Button onClick={this.shoot}>Clustering</Button> */}
        <li><Link to='/clustering'>Full blog of clustering</Link></li>
        <p> Date:1/13/2000</p>
        <ImgCss src={feed3img} alt="blog-image" />
        <p>
          Summary:
        </p>
        <p>
          Clustering is the task of dividing the population or data points into a number
          of groups such that data points in the same groups are more similar to other data points in the same group than those in other groups.
          In simple words, the aim is to segregate groups with similar traits and assign them into clusters.
            </p>
        <p>
          Hard Clustering: In hard clustering, each data point either belongs to a cluster completely or not.
          For example, in the above example each customer is put into one group out of the 10 groups.
            </p>
        <p>
          Soft Clustering: In soft clustering, instead of putting each data point into a separate cluster, a probability or likelihood of that data point to be in those clusters is assigned.
          For example, from the above scenario each costumer is assigned a probability to be in either of 10 clusters of the retail store.
            </p>
        <p>
          Types of clustering algorithms:
            </p>
        <p>
          Connectivity models: As the name suggests, these models are based on the notion that the data points closer in data space exhibit more similarity to each other than the data points lying farther away.
          These models can follow two approaches. In the first approach, they start with classifying all data points into separate clusters & then aggregating them as the distance decreases.
          In the second approach, all data points are classified as a single cluster and then partitioned as the distance increases.
          Also, the choice of distance function is subjective. These models are very easy to interpret but lacks scalability for handling big datasets. Examples of these models are hierarchical clustering algorithm and its variants.
            </p>
        <p>
          Centroid models: These are iterative clustering algorithms in which the notion of similarity is derived by the closeness of a data point to the centroid of the clusters.
          K-Means clustering algorithm is a popular algorithm that falls into this category.
          In these models, the no. of clusters required at the end have to be mentioned beforehand, which makes it important to have prior knowledge of the dataset.
          These models run iteratively to find the local optima.
            </p>
      </div>

    </div>
  </Body>

)

const Body = styled.main`
  padding-left: 5%;
  color:red;
`;

const ImgCss = styled.img`
 	width: 40%;
	height: auto;
  padding: 2px, 2px;
  text-align: center;
  display: block;
  justify-content: center;
  align-items: center;
  margin: auto;
  
`;


const Title = styled.p`
 
 	font-size: 30px;
  text-align: center;
   
`;

export default Home
