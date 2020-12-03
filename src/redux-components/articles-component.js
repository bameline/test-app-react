import React, { useState } from "react"
import AddArticle from "./add-article-component"
import Article from "./article-component"

const Articles = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  ])
  const saveArticle = e => {
   // e.preventDefault()
    // the logic will be updated later
    console.log(e)
    setArticles(articles.concat(e));
  }

  return (
    <div>
      <AddArticle saveArticle={saveArticle} />
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  )
}

export default Articles