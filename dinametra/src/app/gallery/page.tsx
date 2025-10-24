"use client";

import { useState } from "react";
import { NasaImage } from "./types/galleryTypes";
import Header from "../components/Header";
import ImageModal from "./modals/ImageModal";
import InitialState from "./components/InitialState";
import EmptyState from "./components/EmptyState";
import GalleryGrid from "./components/GalleryGrid";
import SearchSection from "./components/SearchSection";
import Footer from "../components/Footer";


export default function Gallery() {
  const [query, setQuery] = useState<string>('mars');
  const [images, setImages] = useState<NasaImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<NasaImage | null>(null);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-[#ff6a00]">
                NASA Gallery
              </h1>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore the universe through NASA&apos;s vast collection of images and media
            </p>
          </div>

          <SearchSection 
            query={query} 
            setQuery={setQuery} 
            loading={loading} 
            setLoading={setLoading} 
            setImages={setImages} 
          />
        </div>
      </div>

      {loading && (
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff6a00]"></div>
            <p className="text-gray-300 text-lg">
              Exploring NASA&apos;s archives...
            </p>
          </div>
        </div>
      )}

      {!loading && images.length > 0 && (
        <GalleryGrid images={images} setSelectedImage={setSelectedImage} query={query}/>
      )}

      {!loading && images.length === 0 && query && (
        <EmptyState />
      )}

      {!loading && images.length === 0 && !query && (
        <InitialState setQuery={setQuery} />
      )}

      {selectedImage && (
        <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      )}

      <Footer />
    </div>
  );
}
