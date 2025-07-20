import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1594171549465-a28ba0220a1b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8MXx8fDE3NTMwMzUxNDd8MA&ixlib=rb-4.1.0&q=85",
      category: 'celebrity',
      title: 'Celebrity Portrait Session',
      description: 'Professional headshot for A-list actor'
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1629507313712-f21468afdf2e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8MXx8fDE3NTMwMzUxNDd8MA&ixlib=rb-4.1.0&q=85",
      category: 'celebrity',
      title: 'Fashion Editorial',
      description: 'High-fashion celebrity shoot'
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1684919556999-a42d37ffccc1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8MXx8fDE3NTMwMzUxNDd8MA&ixlib=rb-4.1.0&q=85",
      category: 'political',
      title: 'Political Campaign',
      description: 'Official campaign portrait'
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1643264623879-bb85ea39c62a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8MXx8fDE3NTMwMzUxNDd8MA&ixlib=rb-4.1.0&q=85",
      category: 'celebrity',
      title: 'Behind the Scenes',
      description: 'Candid celebrity moment'
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1672527843075-2a7a0ca859ad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw1fHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8MXx8fDE3NTMwMzUxNDd8MA&ixlib=rb-4.1.0&q=85",
      category: 'political',
      title: 'Government Official',
      description: 'Executive portrait session'
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1706824258534-c3740a1ae96b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw2fHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8MXx8fDE3NTMwMzUxNDd8MA&ixlib=rb-4.1.0&q=85",
      category: 'celebrity',
      title: 'Dramatic Portrait',
      description: 'Award-winning actress'
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1706824250412-42b8ba877abb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw3fHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8MXx8fDE3NTMwMzUxNDd8MA&ixlib=rb-4.1.0&q=85",
      category: 'celebrity',
      title: 'Studio Session',
      description: 'Professional headshots'
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1620580109994-39c4733c77b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw4fHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8MXx8fDE3NTMwMzUxNDd8MA&ixlib=rb-4.1.0&q=85",
      category: 'political',
      title: 'Press Conference',
      description: 'Political event coverage'
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1614115866447-c9a299154650?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxjZWxlYnJpdHklMjByZWQlMjBjYXJwZXQlMjBwaG90b2dyYXBoeXxlbnwwfDB8fHwxNzUzMDM1MTQzfDA&ixlib=rb-4.1.0&q=85",
      category: 'event',
      title: 'Red Carpet Event',
      description: 'Premiere night coverage'
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1561835661-ebd6f6283571?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxjZWxlYnJpdHklMjByZWQlMjBjYXJwZXQlMjBwaG90b2dyYXBoeXxlbnwwfDB8fHwxNzUzMDM1MTQzfDA&ixlib=rb-4.1.0&q=85",
      category: 'event',
      title: 'Award Ceremony',
      description: 'Exclusive event photography'
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1465682049206-bf5e6ab542e6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxMXx8Y2VsZWJyaXR5JTIwcmVkJTIwY2FycGV0JTIwcGhvdG9ncmFwaHl8ZW58MHwwfHx8MTc1MzAzNTE0M3ww&ixlib=rb-4.1.0&q=85",
      category: 'celebrity',
      title: 'Professional Equipment',
      description: 'Behind the scenes setup'
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1599859111054-e8979c0bb4ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxMnx8Y2VsZWJyaXR5JTIwcmVkJTIwY2FycGV0JTIwcGhvdG9ncmFwaHl8ZW58MHwwfHx8MTc1MzAzNTE0M3ww&ixlib=rb-4.1.0&q=85",
      category: 'celebrity',
      title: 'Fashion Photography',
      description: 'Editorial fashion shoot'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'celebrity', name: 'Celebrity' },
    { id: 'political', name: 'Political' },
    { id: 'event', name: 'Events' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="subtitle mb-4" style={{ color: 'var(--lightblue)' }}>
            Portfolio Gallery
          </p>
          <h2 className="title mb-8" style={{ color: 'var(--black)' }}>
            Our <span style={{ color: 'var(--deeppink)' }}>Featured</span> Work
          </h2>
          <p className="para max-w-2xl mx-auto" style={{ color: 'var(--black)' }}>
            Explore our extensive portfolio of celebrity portraits, political events, and high-profile photography sessions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`subtitle px-6 py-3 transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[var(--deeppink)] text-white'
                  : 'bg-[var(--light-gray)] hover:bg-[var(--lightblue)] hover:text-white'
              }`}
              style={{ color: activeCategory === category.id ? 'var(--white)' : 'var(--black)' }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden cursor-pointer bg-gray-100 aspect-[3/4]"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-[var(--deeppink)] transition-colors"
              >
                <X size={32} />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[var(--deeppink)] transition-colors"
              >
                <ChevronLeft size={48} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[var(--deeppink)] transition-colors"
              >
                <ChevronRight size={48} />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-xl mb-1">{filteredImages[selectedImage].title}</h3>
                <p className="opacity-90">{filteredImages[selectedImage].description}</p>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 text-white">
                <span className="text-sm">
                  {selectedImage + 1} / {filteredImages.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;