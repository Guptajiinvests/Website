
import { Calendar, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const News = () => {
  const newsArticles = [
    {
      title: "1st Strategic - Angel Investors in India",
      excerpt: "Guptaji Invests emerges as India's pioneering strategic angel investment network, connecting traditional business acumen with innovative startups.",
      date: "2024-01-15",
      category: "Industry Leadership"
    },
    {
      title: "Driving Innovation and Growth - Top Angel Investor in India",
      excerpt: "How Guptaji Invests is reshaping the startup ecosystem by providing strategic value addition beyond capital investment.",
      date: "2024-01-10",
      category: "Innovation"
    },
    {
      title: "Empowering Entrepreneurs for Success - Angel Investor in Hyderabad",
      excerpt: "Local entrepreneurs benefit from Guptaji Invests' community-driven approach to startup funding and mentorship.",
      date: "2024-01-05",
      category: "Entrepreneurship"
    },
    {
      title: "Connecting Communities for Success",
      excerpt: "The power of community-driven investments in building sustainable startup ecosystems across India.",
      date: "2023-12-20",
      category: "Community"
    }
  ];

  const awards = [
    {
      title: "TITA Social Impact Award 2022",
      description: "Recognized for outstanding contribution to the startup ecosystem and social impact initiatives.",
      date: "September 2022",
      icon: Award
    },
    {
      title: "Pride of Hyderabad Award 2022",
      description: "Honored for exceptional service to the Hyderabad startup community and economic development.",
      date: "September 2022",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">News & Updates</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Stay updated with the latest developments, achievements, and insights from Guptaji Invests
          </p>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsArticles.map((article, index) => (
              <Card key={article.title} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center ml-auto text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      <span className="text-sm">{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <button className="mt-4 text-primary-600 hover:text-primary-800 font-medium">
                    Read More →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrating our achievements and recognition in the startup ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={award.title} className="bg-gradient-to-br from-gold-50 to-gold-100 border-gold-200 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                    <award.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{award.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{award.description}</p>
                  <div className="flex items-center text-gold-600">
                    <Calendar size={16} className="mr-2" />
                    <span className="font-medium">{award.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Media Coverage</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Featured across leading media outlets for our innovative approach to angel investing
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["TV5 News", "The Hindu BusinessLine", "The Times of India", "Finance Magazine"].map((outlet, index) => (
              <div key={outlet} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-white">{outlet}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8 animate-fade-in">
            Subscribe to our newsletter for the latest news and updates
          </p>
          <div className="max-w-md mx-auto flex gap-4 animate-fade-in">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
