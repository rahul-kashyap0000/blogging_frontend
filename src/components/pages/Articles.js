import {React, useState, useEffect} from 'react'
import { getMyArticles } from '../../fetch/fetch'
import { Link } from 'react-router-dom'
export default function Articles ({article_type}) {
  const [myArticles, setMyArticles] = useState([])

  useEffect(() => {
    let callGetMyArticles = async () => {
      const articles = await getMyArticles()
      setMyArticles(articles)
    }
    callGetMyArticles()
  }, [])

  const myArticleList = myArticles.map((article, index) => {
    return (
      <Link key={article.id} to={'/article/' + article.id}>
        <li key={article.id}>{article.title}</li>
      </Link>
    )
  })
  return (
    <>
      <p>The latest articles in {article_type}</p>
      <ol>{myArticleList}</ol>
    </>
  )
}
