import Image from "next/image"
import ImageDetails from "../components/ImageDetails"
import { NasaImage } from "../types/galleryTypes"
import { X } from "lucide-react"

interface ImageModalProps {
    selectedImage: NasaImage;
    setSelectedImage: React.Dispatch<React.SetStateAction<NasaImage | null>>;
}

const ImageModal = ({
    selectedImage,
    setSelectedImage
}: ImageModalProps) => {
    return(
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-[90vh] bg-black border border-gray-800 rounded-2xl overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/80 hover:bg-[#ff6a00] text-white rounded-full p-2 transition-colors border border-gray-800"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col md:flex-row max-h-[90vh]">
              <div className="relative flex-1 min-h-[400px] md:min-h-[600px] bg-black">
                <Image
                  src={selectedImage.href}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <ImageDetails selectedImage={selectedImage}/>
            </div>
          </div>
        </div>
    )
}

export default ImageModal;