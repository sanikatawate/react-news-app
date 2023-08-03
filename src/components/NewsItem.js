import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div>


<div className="col-md-12">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">{source}</strong>
              <h3 className="mb-0">
                <header className="text-dark" href="/">{title}</header>
              </h3>
              <div className="mb-1 text-muted">{new Date(date).toGMTString()}</div>
              <p className="card-text mb-auto">{description}</p>
              <p className="card-text"><small className="text-muted">By {author}</small></p>
              <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">Full Coverage</a>
            </div>
            <img className="card-img-right flex-auto d-none d-md-block" alt="Thumbnail [200x300]" style={{width:"200px", height: "300px", objectFit:"cover"}} src={imageUrl} data-holder-rendered="true"/>
          </div>
        </div>







        {/* <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h4><span className="badge badge-secondary" style={{color:"#6c757d", paddingLeft:"0"}}>{source}</span></h4>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">Full Coverage</a>
          </div>
        </div> */}
      </div>
    )
  }
}

export default NewsItem
