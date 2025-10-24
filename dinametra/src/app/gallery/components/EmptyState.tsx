"use client";

import { Search } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-md mx-auto">
        <div className="w-24 h-24 bg-black border border-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
          <Search className="w-10 h-10 text-[#ff6a00]" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">No images found</h3>
        <p className="text-gray-400">
          Try searching for something else like &quot;earth&quot;, &quot;jupiter&quot;, or &quot;hubble&quot;
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
