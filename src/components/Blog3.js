import React from 'react';
import styled from 'styled-components';
import { Component } from "react";


import feed3img from '../assets/clustering.png';





class Blog3 extends Component {
    render() {
        return (
            <Body>
                <div className="Blog3">

                    <Title> Clustering</Title>
                    <div>
                        <p> Date:1/13/2000</p>
                        <ImgCss src={feed3img} alt="blog-image" />
                        <p>
                            Clustering is an unsupervised algorithm
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
                        {/* <ImgCss src={clustering_blockdiagram} alt="blog-image"/> */}
                        <p>
                            Types of clustering algorithms:
                        </p>
                        <p>
                            1) K-means
                            2) Hiearchial
                            3) Density Based Scan Clustering (DBSCAN)
                            4) Gaussian Clustering Model
                        </p>

                    </div>

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
export default Blog3;