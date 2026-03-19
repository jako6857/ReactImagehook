"use client";

import { useEffect, useState } from "react";

export function useImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isActive = true;

    async function fetchImages() {
      try {
        setLoading(true);
        const response = await fetch("/api/images");

        if (!response.ok) {
          throw new Error("Failed to load images.");
        }

        const payload = await response.json();
        if (isActive) {
          setImages(payload.images ?? []);
        }
      } catch (err) {
        if (isActive) {
          setError(err instanceof Error ? err.message : "Unknown error.");
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    fetchImages();

    return () => {
      isActive = false;
    };
  }, []);

  return { images, loading, error };
}
