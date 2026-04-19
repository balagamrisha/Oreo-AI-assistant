import { useState } from "react";
import { postQuery } from "../api";
import { useNavigate } from "react-router-dom";

function Chat() {
  const navigate = useNavigate();

  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await postQuery(question);

      // safe handling (prevents blank UI issues)
      setResponse(res?.response || "No response received");
    } catch (err) {
      console.error(err);
      setResponse("Error getting response from server");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">

      {/* Header */}
      <div className="w-full max-w-2xl flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Oreo
        </h1>

        <button
          onClick={() => navigate("/")}
          className="px-3 py-1 border border-gray-600 rounded-lg text-sm hover:bg-white/10 transition"
        >
          ← Back
        </button>
      </div>

      {/* Input Section */}
      <div className="w-full max-w-2xl flex gap-2 mb-6">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
          placeholder="Ask Oreo anything..."
          className="flex-1 p-3 rounded-lg bg-black border border-gray-700 focus:outline-none"
        />

        <button
          onClick={handleSubmit}
          className="px-4 md:px-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:scale-105 transition"
        >
          {loading ? "..." : "Ask"}
        </button>
      </div>

      {/* Response Section */}
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg p-5 rounded-xl shadow-lg text-gray-300 whitespace-pre-wrap leading-relaxed min-h-[120px]">
        {loading && <p className="animate-pulse">Thinking...</p>}
        {!loading && response}
      </div>
    </div>
  );
}

export default Chat;