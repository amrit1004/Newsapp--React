import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
        <div className="container my-3" >
    <h2>NewsMonkey- Top Headlines</h2>
    <div className="row">
      <div className="col-md-4"> <Newsitem title ="myTitle" description ="myDesc" imageUrl ="https://content.api.news/v3/images/bin/67dc4d659e89419ea1d8483027e5f22b" /></div>
      <div className="col-md-4"> <Newsitem title ="myTitle" description ="myDesc"/></div>
      <div className="col-md-4"> <Newsitem title ="myTitle" description ="myDesc"/></div>
    </div>
      </div>
    )
    
  }
}

export default News