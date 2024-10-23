import { useState, useEffect } from 'react'
import './App.css'
import Select from "react-select";


function App() {
  const [articles, setArticles] = useState([]);
  const [articleTitle, setArticleTitle] = useState('');
  const [articleAuthor, setArticleAuthor] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [editingArticle, setEditingArticle] = useState(null);

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
    const newArticle = { title: articleTitle, content: articleContent, author: articleAuthor };
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
    
  const updateArticle = async () => {
    const updatedArticle = { title: articleTitle, content: articleContent, author: articleAuthor };
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/articles/${editingArticle.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedArticle),
      });
      if (response.ok) {
        fetchArticles();
        setArticleTitle('');
        setArticleAuthor('');
        setArticleContent('');
        setEditingArticle(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteArticle = async (articleId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/articles/${articleId}/`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchArticles();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const startEditing = (article) => {
    setArticleTitle(article.title);
    setArticleAuthor(article.author);
    setArticleContent(article.content);
    setEditingArticle(article);
  };

  return (
    <>
      <h1> ML-Explorer </h1>

      <div>
        <input 
          type="text" 
          placeholder="Article Name"
          value={articleTitle}
          onChange={(e) => setArticleTitle(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Article Author"
          value={articleAuthor}
          onChange={(e) => setArticleAuthor(e.target.value)} 
        />
        <textarea
          placeholder="Article Content"
          value={articleContent}
          onChange={(e) => setArticleContent(e.target.value)}
        />
        {editingArticle ? (
          <button onClick={updateArticle}>Update Article</button>
        ) : (
        <button onClick={addArticle}>Add Article</button>
        )}
      </div>

      <Select options></Select>

      {articles.map((article) => (
        <div key={article.id}> 
          <p>Title: {article.title}</p>
          <p>Author: {article.author}</p>
          <p>Content: {article.content}</p>
          <button onClick={() => startEditing(article)}>Edit</button>
          <button onClick={() => deleteArticle(article.id)}>Delete</button>
        </div> 
      ))}
    </>
  );
}

export default App;