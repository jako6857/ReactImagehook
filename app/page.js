"use client";

import { useImages } from "../hooks/useImages";

export default function HomePage() {
  const { images, loading, error } = useImages();

  return (
    <main className="page">
      <h1>useImages Demo</h1>
      <p>
        Laeg dine billeder i public-mappen. Hooket finder automatisk alle billedstier
        uden hardcoding.
      </p>

      {loading && <p>Loading images...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && images.length === 0 && (
        <p>No images found yet. Add files in public and refresh.</p>
      )}

      <section className="grid">
        {images.map((src) => (
          <figure key={src} className="card">
            <img src={src} alt={src} loading="lazy" />
            <figcaption>{src}</figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}
