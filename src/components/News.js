import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
  country:'in' ,
  pageSize:8 ,
  category: 'general'
}
  static propTypes={ 
  country: PropTypes.string ,
  pageSize:PropTypes.number,
  category:PropTypes.string
   
}


  constructor(){
    super();
    console.log("Hello i am constructor");
    this.state={
      articles :[],
      loading :false,
      page:1
    }
    
  }
  async componentDidMount(){
   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=34d37a812f2d472db5558088d4f058f4&page=1&pageSize=${this.props.pageSize}`;
   this.setState({loading:true});
   let data = await fetch(url);
   let parsedData = await data.json();
   this.setState({articles:parsedData.articles , totalResults: parsedData.totalResults, loading:false})
  }
   handlePrevClick=async()=>{
    let  url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=34d37a812f2d472db5558088d4f058f4&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let  data = await fetch(url);
    let  parsedData = await data.json();
    this.setState({
    articles:parsedData.articles,
    page: this.state.page-1 ,
    loading:false
  })
   }
   handleNextClick=async()=>{
   
   if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){
     
   } 
   else{
   let  url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=34d37a812f2d472db5558088d4f058f4&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
   this.setState({loading:true});
   let  data = await fetch(url);
   let  parsedData = await data.json();
   this.setState({
    articles:parsedData.articles,
    page: this.state.page+1,
    loading:false
  })
}
   
  }
  render() {
    return (
        <div className="container my-3" >
    <h1 className="text-center" style={{margin: '35px 0px'}}>NewsMonkey- Top Headlines</h1>
   {this.state.loading && <Spinner/>}
    <div className="row">
    {!this.state.loading &&this.state.articles.map((element)=>{
       return <div  key ={element.url}className="col-md-4"> <Newsitem  title ={element.title?element.title:""} description ={element.description? element.description:""}imageUrl ={element.urlToImage} newsUrl ={element.url}/></div>
    })}
    </div>
    <div className="container d-flex justify-content-between">
   <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; previous</button>
   <button disabled={(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))}type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
   </div>
      </div>
    
    )

  }
}

export default News