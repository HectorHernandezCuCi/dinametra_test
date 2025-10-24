import { fetchNasaImages } from "./fetchNasaImages";
import { NasaImage } from "../types/galleryTypes";
interface handleSearchProps {
    query: string;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setImages: React.Dispatch<React.SetStateAction<NasaImage[]>>;
}


const handleSearch = async (e: React.FormEvent, {
    query,
    setLoading,
    setImages
}: handleSearchProps) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    const results = await fetchNasaImages(query);
    setImages(results);
    setLoading(false);
};

export default handleSearch;