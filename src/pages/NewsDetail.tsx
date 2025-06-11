import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Import the newsArticles array from News.tsx or a shared file
import { newsArticles } from './News'; // You may need to export this from News.tsx

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = newsArticles[Number(id)];

  if (!article) return <div className="text-center py-20">Article not found.</div>;

  // Example: You can add a 'content' field to each article for full detail, or use static content for now
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <button
        className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
        onClick={() => navigate(-1)}
      >
        &larr; Back to News
      </button>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
        <img
          src="/images/News/image7.jpg"
          alt={article.author}
          className="w-7 h-7 rounded-full object-cover"
        />
        <span className="font-medium">{article.author}</span>
        <span>•</span>
        <span>{new Date(article.date).toLocaleDateString()}</span>
        <span>•</span>
        <span>2 min read</span>
      </div>
      <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
      <div className="flex justify-center mb-2">
        <img
          src={article.image}
          alt={article.title}
          className="rounded-lg max-h-72 object-contain"
        />
      </div>
      <p className="text-xs text-center text-gray-500 mb-6">{article.excerpt || ''}</p>
      {/* Render article.content if available, else fallback to excerpt */}
      <div className="prose prose-lg max-w-none">
        {article.content ? (
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        ) : (
          <p>{article.excerpt}</p>
        )}
      </div>
    </div>
  );
};

export default NewsDetail; 