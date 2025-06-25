import { ArrowRight, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            India's <span className="text-gold-500">1st Strategic</span>
            <br />
            Investments Angel Network
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Connecting startup founders with Gupta community investors for strategic value addition beyond capital
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://docs.google.com/forms/d/188jtdlg6CHckC8KOFJSmOZB_vh9FLg_qKGDG_SMFIgQ/viewform?pli=1&pli=1&edit_requested=true#responses" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 text-lg">
                For Startups
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
            <a href="https://docs.google.com/forms/d/188jtdlg6CHckC8KOFJSmOZB_vh9FLg_qKGDG_SMFIgQ/viewform?pli=1&pli=1&edit_requested=true#responses" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary-800 text-primary-800 px-8 py-3 text-lg">
                For Investors
                <Users className="ml-2" size={20} />
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center animate-slide-in">
              <div className="text-4xl font-bold text-gold-500 mb-2">100+</div>
              <div className="text-blue-100">Angel Investors</div>
            </div>
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-gold-500 mb-2">7+</div>
              <div className="text-blue-100">Portfolio Companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
