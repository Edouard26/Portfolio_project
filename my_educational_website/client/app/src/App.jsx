import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Articles, setArticles] = useState([]);
  const [ArticleTitle, setArticleTitle] = useState('');
  const [ArticleAuthor, setArticleAuthor] = useState('');
  const [ArticleContent, setArticleContent] = useState('');

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/articles/");
      const data = await response.json();
      setArticles(data);
    } catch(err) {
      console.log(err);
    }
  };

  const addArticle = async () => {
    const newArticle = { title: ArticleTitle, content: ArticleContent, author: ArticleAuthor };
    try {
      const response = await fetch("http://127.0.0.1:8000/api/articles/create", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newArticle),
      });
      if (response.ok) {
        fetchArticles();
        setArticleTitle('');
        setArticleAuthor('');
        setArticleContent('');
      }
    } catch (err) {
      console.log(err);
    }
  };
    
  return (
    <>
      <h1> ML-Explorer </h1>

      <div>
        <input 
          type="text" 
          placeholder="Article Name"
          value={ArticleTitle}
          onChange={(e) => setArticleTitle(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Article Author"
          value={ArticleAuthor}
          onChange={(e) => setArticleAuthor(e.target.value)} 
        />
        <textarea
          placeholder="Article Content"
          value={ArticleContent}
          onChange={(e) => setArticleContent(e.target.value)}
        />
        <button onClick={addArticle}>Add Article</button>
      </div>

      {Articles.map((article) => (
        <div key={article.id}> 
          <p>Title: {article.title}</p>
          <p>Author: {article.author}</p>
          <p>Content: {article.content}</p>
        </div> 
      ))}
    </>
  );
}

export default App;