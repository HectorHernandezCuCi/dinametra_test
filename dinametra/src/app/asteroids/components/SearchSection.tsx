interface SearchSectionProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedDate: string;
  setSelectedDate: (value: string) => void;
  filteredAsteroids: unknown[];
  allAsteroids: unknown[];
}


const SearchSection = ({
  searchTerm,
  setSearchTerm,
  selectedDate,
  setSelectedDate,
  filteredAsteroids = [],
  allAsteroids = [],
}: SearchSectionProps) => {
    return(
        <section>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Search Asteroids</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Search by Name</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter asteroid name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  />
                  <div className="absolute right-3 top-3">
                    <span className="text-gray-400">🔍</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Filter by Close Approach Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Showing <span className="text-blue-400 font-semibold">{filteredAsteroids.length}</span> of{" "}
                <span className="text-green-400 font-semibold">{allAsteroids.length}</span> asteroids
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default SearchSection;