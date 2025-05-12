import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center p-4">
      <div className="flex space-x-6 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            className="w-20 h-20 hover:scale-110 transition"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className="w-20 h-20 hover:scale-110 transition"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Vite + React + Tailwind 🎉
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          count is {count}
        </button>
        <p className="mt-4 text-sm text-gray-600">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-6 text-gray-500 text-sm">
        Click on the logos above to learn more
      </p>
    </div>
  );
}

export default App;
