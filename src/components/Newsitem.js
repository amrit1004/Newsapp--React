import React, { Component } from 'react'

export class Newsitem extends Component {
  
  render() {
    let {title , description ,imageUrl,newsUrl} = this.props;
    return (
      <div className= "my-2">
      <div className="card" style={{width: "18rem"}}>
  <img src= {!imageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl}target="blank"className= "btn btn-dark btn-sm">Read more</a>
  </div>
</div>
   
</div>
    )
  }
}

export default Newsitem