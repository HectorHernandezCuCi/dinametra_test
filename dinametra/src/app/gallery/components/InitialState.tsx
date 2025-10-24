interface InitialStateProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const InitialState = ({
    setQuery
}: InitialStateProps) => {
    return (
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {['mars', 'earth', 'jupiter', 'hubble'].map((term) => (
              <button
                key={term}
                onClick={() => {
                  setQuery(term);
                  setTimeout(() => {
                    const event = new Event('submit', { bubbles: true, cancelable: true });
                    document.querySelector('form')?.dispatchEvent(event);
                  }, 100);
                }}
                className="bg-black rounded-xl p-6 border border-gray-800 hover:border-[#ff6a00] hover:bg-[#ff6a00]/10 transition-all duration-200 group"
              >
                <div className="text-[#ff6a00] group-hover:text-[#ff8533] font-medium capitalize">
                  {term}
                </div>
              </button>
            ))}
          </div>
        </div>
    )
}

export default InitialState;