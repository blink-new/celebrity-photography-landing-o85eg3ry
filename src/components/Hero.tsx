import React from 'react';
import { Play, Camera, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle */}
          <p className="subtitle mb-6" style={{ color: 'var(--lightblue)' }}>
            Celebrity & Political Photography
          </p>

          {/* Main Title */}
          <h1 className="title mb-8 text-white">
            Capturing Moments That
            <span style={{ color: 'var(--deeppink)' }}> Define History</span>
          </h1>

          {/* Description */}
          <p className="para mb-12 text-gray-200 max-w-2xl mx-auto">
            Professional photography services for celebrities, politicians, and high-profile events. 
            With over 15 years of experience, we create stunning visuals that tell your story.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-primary rounded-none">
              View Portfolio
            </button>
            <button className="btn-secondary rounded-none flex items-center gap-2">
              <Play size={20} />
              Watch Showreel
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Camera size={40} style={{ color: 'var(--deeppink)' }} />
              </div>
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="subtitle text-gray-300">Celebrity Shoots</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award size={40} style={{ color: 'var(--lightblue)' }} />
              </div>
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="subtitle text-gray-300">Political Events</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Play size={40} style={{ color: 'var(--orange)' }} />
              </div>
              <h3 className="text-3xl font-bold mb-2">15+</h3>
              <p className="subtitle text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;