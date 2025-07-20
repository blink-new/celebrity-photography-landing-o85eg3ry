import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Academy Award Winner",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDB8MHx8fDE3NTMwMzUxNDN8MA&ixlib=rb-4.1.0&q=85",
      quote: "Working with this photographer was an absolute dream. They captured not just my image, but my essence. The professionalism and artistic vision are unmatched in the industry.",
      rating: 5,
      project: "Red Carpet Portfolio"
    },
    {
      id: 2,
      name: "Senator Michael Davis",
      role: "U.S. Senator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxtYW4lMjBwb3J0cmFpdHxlbnwwfDB8fHwxNzUzMDM1MTQzfDA&ixlib=rb-4.1.0&q=85",
      quote: "The campaign photos were exceptional. They understood the importance of conveying trust and leadership through imagery. Every shot was perfectly composed and professionally executed.",
      rating: 5,
      project: "Political Campaign 2024"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Grammy-Nominated Artist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHx3b21hbiUyMHBvcnRyYWl0fGVufDB8MHx8fDE3NTMwMzUxNDN8MA&ixlib=rb-4.1.0&q=85",
      quote: "These photos elevated my brand to a whole new level. The attention to detail and creative direction were phenomenal. I've never felt more confident in front of the camera.",
      rating: 5,
      project: "Album Cover Shoot"
    },
    {
      id: 4,
      name: "Governor James Wilson",
      role: "State Governor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw0fHxtYW4lMjBwb3J0cmFpdHxlbnwwfDB8fHwxNzUzMDM1MTQzfDA&ixlib=rb-4.1.0&q=85",
      quote: "Professional, punctual, and incredibly talented. The official portraits exceeded all expectations and have been used across all our official communications.",
      rating: 5,
      project: "Official State Portraits"
    },
    {
      id: 5,
      name: "Alexandra Chen",
      role: "Hollywood Director",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw1fHx3b21hbiUyMHBvcnRyYWl0fGVufDB8MHx8fDE3NTMwMzUxNDN8MA&ixlib=rb-4.1.0&q=85",
      quote: "The behind-the-scenes photography during our film premiere was outstanding. They captured the energy and excitement perfectly while remaining completely unobtrusive.",
      rating: 5,
      project: "Film Premiere Coverage"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? 'fill-current' : ''}
        style={{ color: 'var(--orange)' }}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="subtitle mb-4" style={{ color: 'var(--green)' }}>
            Client Testimonials
          </p>
          <h2 className="title mb-8" style={{ color: 'var(--black)' }}>
            What Our <span style={{ color: 'var(--deeppink)' }}>Clients</span> Say
          </h2>
          <p className="para max-w-2xl mx-auto" style={{ color: 'var(--black)' }}>
            Don't just take our word for it. Here's what celebrities, politicians, and industry leaders have to say about our work.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6">
              <Quote size={40} style={{ color: 'var(--lightblue)' }} className="opacity-20" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Client Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-[var(--deeppink)]/20">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                {/* Quote */}
                <blockquote className="para text-lg mb-6 italic" style={{ color: 'var(--black)' }}>
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                {/* Client Info */}
                <div>
                  <h4 className="font-bold text-xl mb-1" style={{ color: 'var(--black)' }}>
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="subtitle text-sm mb-2" style={{ color: 'var(--deeppink)' }}>
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--black)' }}>
                    Project: {testimonials[currentTestimonial].project}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[var(--light-gray)] hover:bg-[var(--deeppink)] hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[var(--light-gray)] hover:bg-[var(--deeppink)] hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-[var(--deeppink)] scale-125'
                    : 'bg-[var(--light-gray)] hover:bg-[var(--lightblue)]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-gray-200">
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-2" style={{ color: 'var(--deeppink)' }}>
              98%
            </h3>
            <p className="subtitle" style={{ color: 'var(--black)' }}>
              Client Satisfaction
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-2" style={{ color: 'var(--lightblue)' }}>
              500+
            </h3>
            <p className="subtitle" style={{ color: 'var(--black)' }}>
              Happy Clients
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-2" style={{ color: 'var(--green)' }}>
              15+
            </h3>
            <p className="subtitle" style={{ color: 'var(--black)' }}>
              Years Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;