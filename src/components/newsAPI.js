import React, {Component} from 'react';

class GNews extends Component{
	constructor(props){
		super(props);
		this.state = {
			articles: []
		}
	}

	async updateData(){
		fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d42f068d9f3848c8b5d2f57d2c878073')
	  	.then((response) => {
	    return response.json();
		})
	  	.then((data) => {
		    this.setState({
		    	articles: data.articles
		    });
	  	},
	  	(error) => {
          this.setState({
            error
          });
        }, 2000);
	}
	

	async componentDidMount(){
		
		this.interval = setInterval(() =>this.updateData(), 500);	

	}



	render(){
		const { error, articles } = this.state;
		console.log(articles);
		if(error){
				return <p> Error: {error.message}</p>;
		}
		return(

			<div className = "news">
				{articles.map((item,index) =>{
					return(
					<div className = "newsApi">
						<ul><li>{item.title}</li></ul>
					</div>
					);
			})}	
			</div>
			);
	}
}



export default GNews;