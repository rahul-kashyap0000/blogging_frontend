export const getArticles = (
  type = '',
  allArticles = true,
  sorted = true,
  user = 'me'
) => {
  return mockArticles
}

export const getMyArticles = (
  type = '',
  allArticles = true,
  sorted = true,
  user = 'me'
) => {
  return mockArticles
}

export const getArticleByID = (articleId) => {
  const article = mockArticles.find((article) => {
    return article.id === parseInt(articleId)});
  return article
}

const mockArticles = [
  { title: 'Introduction to Artificial Intelligence', id: 1 , content: "ABC1"},
  { title: 'The Impact of Climate Change on Biodiversity', id: 2 , content: "ABC2"},
  { title: '10 Healthy Habits for a Productive Lifestyle', id: 3 , content: "ABC3"},
  { title: 'Exploring the Wonders of the Universe', id: 4 , content: "ABC4"},
  { title: 'The Art of Creative Writing', id: 5 , content: "ABC5"},
  { title: 'Understanding Quantum Computing', id: 6 , content: "ABC6"},
  { title: 'A Journey through Ancient History', id: 7, content: "ABC7" }
]
