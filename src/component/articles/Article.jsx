import React from 'react'
import './Article.css'
const Article = ({Rearchimg,title,href,para}) => {
  return (
    <div className="period__research-container_article">
      <div className="period__research-container_article-image">
        <img src={Rearchimg} alt="Research"/>
      </div>
      <div className="period__research-container_article-content">
        <div>
          <h3>{title}</h3>
          <p>{para}</p>
        </div>
        <a href={href} target="_blank" rel="noreferrer"><p>Read Full Article</p></a>
      </div>
    </div>
  )
}

export default Article
