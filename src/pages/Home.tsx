import HeroSection from '@/components/HeroSection';
import PortfolioCard from '@/components/PortfolioCard';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, TrendingUp, Shield } from 'lucide-react';

const Home = () => {
  const portfolioCompanies = [
    {
      name: "Startoon Labs",
      description: "Medical device company focused on R&D and manufacturing of innovative healthcare solutions.",
      image: "/images/startups/Startoon Labs.jpeg", // Add your image URL here
      redirectPath: "https://www.startoonlabs.com/"
    },
    {
      name: "Exprs",
      description: "Enhances last-mile delivery efficiency for eCommerce brands with smart logistics solutions.",
      image: "/images/startups/exprs.jpeg", // Add your image URL here
      redirectPath: "/portfolio/exprs"
    },
    {
      name: "Cloud Tailor",
      description: "Personalized fashion solutions platform for women offering custom-fit clothing.",
      image: "/images/startups/cloud tailor.jpeg", // Add your image URL here
      redirectPath: "https://www.cloudtailor.com/"
    },
    {
      name: "Settlin",
      description: "Online brokerage service for residential properties simplifying real estate transactions.",
      image: "/images/startups/Settlin.jpeg", // Add your image URL here
      redirectPath: "https://settlin.in/"
    },
    {
      name: "Dial4242",
      description: "App-based ambulance network for emergency care providing 24/7 medical assistance.",
      image: "/images/startups/Dail4242.jpeg", // Add your image URL here
      redirectPath: "https://www.dial4242.com/"
    },
    {
      name: "TakeMe2Space",
      description: "Building orbital infrastructure accessible to all for the future of space technology.",
      image: "/images/startups/Takemespace.jpeg", // Add your image URL here
      redirectPath: "https://www.tm2.space/"
    },
    {
      name: "Jarsh",
      description: "Jarsh is an innovation driven company involved in the development of Smart Wearables for various Industries.",
      image: "/images/startups/Jarsh.jpeg", // Add your image URL here
      redirectPath: "https://jarshsafety.com/"
    }
  ];

  const partners = [
    {
      image: "/images/Partners/Chitkara.png",
      url: "https://www.chitkara.edu.in/"
    },
    {
      image: "/images/Partners/E cell  hyderabad.png",
      url: "https://ecellhyderabad.org/"
    },
    {
      image: "/images/Partners/Ecell Calcutta.jpeg",
      url: "https://ecellcalcutta.org/"
    },
    {
      image: "/images/Partners/free flow.jpeg",
      url: "#"
    },
    {
      image: "/images/Partners/Headstart.png",
      url: "https://headstart.in/"
    },
    {
      image: "/images/Partners/IIIT Hyderabad.png",
      url: "https://www.iiit.ac.in/"
    },
    {
      image: "/images/Partners/iit kanpur.jpeg",
      url: "https://www.iitk.ac.in/"
    },
    {
      image: "/images/Partners/Startup Leadership.png",
      url: "https://www.startupleadership.com/"
    },
    {
      image: "/images/Partners/thub.jpeg",
      url: "https://t-hub.co/"
    },
    {
      image: "/images/Partners/VJIM.png",
      url: "https://www.vjim.edu.in/"
    },
    {
      image: "/images/Partners/XLRI.jpeg",
      url: "https://www.xlri.ac.in/"
    },
    {
      image: "/images/Partners/osmania.jpg",
      url: "https://www.osmania.ac.in/"
    },
    {
      image: "/images/Partners/iim lucknow.jpg",
      url: "https://www.iiml.ac.in/"
    }
  ];

  const mediaFeatures = [
    {
      image: "/images/featured on/Zee Bussiness.jpeg",
      url: "https://youtu.be/DfI3HjWG_XI?si=mNupN_PS_4MD_r2I"
    },
    {
      image: "/images/featured on/bussiness line.png",
      url: "https://www.thehindubusinessline.com/info-tech/guptaji-invests-ties-up-with-t-hub/article65707509.ece"
    },
    {
      image: "/images/featured on/wion.jpeg",
      url: "https://www.wionews.com/business-economy/india-budget-2024-what-startups-expect-from-finance-minister-nirmala-sitharaman-685459"
    },
    {
      image: "/images/featured on/TV news 5.jpeg",
      url: "https://youtu.be/bZPbRVKtkdo?si=bCmXWTtOHHK7puz3"
    },
    {
      image: "/images/featured on/The times of India.jpeg",
      url: "https://timesofindia.indiatimes.com/city/hyderabad/t-hub-inks-mou-with-guptaji-invests/articleshow/93286259.cms"
    },
    {
      image: "/images/featured on/Startup Story.jpeg",
      url: "https://startupstorymedia.com/insights-guptaji-invests-accelerates-startups-visions-with-strategic-investments-in-startoon-labs-and-exprs/"
    },
    {
      image: "/images/featured on/Startup hyd.jpeg",
      url: "https://startuphyderabad.com/guptajiinvests-makes-strategic-investments-in-startoon-labs-and-exprs/"
    },
    {
      image: "/images/featured on/NTV.jpeg",
      url: "https://youtu.be/jMNvVkKJgq0?si=31BA0f3SoHJeOSxo"
    },
    {
      image: "/images/featured on/EEnadu.jpeg",
      url: "https://www.facebook.com/share/1Py9Uyb7te/"
    },
    {
      image: "/images/featured on/DH.jpeg",
      url: "https://www.deccanherald.com/business/companies/bad-investments-widen-byju-s-losses-by-81-to-rs-8-370-crore-in-fy22-2861308"
    },
    {
      image: "/images/featured on/CNBC tv 18.jpeg",
      url: "https://www.cnbctv18.com/business/settlin-raises-undisclosed-amount-from-vcs-including-powerhouse-ventures-18351121.htm"
    }
  ];

  const fundraisingSteps = [
    {
      title: "Application",
      description: "Submit your startup details through our platform"
    },
    {
      title: "Screening",
      description: "Our team reviews and evaluates your business model"
    },
    {
      title: "Pitching",
      description: "Present to our network of angel investors"
    },
    {
      title: "Investment",
      description: "Get funded with strategic value addition"
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Guptaji Invests was founded with a mission to bridge the gap between innovative startups 
                and strategic investors from the Gupta community. We believe in safeguarding dreams and 
                assets through proven investment strategies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our platform connects the right stakeholders through carefully curated pitching events, 
                ensuring that startups receive not just capital, but strategic value addition from 
                experienced investors.
              </p>
              <div className="flex items-center space-x-4">
                <Shield className="text-primary-600" size={24} />
                <span className="text-gray-800 font-semibold">Safeguarding Dreams & Assets</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <TrendingUp className="text-gold-500 mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold text-primary-800">Growth</div>
                  <div className="text-gray-600">Focused</div>
                </div>
                <div className="text-center">
                  <Users className="text-gold-500 mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold text-primary-800">Community</div>
                  <div className="text-gray-600">Driven</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundraising Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fundraising Process</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures efficient connection between startups and investors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {fundraisingSteps.map((step, index) => (
              <div key={step.title} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the innovative startups we've invested in across various sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioCompanies.map((company, index) => (
              <div key={company.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <PortfolioCard {...company} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <a 
                  href={partner.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <img 
                    src={partner.image} 
                    alt="Partner Logo" 
                    className="h-16 w-auto mx-auto object-contain transition-all duration-300"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured On Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured On</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {mediaFeatures.map((media, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <a 
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <img 
                    src={media.image} 
                    alt="Media Logo" 
                    className="h-16 w-auto mx-auto object-contain transition-all duration-300"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
