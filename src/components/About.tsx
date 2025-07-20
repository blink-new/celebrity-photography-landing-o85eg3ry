import React from 'react';
import { Camera, Award, Users, Globe } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Camera,
      number: "500+",
      title: "Celebrity Shoots",
      description: "A-list actors, musicians, and entertainment industry leaders"
    },
    {
      icon: Award,
      number: "50+",
      title: "Political Events",
      description: "Campaign coverage, official portraits, and government events"
    },
    {
      icon: Users,
      number: "1000+",
      title: "Happy Clients",
      description: "Building lasting relationships with high-profile personalities"
    },
    {
      icon: Globe,
      number: "25+",
      title: "Countries",
      description: "International assignments and global recognition"
    }
  ];

  const skills = [
    { name: "Portrait Photography", level: 98 },
    { name: "Event Coverage", level: 95 },
    { name: "Studio Lighting", level: 92 },
    { name: "Post-Production", level: 90 },
    { name: "Creative Direction", level: 88 },
    { name: "Client Relations", level: 96 }
  ];

  return (
    <section id="about" className="py-20" style={{ backgroundColor: 'var(--light-gray)' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="subtitle mb-4" style={{ color: 'var(--deeporange)' }}>
            About the Photographer
          </p>
          <h2 className="title mb-8" style={{ color: 'var(--black)' }}>
            Meet the <span style={{ color: 'var(--deeppink)' }}>Artist</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXJ8ZW58MHwwfHx8MTc1MzAzNTE0M3ww&ixlib=rb-4.1.0&q=85"
                alt="Professional Photographer"
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
            
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-1" style={{ color: 'var(--deeppink)' }}>
                  15+
                </h3>
                <p className="subtitle text-sm" style={{ color: 'var(--black)' }}>
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--black)' }}>
              Capturing Moments That Define Legacies
            </h3>
            
            <div className="space-y-4 mb-8">
              <p className="para" style={{ color: 'var(--black)' }}>
                With over 15 years of experience in high-profile photography, I specialize in capturing the essence of celebrities, politicians, and industry leaders. My work has been featured in major publications and has helped shape the public image of some of the most influential people of our time.
              </p>
              
              <p className="para" style={{ color: 'var(--black)' }}>
                From intimate portrait sessions to large-scale political events, I bring a unique blend of technical expertise and artistic vision to every project. My approach focuses on creating authentic, powerful images that tell compelling stories.
              </p>
              
              <p className="para" style={{ color: 'var(--black)' }}>
                Based in New York with studios in Los Angeles and Washington D.C., I'm available for assignments worldwide. My client list includes Academy Award winners, Grammy artists, Fortune 500 CEOs, and government officials at the highest levels.
              </p>
            </div>

            {/* Skills Progress Bars */}
            <div className="space-y-4 mb-8">
              <h4 className="font-bold text-lg mb-4" style={{ color: 'var(--black)' }}>
                Expertise Areas
              </h4>
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium" style={{ color: 'var(--black)' }}>
                      {skill.name}
                    </span>
                    <span className="text-sm" style={{ color: 'var(--deeppink)' }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: 'var(--deeppink)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="btn-primary rounded-none">
              Download Portfolio
            </button>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-[var(--light-gray)] rounded-full flex items-center justify-center">
                    <IconComponent size={32} style={{ color: 'var(--deeppink)' }} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2" style={{ color: 'var(--black)' }}>
                  {achievement.number}
                </h3>
                <h4 className="subtitle mb-3" style={{ color: 'var(--deeppink)' }}>
                  {achievement.title}
                </h4>
                <p className="text-sm" style={{ color: 'var(--black)' }}>
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Awards & Recognition */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--black)' }}>
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-[var(--orange)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h4 className="font-bold mb-2" style={{ color: 'var(--black)' }}>
                Professional Photographers of America
              </h4>
              <p className="text-sm" style={{ color: 'var(--black)' }}>
                Master Photographer Degree
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-[var(--lightblue)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h4 className="font-bold mb-2" style={{ color: 'var(--black)' }}>
                International Photography Awards
              </h4>
              <p className="text-sm" style={{ color: 'var(--black)' }}>
                Portrait Photographer of the Year
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-[var(--green)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h4 className="font-bold mb-2" style={{ color: 'var(--black)' }}>
                World Press Photo
              </h4>
              <p className="text-sm" style={{ color: 'var(--black)' }}>
                Political Photography Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;