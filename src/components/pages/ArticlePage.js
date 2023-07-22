import React from 'react'
import { useParams } from 'react-router-dom'
import { getArticleByID } from '../../fetch/fetch';
export default function ArticlePage() {
  const { articleid } = useParams(); // If using React Router
  const article = getArticleByID(articleid);

  if (!article) {
    return <div>article not found</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  )
}
