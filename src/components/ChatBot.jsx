
// import React, { useState } from "react";
// import { FaPhoneAlt } from "react-icons/fa";
// import { IoMdChatbubbles } from "react-icons/io";
// import { Controller, useForm, useWatch } from "react-hook-form";

// const Chatbot = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeAnswer, setActiveAnswer] = useState("");

//     const questions = [
//         {
//             question: "Who is Yogi Akash?",
//             answer: "Yogi Akash is a spiritual guide and life coach.",
//         },
//         {
//             question: "Who is Yogi Akash?",
//             answer: "Yogi Akash is a spiritual guide and life coach.",
//         },
//         {
//             question: "Who is Yogi Akash?",
//             answer: "Yogi Akash is a spiritual guide and life coach.",
//         },
//         {
//             question: "Who is Yogi Akash?",
//             answer: "Yogi Akash is a spiritual guide and life coach.",
//         },
//         {
//             question: "Who is Yogi Akash?",
//             answer: "Yogi Akash is a spiritual guide and life coach.",
//         },
//         {
//             question: "Who is Yogi Akash?",
//             answer: "Yogi Akash is a spiritual guide and life coach.",
//         },
//         {
//             question: "How can I book a session?",
//             answer: "You can book a session through the 'Book Now' page. You can book a session through the 'Book Now' page. You can book a session through the 'Book Now' page. You can book a session through the 'Book Now' page. You can book a session through the 'Book Now' page. You can book a session through the 'Book Now' page. You can book a session through the ",
//         },
//         {
//             question: "What does Yogi Akash specialize in?",
//             answer: "Yogi Akash specializes in meditation, yoga, and life coaching.",
//         },
//     ];

//     const handleQuestionClick = (answer) => {
//         setActiveAnswer(answer);
//     };

//     const handleCross = () => {
//         setIsOpen(false);
//         setActiveAnswer("");
//     };
//     const handleSelectChange = (e) => {
//         const selectedValue = e.target.value;
//         setActiveAnswer(selectedValue)


//     }

//     return (
//         <div>

//             <div
//                 className="fixed bottom-6 right-6 bg-blue-500 p-6 rounded-full cursor-pointer shadow-lg text-white"
//                 onClick={() => setIsOpen(!isOpen)}
//             >
//                 <IoMdChatbubbles
//                     className="text-2xl"
//                 />
//             </div>


//             {isOpen && (
//                 <div className="fixed bottom-20 right-6 w-1/3 bg-black rounded-lg shadow-lg border border-gray-200 text-white flex flex-col max-h-[70vh]">

//                     <div className="flex p-2 justify-between items-center rounded-t-lg">

//                         <div className="flex gap-3 items-center">
//                             <img
//                                 src="/Images/homePhoto.jpg"
//                                 className="w-11 h-11 rounded-full object-cover"
//                                 alt="Yogi Akash"
//                             />
//                             <h3 className="text-base font-semibold">Yogi Akash</h3>
//                         </div>

//                         <div className="flex items-center justify-center gap-4">

//                             <button>
//                                 <FaPhoneAlt className='text-white  text-base' />
//                             </button>

//                             <button
//                                 className="text-3xl mb-2"
//                                 onClick={handleCross}
//                             >
//                                 &times;
//                             </button>

//                         </div>
//                     </div>


//                     <div className="flex-1 overflow-y-auto p-4">

//                         <div className="flex flex-col justify-end items-end ">

//                             <div>
//                                 <select
//                                     className="w-full p-3 bg-blue-600 text-white rounded-2xl cursor-pointer outline-none"
//                                     onChange={handleSelectChange}
//                                     defaultValue=""
//                                 >
//                                     <option value="" disabled>Select a question...</option>
//                                     {questions.map((item, index) => (
//                                         <option key={index} value={item.answer}>
//                                             {item.question}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>
//                         </div>

//                         <div className="flex justify-start mt-4">
//                             {activeAnswer && (
//                                 <div className="w-2/3 p-3 bg-gray-600 rounded-2xl text-white">
//                                     {activeAnswer}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div >
//     );
// };

// export default Chatbot;


import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeAnswer, setActiveAnswer] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState("")

    const questions = [
        {
            question: "Who is Yogi Akash?",
            answer: "Yogi Akash is a spiritual guide and life coach.",
        },
        {
            question: "How can I book a session?",
            answer: "You can book a session through the 'Book Now' page on the website.",
        },
        {
            question: "What does Yogi Akash specialize in?",
            answer: "Yogi Akash specializes in meditation, yoga, and life coaching.",
        },
    ];

    const handleSelectChange = (event) => {
        const selectedAnswer = event.target.value;
        setActiveAnswer(selectedAnswer);
        setChatHistory([...chatHistory, { type: "question", text: event.target.options[event.target.selectedIndex].text }, { type: "answer", text: selectedAnswer }]);
        setSelectedQuestion("")
    };

    const handleCross = () => {
        setIsOpen(false);
        setActiveAnswer("");
        setChatHistory([]);
    };

    const handleSendMessage = () => {
        if (userMessage.trim() !== "") {
            setChatHistory([
                ...chatHistory,
                { type: "user", text: userMessage },
                { type: "bot", text: "Thank you for your message! We will get back to you soon." }
            ]);
            setUserMessage("");
        }
    };

    console.log(chatHistory)
    const navigate = useNavigate()

    const handleCall = () => {
        navigate('/contact')
        setIsOpen(false)
    }

    return (
        <div className="w-full p-4">

            <button
                className="fixed bottom-20 right-6 bg-purple-500 p-5 rounded-full cursor-pointer shadow-2xl text-white border-purple-300"
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* <div className="absolute inset-0 w-full h-full  opacity-50 rounded-full blur-lg"></div> */}
                <IoMdChatbubbles className="text-2xl relative" />
            </button>


            {
                isOpen && (
                    <div className="fixed bottom-20 right-6 lg:w-1/4 md:w-1/2  bg-gray-200 rounded-xl shadow-lg border border-gray-200 text-white flex flex-col max-h-[70vh] min-h-[40vh]">


                        <div className="flex p-2 justify-between items-center bg-[#a7594d] rounded-t-lg">
                            <div className="flex gap-3 items-center">
                                <img
                                    src="/Images/homePhoto.jpg"
                                    className="w-11 h-11 rounded-full object-cover"
                                    alt="Yogi Akash"
                                />
                                <h3 className="text-base font-semibold">Yogi Akash</h3>
                            </div>
                            <div className="flex items-center gap-4">

                                <button
                                    onClick={handleCall}
                                >
                                    <FaPhoneAlt className="text-white text-base" />
                                </button>

                                <button className="text-3xl mb-2" onClick={handleCross}>
                                    &times;
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-2">

                            <div className="flex flex-col justify-center items-center ">

                                <div>
                                    <select
                                        className="w-full p-3 bg-white text-[#666666] rounded-2xl cursor-pointer outline-none"
                                        onChange={handleSelectChange}
                                        value={selectedQuestion}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select a question...</option>
                                        {questions.map((item, index) => (
                                            <option key={index} value={item.answer}>
                                                {item.question}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {chatHistory.map((message, index) => (
                                <div
                                    key={index}
                                    className={`w-2/3 p-3 rounded-2xl text-white ${message.type === "user" || message.type === "question" ? "bg-[#a7594d] self-end ml-auto" : "bg-gray-500 shadow-lg"}`}
                                >
                                    {message.text}
                                </div>
                            ))}
                        </div>


                        <div className="p-2  rounded-b-lg flex items-center ">

                            <textarea
                                className="flex-1 p-1 bg-gray-100 text-[#666666] rounded-lg resize-none outline-none"
                                placeholder="Type your message..."
                                value={userMessage}
                                onChange={(e) => setUserMessage(e.target.value)}
                            />
                            <button
                                className="ml-2 px-4 py-2 rounded-lg text-[#666666] hover:bg-gray-200 cursor-pointer text-2xl"
                                onClick={handleSendMessage}
                            >
                                <FiSend />

                            </button>

                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default Chatbot;
