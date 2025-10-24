import { NasaImage } from "../types/galleryTypes"
import { ExternalLink } from "lucide-react";

interface ImageDetailsProps {
    selectedImage: NasaImage;
}
const ImageDetails = ({
    selectedImage
}: ImageDetailsProps) => {
    return(
    <div className="flex-1 p-6 md:p-8 overflow-y-auto max-h-[60vh] md:max-h-none bg-black border-l border-gray-800">
        <div className="space-y-6">
            <div>
            <h2 className="text-2xl font-bold text-[#ff6a00] mb-3">
                {selectedImage.title}
            </h2>
            {selectedImage.description && (
                <p className="text-gray-300 leading-relaxed">
                {selectedImage.description}
                </p>
            )}
            </div>

            <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
            <span className="text-sm text-gray-400">NASA ID: {selectedImage.nasa_id}</span>
            <a
                href={selectedImage.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#ff6a00] hover:text-[#ff8533] transition-colors"
            >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">View Original</span>
            </a>
            </div>
        </div>
    </div>
    )
}

export default ImageDetails;