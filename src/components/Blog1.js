import React, { Component } from 'react';

import styled from 'styled-components';
import feed1img from '../assets/Decision_Tree.png';


class Blog1 extends Component {
    render() {
        return (
            <Body>
                <div className="Blog1">
                    <Title> Decision Tree</Title>
                    <p> Date: 25/10/2010
                    </p>
                    <ImgCss src={feed1img} alt="blog-image" />
                    <p>
                        Decision tree learning is one of the predictive modelling approaches used in statistics, data mining and machine learning.
                        It uses a decision tree (as a predictive model) to go from observations about an item (represented in the branches) to conclusions about the item's target value (represented in the leaves).
                        Tree models where the target variable can take a discrete set of values are called classification trees; in these tree structures, leaves represent class labels and branches represent conjunctions of features that lead to those class labels. Decision trees where the target variable can take continuous values (typically real numbers) are called regression trees.
                        Decision trees are among the most popular machine learning algorithms given their intelligibility and simplicity
                    </p>
                    <p>
                        Why do we use decision trees?
                    </p>
                    <p>
                        It is mainly used to define the decision making process by taking different attributes into consideration\
                        As the goal of a decision tree is that it makes the optimal choice at the end of each node it needs an algorithm that is capable of doing just that.
                    </p>
                    <p>
                        Steps for creating a decision tree:
                    </p>
                    <p>
                        1) Calculate the entropy of the given data.
                        2) Calculate the information gain for all the attributes. Choose the attributes which has the highest node as the root element of the tree.
                        3)Repeat step 2 until there are no attributes left to evaluate.
                        4) Finally a decison tree
                    </p>
                </div>
            </Body>
        )
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
font - weight: bold;
font - size: 24px;
text - align: center;
`;
export default Blog1;