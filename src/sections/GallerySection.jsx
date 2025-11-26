import React from 'react';

// Pinterest-style masonry gallery using CSS columns and Tailwind classes.
// Images are mock data (picsum.photos seeded). Replace with real image URLs as needed.

const images = [
  { id: 1, src: 'https://picsum.photos/seed/pic1/400/600', alt: 'Group photo 1' },
  { id: 2, src: 'https://picsum.photos/seed/pic2/400/500', alt: 'Group photo 2' },
  { id: 3, src: 'https://picsum.photos/seed/pic3/400/700', alt: 'Group photo 3' },
  { id: 4, src: 'https://picsum.photos/seed/pic4/400/450', alt: 'Group photo 4' },
  { id: 5, src: 'https://picsum.photos/seed/pic5/400/620', alt: 'Group photo 5' },
  { id: 6, src: 'https://picsum.photos/seed/pic6/400/560', alt: 'Group photo 6' },
  { id: 7, src: 'https://picsum.photos/seed/pic7/400/480', alt: 'Group photo 7' },
  { id: 8, src: 'https://picsum.photos/seed/pic8/400/650', alt: 'Group photo 8' },
  { id: 9, src: 'https://picsum.photos/seed/pic9/400/530', alt: 'Group photo 9' },
  { id: 10, src: 'https://picsum.photos/seed/pic10/400/590', alt: 'Group photo 10' },
];

const GallerySection = () => {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Group Photos</h2>

      {/* Masonry using CSS columns */}
      <div className="gallery-columns columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img) => (
          <figure
            key={img.id}
            className="break-inside-avoid rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto block"
              loading="lazy"
            />
            {/* optional caption area */}
            <figcaption className="text-sm text-gray-600 p-2">{img.alt}</figcaption>
          </figure>
        ))}
      </div>

      {/* Small note: CSS tweak for smoother gaps (Tailwind doesn't provide a columns gap utility by default) */}
      <style jsx>{`
        /* ensure images don't break awkwardly across columns */
        .break-inside-avoid { -webkit-column-break-inside: avoid; -moz-column-break-inside: avoid; column-break-inside: avoid; }
        /* small horizontal gap between columns */
        .gallery-columns { column-gap: 1rem; }
      `}</style>
    </section>
  );
};

export default GallerySection;