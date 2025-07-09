import React, { useState } from "react";
import OpenAI from "openai";

const ChatbotGuru = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const openai = new OpenAI({
        apiKey: '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', // Secure API Key
        dangerouslyAllowBrowser: true,
    });

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages([...messages, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a spiritual guru guiding meditation and healing." },
                    ...messages,
                    userMessage,
                ],
                max_tokens: 150,
            });

            const botMessage = {
                role: "assistant",
                content: response.choices[0]?.message?.content || "Seek peace within. 🌿",
            };

            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("OpenAI API Error:", error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { role: "assistant", content: "I sense an energy block... Try again later. 🙏" },
            ]);
        }

        setLoading(false);
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-center text-indigo-800">🌿 Chatbot Guru</h2>
            <div className="mt-4 h-80 overflow-y-auto bg-white p-4 rounded-lg shadow-inner">
                {messages.length === 0 ? (
                    <p className="text-gray-500 text-center">Ask me about meditation, chakras, or healing. ✨</p>
                ) : (
                    messages.map((msg, idx) => (
                        <div key={idx} className={`p-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                            <p
                                className={`inline-block px-3 py-2 rounded-lg ${msg.role === "user" ? "bg-indigo-500 text-white" : "bg-gray-200 text-gray-800"
                                    }`}
                            >
                                {msg.content}
                            </p>
                        </div>
                    ))
                )}
            </div>

            <div className="flex mt-4">
                <input
                    type="text"
                    className="flex-1 p-2 border rounded-l-lg focus:outline-none"
                    placeholder="Ask me something spiritual..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg flex items-center"
                    onClick={sendMessage}
                    disabled={loading}
                >
                    {/* {loading ? <Loader2 className="animate-spin" size={18} /> : <PaperPlaneIcon size={18} />} */}
                </button>
            </div>
        </div>
    );
};

export default ChatbotGuru;

