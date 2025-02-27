export function Button({ children, onClick, className = "" }) {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded ${className}`}
      >
        {children}
      </button>
    );
  }
  