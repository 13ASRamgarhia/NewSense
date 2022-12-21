import React, { Component } from "react";
import '../CSS/NewsItem.css'

export class NewsItem extends Component {
  render() {
    let {title, description, urlToImg, urlToNews, date, author, source, darkModeTheme} = this.props;

    return (
      <div className="card  my-2" style={{backgroundColor: darkModeTheme ? 'rgba(17,24,39,1)' : '#fff', border: darkModeTheme ? '2px solid #fff' : 'none'}}>
        <div className='card-header' style={{height: '13em', overflow: 'hidden', borderBottom: darkModeTheme ? '1px solid #999' : 'none'}}>
          <img src={urlToImg} className="card-img-top img-fluid" alt="Thumbnail"/>
        </div>
        <div className="card-body" style={{display: 'block', margin: 'auto', width: 'auto', height: '12rem', overflow: 'hidden'}}>
          <span className="badge bg-info text-dark">{source}</span>
          <h5 className="card-title" style={{textAlign: 'justify', fontWeight: 'bold', color: darkModeTheme ? '#fff' : 'initial'}}>{title}</h5>
          <p className="card-text" style={{textAlign: 'justify', color: darkModeTheme ? '#fff' : 'initial'}}>{description}</p>
        </div>
        <div className="card-footer" style={{backgroundColor: darkModeTheme ? 'rgba(17,24,39,0.9)' : '#fff', border: 'none'}}>
          <hr style={{color: darkModeTheme ? '#fff' : 'initial'}}/>
          <p style={{color: darkModeTheme ? '#fff' : 'initial'}}>Published at: {new Date(date).toGMTString()}</p>
          <p style={{color: darkModeTheme ? '#fff' : 'initial'}}>By: {author}</p>
          <a href={urlToNews} className="btn btn-outline-primary" target='_blank' rel="noreferrer" style={{borderColor: darkModeTheme ? '#fff' : 'initial', color: darkModeTheme ? '#fff' : 'initial'}}>Read more</a>
        </div>
      </div>
    );
  }
}

export default NewsItem;