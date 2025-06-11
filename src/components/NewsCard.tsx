import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NewsCardProps {
  image: string; // image path
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  views: number;
  comments: number;
  liked: boolean;
  id?: number; // index or unique id for navigation
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  excerpt,
  date,
  category,
  author,
  views,
  comments,
  liked,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer"
      onClick={() => navigate(`/news/${id}`)}
      role="button"
      tabIndex={0}
      onKeyPress={e => { if (e.key === 'Enter') navigate(`/news/${id}`); }}
    >
      <Card className="flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-all duration-300">
        {/* Image Section */}
        <div className="md:w-1/2 w-full h-48 md:h-auto bg-gray-200 flex items-center justify-center">
          {/* Replace src with your image path */}
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
        {/* Content Section */}
        <CardContent className="flex-1 flex flex-col p-6">
          <div className="flex items-center mb-2">
            <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
            <div className="flex items-center ml-auto text-gray-500 text-xs">
              <Calendar size={14} className="mr-1" />
              <span>{date}</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center text-xs text-gray-500 mt-auto gap-4">
            <span>By {author}</span>
            <span>{views} views</span>
            <span>{comments} comments</span>
            <span className={liked ? 'text-red-500' : ''}>&hearts;</span>
          </div>
          <button className="mt-4 text-primary-600 hover:text-primary-800 font-medium text-sm self-start">
            Read More &rarr;
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsCard; 