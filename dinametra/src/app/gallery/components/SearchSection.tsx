import { Search } from "lucide-react";
import handleSearch from "../helpers/handleSearch";
import { NasaImage } from "../types/galleryTypes";
import { fetchNasaImages } from "../helpers/fetchNasaImages";

interface SearchSectionProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setImages: React.Dispatch<React.SetStateAction<NasaImage[]>>;
}

const SearchSection = ({
    query,
    setQuery,
    loading,
    setLoading,
    setImages,
}: SearchSectionProps) => {
    
    const handleKeywordClick = async (keyword: string) => {
        setQuery(keyword);
        setLoading(true);
        const results = await fetchNasaImages(keyword);
        setImages(results);
        setLoading(false);
    };

    return (
        <div className="space-y-8">
            <div className="max-w-2xl mx-auto">
                <form onSubmit={(e) => handleSearch(e, { query, setLoading, setImages })} className="relative">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for planets, galaxies, astronauts..."
                            className="w-full bg-black border border-gray-800 rounded-2xl pl-12 pr-32 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:border-transparent text-lg transition-all duration-200"
                        />
                        <button
                            type="submit"
                            disabled={loading || !query?.trim()}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#ff6a00] text-white px-6 py-2 rounded-xl hover:bg-[#ff8533] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium shadow-lg shadow-[#ff6a00]/20 hover:shadow-[#ff6a00]/40"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Searching...
                                </span>
                            ) : (
                                "Search"
                            )}
                        </button>
                    </div>
                </form>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Popular Searches</h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent ml-4"></div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {[
                        'APOLLO 11 FLIGHT',
                        'MOON',
                        'LUNAR SURFACE',
                        'LUNAR BASES',
                        'LUNAR MODULE',
                        'ASTRONAUTS',
                        'EXTRAVEHICULAR ACTIVITY',
                        'MARS',
                        'EARTH',
                        'JUPITER',
                        'HUBBLE'
                    ].map((keyword) => (
                        <button
                            key={keyword}
                            onClick={() => handleKeywordClick(keyword)}
                            disabled={loading}
                            className="group relative bg-black border border-gray-800 hover:border-[#ff6a00] text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                        >
                            <span className="relative z-10">{keyword}</span>
                            <div className="absolute inset-0 bg-[#ff6a00]/0 group-hover:bg-[#ff6a00]/10 transition-all duration-200"></div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchSection;