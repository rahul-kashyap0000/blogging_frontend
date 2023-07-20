import { React, useEffect, useState } from 'react'
import { getMyArticles, getArticles } from '../../fetch/fetch'

export default function Landing () {
  const [myArticles, setMyArticles] = useState([])
  const [trendingArticles, setTrendingArticles] = useState([])

  useEffect(() => {
    let callGetMyArticles = async () => {
      const articles = await getMyArticles()
      setMyArticles(articles)
    }

    let callGetArticles = async () => {
      const articles = await getArticles()
      setTrendingArticles(articles)
    }

    callGetMyArticles()
    callGetArticles()
  }, [])

  const myArticleList = myArticles.map((article, index) => {
    return <li key={index}>{article.title}</li>
  })
  const trendingArticleList = trendingArticles.map((article, index) => {
    return <li key={index}>{article.title}</li>
  })
  return (
    <div>
      <h1>Your Recent Articles</h1>
      <ol>{myArticleList}</ol>

      <h1>Trending Articles</h1>
      <ol>{trendingArticleList}</ol>
    </div>
  )
}
