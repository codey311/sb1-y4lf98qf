import React from 'react';

const beforeAfterImages = [
  {
    before: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Lawn Renovation"
  },
  {
    before: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Tree Trimming"
  },
  {
    before: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Land Clearing"
  }
];

function Gallery() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Before & After Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {beforeAfterImages.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Before</p>
                  <img
                    src={project.before}
                    alt={`${project.title} Before`}
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">After</p>
                  <img
                    src={project.after}
                    alt={`${project.title} After`}
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;