export const getArticles = (type="", allArticles=true, sorted=true, user="me") => {
  return mockArticles
}

export const getMyArticles = (type="", allArticles=true, sorted=true, user="me") => {
    return mockArticles
  }

const mockArticles = [
  { title: 'Introduction to Artificial Intelligence' },
  { title: 'The Impact of Climate Change on Biodiversity' },
  { title: '10 Healthy Habits for a Productive Lifestyle' },
  { title: 'Exploring the Wonders of the Universe' },
  { title: 'The Art of Creative Writing' },
  { title: 'Understanding Quantum Computing' },
  { title: 'A Journey through Ancient History' }
]
