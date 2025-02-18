import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);


    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-20 left-10">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="p-5 bg-transparent font-extrabold text-3xl bg-blue-500 text-[#a7594d] rounded-full shadow-lg  transition-all duration-300"
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;