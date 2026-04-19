import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden px-4">

      {/* Glow Orbs */}
      <div className="absolute w-[300px] h-[300px] bg-purple-500 rounded-full blur-[120px] opacity-30 animate-pulse top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-blue-500 rounded-full blur-[120px] opacity-30 animate-pulse bottom-10 right-10"></div>

      {/* Navbar */}
      <div className="absolute top-6 left-6 text-xl md:text-2xl font-bold">
        Oreo
      </div>

      {/* Hero */}
      <div className="text-center max-w-2xl z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Talk to Oreo — Smarter. Faster. Better.
        </h1>

        <p className="text-gray-400 mb-8 text-sm md:text-lg">
          Your AI-powered assistant for instant answers.
        </p>

        <button
          onClick={() => navigate("/chat")}
          className="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-all shadow-lg"
        >
          Ask Oreo
        </button>
      </div>
    </div>
  );
}

export default Landing;