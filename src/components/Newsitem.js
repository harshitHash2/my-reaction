import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, imageUrl, description, newsUrl, author, date} = this.props;
    return (
      <>
      <div>
        <div className="card"  style={{ margin: '10px'}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">By {author? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} className="btn btn-primary">Read full article</a>
            </div>
          </div>

        </div>

      
      </>
    )
  }
}

export default Newsitem


