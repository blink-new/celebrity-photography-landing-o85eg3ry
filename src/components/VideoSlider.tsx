import React, { useState, useRef } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

const VideoSlider = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = [
    {
      id: 1,
      title: "Celebrity Red Carpet Coverage",
      description: "Behind the scenes at major award ceremonies and premieres",
      thumbnail: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxyZWQlMjBjYXJwZXQlMjBwaG90b2dyYXBoeXxlbnwwfDB8fHwxNzUzMDM1MTQzfDA&ixlib=rb-4.1.0&q=85",
      videoUrl: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761",
      duration: "2:45"
    },
    {
      id: 2,
      title: "Political Campaign Photography",
      description: "Documenting key moments in political campaigns and events",
      thumbnail: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxwb2xpdGljYWwlMjBldmVudCUyMHBob3RvZ3JhcGh5fGVufDB8MHx8fDE3NTMwMzUxNDN8MA&ixlib=rb-4.1.0&q=85",
      videoUrl: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761",
      duration: "3:20"
    },
    {
      id: 3,
      title: "Studio Portrait Sessions",
      description: "Professional studio setups for high-profile clients",
      thumbnail: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8MHx8fDE3NTMwMzUxNDN8MA&ixlib=rb-4.1.0&q=85",
      videoUrl: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761",
      duration: "4:15"
    },
    {
      id: 4,
      title: "Fashion Editorial Shoots",
      description: "High-fashion photography for magazines and brands",
      thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHl8ZW58MHwwfHx8MTc1MzAzNTE0M3ww&ixlib=rb-4.1.0&q=85",
      videoUrl: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761",
      duration: "5:30"
    }
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="videos" className="py-20" style={{ backgroundColor: 'var(--light-gray)' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="subtitle mb-4" style={{ color: 'var(--purple)' }}>
            Video Showcase
          </p>
          <h2 className="title mb-8" style={{ color: 'var(--black)' }}>
            Behind the <span style={{ color: 'var(--deeppink)' }}>Lens</span>
          </h2>
          <p className="para max-w-2xl mx-auto" style={{ color: 'var(--black)' }}>
            Get an exclusive look at our photography process and see how we capture stunning moments for our high-profile clients.
          </p>
        </div>

        {/* Main Video Player */}
        <div className="relative mb-12">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster={videos[currentVideo].thumbnail}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={videos[currentVideo].videoUrl} type="video/mp4" />
            </video>
            
            {/* Play/Pause Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={togglePlay}
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
              >
                {isPlaying ? (
                  <Pause size={32} className="text-white" />
                ) : (
                  <Play size={32} className="text-white ml-1" />
                )}
              </button>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevVideo}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={nextVideo}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-bold mb-2">{videos[currentVideo].title}</h3>
              <p className="text-gray-300 mb-2">{videos[currentVideo].description}</p>
              <span className="text-sm text-gray-400">{videos[currentVideo].duration}</span>
            </div>
          </div>
        </div>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`relative cursor-pointer group ${
                index === currentVideo ? 'ring-4 ring-[var(--deeppink)]' : ''
              }`}
              onClick={() => {
                setCurrentVideo(index);
                setIsPlaying(false);
              }}
            >
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <Play size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="mt-2">
                <h4 className="font-semibold text-sm mb-1" style={{ color: 'var(--black)' }}>
                  {video.title}
                </h4>
                <span className="text-xs" style={{ color: 'var(--black)' }}>
                  {video.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="btn-primary rounded-none">
            View Full Showreel
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;