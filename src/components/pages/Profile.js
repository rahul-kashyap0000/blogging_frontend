import { React, useEffect, useState } from 'react'
import { getMyArticles } from '../../fetch/fetch'
import { Link } from 'react-router-dom'
export default function Profile () {
  const user = 'Rahul'
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
      <h1>Hey {user}</h1>

      <p>Here are all your posts:</p>
      <ol>{myArticleList}</ol>
    </>
  )
}
