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
                    className="p-5 shadow-2xl font-extrabold text-4xl bg-white text-[#044F86] rounded-full   transition-all duration-300"
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;