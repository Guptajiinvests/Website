import { Users, TrendingUp, Shield, Award, Building, UserCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProfileCard from '@/components/ProfileCard';

const Investors = () => {
  const investorTypes = [
    {
      icon: Building,
      title: "Traditional HNI Businesspersons",
      description: "Successful business owners with deep industry knowledge and extensive networks"
    },
    {
      icon: UserCheck,
      title: "Professionals",
      description: "Chartered Accountants, Company Secretaries, and Legal professionals"
    },
    {
      icon: Award,
      title: "Corporate CXOs",
      description: "Senior executives from leading corporations bringing strategic insights"
    },
    {
      icon: Shield,
      title: "Bureaucrats",
      description: "Government officials and policy makers with regulatory expertise"
    }
  ];

  const benefits = [
    "Access to pre-screened startup deals",
    "Diversified investment portfolio",
    "Strategic networking opportunities",
    "Due diligence support",
    "Post-investment mentoring",
    "Regular performance updates"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Connect the Right Dots
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 animate-fade-in">
            Join our network of 100+ angel investors and be part of India's strategic investment revolution
          </p>
          <Button 
            size="lg" 
            className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 text-lg animate-fade-in"
            onClick={() => window.open('https://docs.google.com/forms/d/1qDpZxrzDgVb9FHhc1sdehHFQovE52H8VR_EOXXUJ0eA/viewform?edit_requested=true&pli=1', '_blank')}
          >
            Become an Investor
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary-800 mb-2">100+</div>
              <div className="text-gray-600">Angel Investors</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary-800 mb-2">₹50Cr+</div>
              <div className="text-gray-600">Investments Facilitated</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary-800 mb-2">7+</div>
              <div className="text-gray-600">Portfolio Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Investor Community</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diverse professionals bringing unique perspectives and expertise to startup investments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investorTypes.map((type, index) => (
              <Card key={type.title} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <type.icon className="text-primary-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Section - between Investor Community and Why Invest With Us */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gray-200 py-16 px-2 md:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Some of Our Investors</div>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>

            <div className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
              We have over a 100 angel investors, some of them are established traditional HNI businesspersons, others are professionals like CAs, CSs, lawyers, corporate CXOs like CEOs, CFOs, CMOs, COOs etc., bureaucrats like IAS, IPS, IRS.
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center">
            <ProfileCard
              image="/images/Investors/Sownmya Chanda.png"
              name="Sowmya Chanda"
              title="Vasavi Group (Director)"
              linkedinUrl="https://www.linkedin.com/in/sowmya-chanda/"
            />
            <ProfileCard
              image="/images/Investors/Mourya Boda.png"
              name="Mourya Boda"
              title="Brilliant Bio Pharma"
              linkedinUrl="https://www.linkedin.com/in/mourya-boda/"
            />
            <ProfileCard
              image="/images/Investors/Anusha Kadimisetti.png"
              name="Anusha Kadimisetti"
              title="Frontier Laboratories Ltd (BMD)"
              linkedinUrl="https://www.linkedin.com/in/anusha-kadimisetti/"
            />
            <ProfileCard
              image="/images/Investors/Ganesh Rayapudi.png"
              name="Ganesh Rayapudi"
              title="Index Emirates Grp. (Managing Director)"
              linkedinUrl="https://www.linkedin.com/in/ganesh-rayapudi/"
            />
            <ProfileCard
              image="/images/Investors/Bharadwaj Rachamadugu.png"
              name="Bharadwaj Rachamadugu"
              title="Kalamandir"
              linkedinUrl="https://www.linkedin.com/in/bharadwaj-rachamadugu/"
            />
            <ProfileCard
              image="/images/Investors/Srinivasulu Kopparapo.png"
              name="Srinivasulu Kopparapo"
              title="5Data Inc. (Head - Platform Engineering (pulsesg))"
              linkedinUrl="https://www.linkedin.com/in/srinivasulu-kopparapo/"
            />
            <ProfileCard
              image="/images/Investors/P Venkateshwara Rao.png"
              name="P. Venkateshwara Rao"
              title="Oil & Gas Industry (Manager - HSE)"
              linkedinUrl="https://www.linkedin.com/in/p-venkateshwara-rao/"
            />
            <ProfileCard
              image="/images/Investors/CS Raghu Babu Gunturu.png"
              name="CS Raghu Babu Gunturu"
              title="SimplyBiz (Founder)"
              linkedinUrl="https://www.linkedin.com/in/cs-raghu-babu-gunturu/"
            />
            <ProfileCard
              image="/images/Investors/KR Pradeep.png"
              name="KR Pradeep"
              title="Lawyer"
              linkedinUrl="https://www.linkedin.com/in/kr-pradeep/"
            />
            <ProfileCard
              image="/images/Investors/CA Srikanth Vetcha.png"
              name="CA Srikanth Vetcha"
              title="Nuziveedu Seeds Ltd (CFO)"
              linkedinUrl="https://www.linkedin.com/in/ca-srikanth-vetcha/"
            />
            <ProfileCard
              image="/images/Investors/Pasumarthi Hanumantha Rao.jpeg"
              name="Pasumarthi Hanumantha Rao"
              title="Invogue General Trading LLC"
              linkedinUrl="https://www.linkedin.com/in/pasumarthi-hanumantha-rao/"
            />
            <ProfileCard
              image="/images/Investors/Raghavendra Gupta M..jpeg"
              name="Raghavendra Gupta M."
              title="Medhini Meadows (Founder, Managing Director)"
              linkedinUrl="https://www.linkedin.com/in/raghavendra-gupta-m/"
            />
            <ProfileCard
              image="/images/Investors/Rakesh Gadewar.jpeg"
              name="Rakesh Gadewar"
              title="SCL (Sponsorship Coordinator)"
              linkedinUrl="https://www.linkedin.com/in/rakesh-gadewar/"
            />
            <ProfileCard
              image="/images/Investors/Vamsi Krishna Sirna.jpeg"
              name="Vamsi Krishna Sirna"
              title="R. S. Brothers"
              linkedinUrl="https://www.linkedin.com/in/vamsi-krishna-sirna/"
            />
            <ProfileCard
              image="/images/Investors/Gaurav Krishna M.jpeg"
              name="Gaurav Krishna M."
              title="Manepally Jewellers"
              linkedinUrl="https://www.linkedin.com/in/gaurav-krishna-m/"
            />
            <ProfileCard
              image="/images/Investors/Sidhartha Namburi.jpeg"
              name="Sidhartha Namburi"
              title="Arhyama Farms (Partner)"
              linkedinUrl="https://www.linkedin.com/in/sidhartha-namburi/"
            />
            <ProfileCard
              image="/images/Investors/Madhuri Namburu.png"
              name="Madhuri Namburu"
              title="Advocate"
              linkedinUrl="https://www.linkedin.com/in/madhuri-namburu/"
            />
            <ProfileCard
              image="/images/Investors/Sivarama Prasad T.png"
              name="Sivarama Prasad T"
              title="CEO VFE"
              linkedinUrl="https://www.linkedin.com/in/sivarama-prasad-t/"
            />
            <ProfileCard
              image="/images/Investors/Dr. Neelima Vemula.jpeg"
              name="Dr. Neelima Vemula"
              title="Neemax enterprise (Managing Director)"
              linkedinUrl="https://www.linkedin.com/in/dr-neelima-vemula/"
            />
            <ProfileCard
              image="/images/Investors/Varun Vihar M..jpeg"
              name="Varun Vihar M."
              title="Lorven Pharma & Surgicals"
              linkedinUrl="https://www.linkedin.com/in/varun-vihar-m/"
            />
            <ProfileCard
              image="/images/Investors/Praveen Thadakamalla.jpeg"
              name="Praveen Thadakamalla"
              title="IT America Inc (CEO)"
              linkedinUrl="https://www.linkedin.com/in/praveen-thadakamalla/"
            />
            <ProfileCard
              image="/images/Investors/Hemchandra Yelishala.jpeg"
              name="Hemchandra Yelishala"
              title="Vaishnaoi Group (Director)"
              linkedinUrl="https://www.linkedin.com/in/hemchandra-yelishala/"
            />
            <ProfileCard
              image="/images/Investors/Rambabu Boorugu.jpeg"
              name="Rambabu Boorugu"
              title="Pranava Group (Executive Director, CEO)"
              linkedinUrl="https://www.linkedin.com/in/rambabu-boorugu/"
            />
            <ProfileCard
              image="/images/Investors/Vishwanath Komaravelli.jpeg"
              name="Vishwanath Komaravelli"
              title="Radon Energy Ltd. (Director)"
              linkedinUrl="https://www.linkedin.com/in/vishwanath-komaravelli/"
            />
            <ProfileCard
              image="/images/Investors/Tadepalli Rajasekhar.jpeg"
              name="Tadepalli Rajasekhar"
              title="Jayaraj Group (CMD)"
              linkedinUrl="https://www.linkedin.com/in/tadepalli-rajasekhar/"
            />
            <ProfileCard
              image="/images/Investors/Pulluri Srikanth.jpeg"
              name="Pulluri Srikanth"
              title="PSK construction Pvt Ltd (Director)"
              linkedinUrl="https://www.linkedin.com/in/pulluri-srikanth/"
            />
            <ProfileCard
              image="/images/Investors/Navneeth Gowrishetty.jpeg"
              name="Navneeth Gowrishetty"
              title="3DM Agency (Co-founder)"
              linkedinUrl="https://www.linkedin.com/in/navneeth-gowrishetty/"
            />
            <ProfileCard
              image="/images/Investors/Anup Yama.jpeg"
              name="Anup Yama"
              title="Yama Skating Academy (CEO)"
              linkedinUrl="https://www.linkedin.com/in/anup-yama/"
            />
            <ProfileCard
              image="/images/Investors/Nagendra Aytha.jpeg"
              name="Nagendra Aytha"
              title="Epromptus (CEO)"
              linkedinUrl="https://www.linkedin.com/in/nagendra-aytha/"
            />
            <ProfileCard
              image="/images/Investors/Raghu Boddu.jpeg"
              name="Raghu Boddu"
              title="ToggleNow (Managing Director)"
              linkedinUrl="https://www.linkedin.com/in/raghu-boddu/"
            />
            <ProfileCard
              image="/images/Investors/Aravind Voruganti.jpeg"
              name="Aravind Voruganti"
              title="VP -Blockchain at IDS Inc"
              linkedinUrl="https://www.linkedin.com/in/aravind-voruganti/"
            />
            <ProfileCard
              image="/images/Investors/Dr. Srikanth Guduguntla.jpeg"
              name="Dr. Srikanth Guduguntla"
              title="Smile miles Dental Hospital"
              linkedinUrl="https://www.linkedin.com/in/dr-srikanth-guduguntla/"
            />
            <ProfileCard
              image="/images/Investors/CA Vijay Kalimicherla.jpeg"
              name="CA Vijay Kalimicherla"
              title="Chartered Accountant"
              linkedinUrl="https://www.linkedin.com/in/ca-vijay-kalimicherla/"
            />
            <ProfileCard
              image="/images/Investors/Anish Dundoo.jpeg"
              name="Anish Dundoo"
              title="IVC in Blockchain Tech"
              linkedinUrl="https://www.linkedin.com/in/anish-dundoo/"
            />
            <ProfileCard
              image="/images/Investors/Surya Vidiyala.jpeg"
              name="Surya Vidiyala"
              title="MASSINFOSYS (CEO)"
              linkedinUrl="https://www.linkedin.com/in/surya-vidiyala/"
            />
            <ProfileCard
              image="/images/Investors/Srikanth Bikumandla..jpeg"
              name="Srikanth Bikumandla"
              title="Si6 Associates (CEO)"
              linkedinUrl="https://www.linkedin.com/in/srikanth-bikumandla/"
            />
            <ProfileCard
              image="/images/Investors/Anil Pendela..jpeg"
              name="Anil Pendela"
              title="Dreamz Entertainments (Managing Director)"
              linkedinUrl="https://www.linkedin.com/in/anil-pendela/"
            />
            <ProfileCard
              image="/images/Investors/Kautike Aadityaw.jpeg"
              name="Kautike Aadityaw"
              title="Kautike Projects LLP"
              linkedinUrl="https://www.linkedin.com/in/kautike-aadityaw/"
            />
            <ProfileCard
              image="/images/Investors/Naresh Meda.jpeg"
              name="Naresh Meda"
              title="Entrepreneur"
              linkedinUrl="https://www.linkedin.com/in/naresh-meda/"
            />
            <ProfileCard
              image="/images/Investors/Vuppala Harish.jpeg"
              name="Vuppala Harish"
              title="South India Shopping Mall (Assistant Purchaser)"
              linkedinUrl="https://www.linkedin.com/in/vuppala-harish/"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Invest With Us?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Join a community of strategic investors who understand the value of long-term 
                partnerships and sustainable growth in the startup ecosystem.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white p-8 rounded-2xl animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Investment Process</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Registration</h4>
                    <p className="text-blue-100 text-sm">Complete your investor profile and verification</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Deal Flow</h4>
                    <p className="text-blue-100 text-sm">Access curated startup investment opportunities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Due Diligence</h4>
                    <p className="text-blue-100 text-sm">Comprehensive analysis and risk assessment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-semibold mb-1">Investment</h4>
                    <p className="text-blue-100 text-sm">Make informed investment decisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to Start Investing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            Join our exclusive network of angel investors and be part of the next generation of successful startups
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3"
              onClick={() => window.open('https://docs.google.com/forms/d/1qDpZxrzDgVb9FHhc1sdehHFQovE52H8VR_EOXXUJ0eA/viewform?edit_requested=true&pli=1', '_blank')}
            >
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investors;
