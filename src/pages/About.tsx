import { User, Target, Clock, MapPin, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ProfileCard from '@/components/ProfileCard';

const About = () => {
  const aboutSections = [
    {
      icon: Target,
      title: "What",
      content: "Guptaji Invests is an angel network that strategically connects startups with investors from the Gupta community, facilitating meaningful partnerships beyond just capital."
    },
    {
      icon: Lightbulb,
      title: "Why",
      content: "Our mission is to safeguard dreams and assets through proven investment strategies, ensuring both startups and investors achieve sustainable growth."
    },
    {
      icon: Clock,
      title: "When",
      content: "We focus on adapting to technological advancements and changing consumer behavior, staying ahead of market trends and opportunities."
    },
    {
      icon: MapPin,
      title: "Where",
      content: "We specialize in bridge round and inflection point stages in startups' growth journey, providing crucial support during pivotal moments."
    },
    {
      icon: Users,
      title: "Who",
      content: "Led by Ravi Teja Gupta with over a decade of experience in the startup ecosystem, backed by a network of seasoned professionals."
    },
    {
      icon: User,
      title: "How",
      content: "Our platform connects the right stakeholders through carefully curated pitching events, ensuring quality matches between startups and investors."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About Guptaji Invests</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Empowering the next generation of entrepreneurs through strategic investments and community-driven growth
          </p>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutSections.map((section, index) => (
              <Card key={section.title} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <section.icon className="text-primary-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in">
                <div className="w-85 h-85 bg-white rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-6 overflow-hidden shadow-2xl">
                  <a href="https://www.linkedin.com/in/ravitejaguptaji/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="/images/founder.png" 
                      alt="Ravi Teja Gupta" 
                      className="w-50 h-100 object-cover hover:scale-105 transition-transform duration-300"
                      loading="eager"
                    />
                  </a>
                </div>
              </div>
             
              
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ravi Teja Gupta</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Seasoned entrepreneur with over a decade of experience in the startup ecosystem. 
                  Ravi has worked with renowned companies including Practo, Paytm, and Shiksha, 
                  bringing invaluable insights to the investment landscape.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Active member of Startup Leadership Program</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">TITA (Telangana IT Association) Member</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Headstart Network Contributor</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Inspiration Section */}
            <div className="mt-20 mb-8 flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Inspiration</div>
              <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
              <div className="w-full max-w-6xl bg-white rounded-xl flex justify-center items-center py-16 px-4 md:px-0 mx-auto">
                <ProfileCard
                  image="/images/Sriharsha Majety.jpg"
                  name="Sriharsha Majety"
                  title="CEO and Co-founder at Swiggy"
                  linkedinUrl="https://www.linkedin.com/in/sriharsha-m-563aa217/"
                />
              </div>
            </div>

            {/* Advisors Section - now directly below Our Inspiration */}
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gray-200 py-16 px-2 md:px-8 mb-20">
              <div className="max-w-7xl mx-auto">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Advisors</div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center">
                  <ProfileCard
                    image="/images/Advisors/Lax Chepuri.jpeg"
                    name="Lax Chepuri"
                    title="CEO at Technogen"
                    linkedinUrl="https://www.linkedin.com/in/lax-rao-chepuri-9325362/"
                  />
                  <ProfileCard
                    image="/images/Advisors/Ravi Korukonda.jpeg"
                    name="Ravi Korukonda"
                    title="Technology Entrepreneur"
                    linkedinUrl="https://www.linkedin.com/in/ravikorukonda/"
                  />
                  <ProfileCard
                    image="/images/Advisors/Gadi Venugopala Rao.jpeg"
                    name="Gadi Venugopala Rao"
                    title="Director - Tax Advisory"
                    subtitle="Fox Mandal and Associates\nEx IRS Officer."
                    linkedinUrl="https://www.linkedin.com/in/gvgopalarao/"
                  />
                  <ProfileCard
                    image="/images/Advisors/Chaitanya Kumar Lingamallu.jpeg"
                    name="Chaitanya Kumar Lingamallu"
                    title="Co-Founder & CMD"
                    subtitle="The Chocolate Room India"
                    linkedinUrl="https://www.linkedin.com/in/chaitanya-kumar-lingamallu-76bb1b77/"
                  />
                  <ProfileCard
                    image="/images/Advisors/Rajesh Dhuddu.jpeg"
                    name="Rajesh Dhuddu"
                    title="Emerging Tech Leader - Tech Mahindra"
                    linkedinUrl="https://www.linkedin.com/in/rajeshdhuddu/"
                  />
                </div>
              </div>
            </div>

            {/* Key People Section - below Advisors */}
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gray-200 py-16 px-2 md:px-8 mb-20">
              <div className="max-w-7xl mx-auto">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Key People</div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center">
                <ProfileCard
                    image="/images/key people/TataTeja.jpeg"
                    name="Tata Teja"
                    title="GMR Group"
                    linkedinUrl="https://www.linkedin.com/in/tatateja?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  />
                  <ProfileCard
                    image="/images/key people/Nishant Chintawar.jpeg"
                    name="Nishant Chintawar"
                    title="Sai Agro Industries"
                    linkedinUrl="https://www.linkedin.com/in/nishantchintawar/"
                  />
                  <ProfileCard
                    image="/images/key people/Abhinav Guptha.jpeg"
                    name="Abhinav Gupta"
                    title="Vice President - Innovation"
                    subtitle="Broadridge"
                    linkedinUrl="https://www.linkedin.com/in/abhinavguptha/"
                  />
                  <ProfileCard
                    image="/images/key people/Prithvi Chaithanya K.jpeg"
                    name="Prithvi Chaithanya K"
                    title="Head of Innovation Programs"
                    subtitle="Hexagon Capability Center India"
                    linkedinUrl="https://www.linkedin.com/in/prithvichaithanya/"
                  />
                  <ProfileCard
                    image="/images/key people/Sai Abhinay Chepuri.jpeg"
                    name="Sai Abhinay Chepuri"
                    title="Startup Innovation"
                    subtitle="T-Hub"
                    linkedinUrl="https://www.linkedin.com/in/saiabhinaychepuri/"
                  />
                  <ProfileCard
                    image="/images/key people/Pavan Adipuram.jpeg"
                    name="Pavan Adipuram"
                    title="Founding Partner and CEO"
                    subtitle="Pangenia Global Services"
                    linkedinUrl="https://www.linkedin.com/in/pavanadipuram/"
                  />
                  <ProfileCard
                    image="/images/key people/Sanyasi Rao Vuppala (2).jpeg"
                    name="Sanyasi Rao Vuppala"
                    title="MC Member of the Federation of Telangana and Andhra Pradesh"
                    linkedinUrl="https://www.facebook.com/people/Sanyasirao-Vuppala-V/pfbid02e2DAmBJaiHHqvcEGG5znVEtG78yDoDrE5pK86vEPyp7twLP2WZ1sTYXdMjC4xpwtl/"
                  />
                  <ProfileCard
                    image="/images/key people/CA Rajesh Donkeshwar.jpeg"
                    name="CA Rajesh Donkeshwar"
                    title="Director"
                    subtitle="HOLISTIC CORPORTE ADVISORS"
                    linkedinUrl="https://www.linkedin.com/in/rajesh-donkeshwar-89164a11/"
                  />
                  <ProfileCard
                    image="/images/key people/R P Ravishanker.jpeg"
                    name="R P Ravishanker"
                    title="Founding Partner and Managing Director"
                    subtitle="of S R R & Co"
                    linkedinUrl="https://www.facebook.com/RPRAVISHANKER"
                  />
                  <ProfileCard
                    image="/images/key people/MNR Gupta.jpeg"
                    name="MNR Gupta"
                    title="CEO Global for Ritzy Schools"
                    linkedinUrl="https://www.linkedin.com/in/mnrgupta/"
                  />
                  <ProfileCard
                    image="/images/key people/Ramchandram Dhannarapu.jpeg"
                    name="Ramchandram Dhannarapu"
                    title="Solus Media"
                    linkedinUrl="https://www.linkedin.com/in/ramchandram-dhannarapu-2216169?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  />
                  <ProfileCard
                    image="/images/key people/Anil Kumar Padakanti.jpeg"
                    name="Anil Kumar Padakanti"
                    title="Director Of Sales and Marketing"
                    subtitle="UNIVERSAL WATER CHEMICALS"
                    linkedinUrl="https://www.linkedin.com/in/anil-kumar-padakanti-77987a33/"
                  />
                  <ProfileCard
                    image="/images/key people/Puvvada Seshadri.jpeg"
                    name="Puvvada Seshadri"
                    title="Businessman"
                    linkedinUrl="https://www.linkedin.com/in/puvvada-seshadri/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-slide-in">
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-blue-100 leading-relaxed">
                To be the leading strategic investment platform that bridges traditional business 
                acumen with innovative startup solutions, creating sustainable value for both 
                entrepreneurs and investors in the Indian ecosystem.
              </p>
            </div>
            
            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To foster a thriving startup ecosystem by connecting passionate entrepreneurs 
                with strategic investors, providing not just capital but mentorship, networks, 
                and expertise that drive long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
