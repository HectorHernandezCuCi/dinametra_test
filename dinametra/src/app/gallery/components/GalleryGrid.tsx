"use client";

import Image from "next/image";
import { NasaImage } from "../types/galleryTypes";
import { ZoomIn } from "lucide-react";

interface GalleryGridProps {
  images: NasaImage[];
  setSelectedImage: React.Dispatch<React.SetStateAction<NasaImage | null>>;
  query: string;
}

const GalleryGrid = ({
  images,
  setSelectedImage,
  query
}: GalleryGridProps) => {
  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">
          Found {images.length} image{images.length !== 1 ? 's' : ''} for &quot;{query}&quot;
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((img) => (
          <div 
            key={img.nasa_id} 
            className="group relative bg-black rounded-2xl overflow-hidden border border-gray-800 hover:border-[#ff6a00] transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={img.href}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex space-x-3">
                  <div className="bg-[#ff6a00] rounded-full p-3">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-white line-clamp-2 mb-2 group-hover:text-[#ff6a00] transition-colors">
                {img.title}
              </h3>
              {img.description && (
                <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
                  {img.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryGrid;
