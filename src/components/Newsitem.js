import React from 'react'

const Newsitem =(props)=>{
  
  
    let {title , description ,imageUrl,newsUrl, author ,date ,source} = props;
    return (
      <div className= "my-2">
      <div className="card" >
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"style={{left:'90%',zIndex:'1'}}> {source}</span>
  <img src= {!imageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageUrl} className="card-img-top" alt="..."/>
  < div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
  
    <a href={newsUrl}target="blank"className= "btn btn-dark btn-sm">Read more</a>
  </div>
</div>
   
</div>
    )
  }

export default Newsitem