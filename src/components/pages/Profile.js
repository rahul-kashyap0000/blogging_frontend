import { React, useEffect, useState } from 'react'
import { getMyArticles } from '../../fetch/fetch'
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
    return <li key={index}>{article.title}</li>
  })

  return (
    <>
      <h1>Hey {user}</h1>

      <p>Here are all your posts:</p>
      <ol>{myArticleList}</ol>
    </>
  )
}
