import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, imageUrl, description, newsUrl} = this.props;
    return (
      <>
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

        </div>

      
      </>
    )
  }
}

export default Newsitem


