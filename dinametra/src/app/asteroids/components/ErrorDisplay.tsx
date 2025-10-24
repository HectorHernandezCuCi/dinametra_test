interface ErrorDisplayProps {
    error: string
}

const ErrorDisplay = ({error}: ErrorDisplayProps) => {
    return (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-6 text-center">
            <p className="text-red-400 font-semibold">Error loading asteroid data</p>
            <p className="text-red-300 mt-2">{error}</p>
          </div>
        </div>
    )
}

export default ErrorDisplay;