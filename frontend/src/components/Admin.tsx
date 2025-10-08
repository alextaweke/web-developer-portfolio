import { useState } from "react";
import axios from "axios";

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

const Admin = () => {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!password) return;
    setLoading(true);
    try {
      const res = await axios.get<Message[]>(
        `${import.meta.env.VITE_API_URL}/api/messages`,
        {
          headers: { Authorization: `Bearer ${password}` },
        }
      );
      setMessages(res.data);
      setLoggedIn(true);
      setError("");
    } catch {
      setError("Invalid password or failed to fetch messages");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
        {!loggedIn ? (
          <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg mb-4 dark:bg-gray-700"
            />
            <button
              onClick={handleLogin}
              disabled={!password}
              className={`w-full py-3 rounded-lg transition ${
                password
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              {loading ? "Loading..." : "Login"}
            </button>
            {error && <p className="text-red-500 mt-3 text-center">{error}</p>}
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">
              📩 Contact Messages
            </h2>
            <button
              onClick={() => {
                setLoggedIn(false);
                setPassword("");
                setMessages([]);
              }}
              className="mb-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border"
                >
                  <p>
                    <b>Name:</b> {msg.name}
                  </p>
                  <p>
                    <b>Email:</b> {msg.email}
                  </p>
                  <p>
                    <b>Message:</b> {msg.message}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(msg.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Admin;
