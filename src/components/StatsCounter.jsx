

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ChatbotGuru from './flower';
import Chatbot from './flower';


const StatsCounter = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });


    useEffect(() => {
        if (inView) {
            incrementCounter(500, setCount1);
            incrementCounter(200, setCount2);
            incrementCounter(20, setCount3);
        }
    }, [inView]);


    const incrementCounter = (target, setState) => {
        let count = 0;
        const interval = setInterval(() => {
            count += 10;
            if (count >= target) {
                clearInterval(interval);
                setState(target);
            }
            setState(count);
        }, 50);
    };

    return (
        <section ref={ref} className="my-4">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-8">Our Impact</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="stat-item">
                        <h3 className="text-5xl font-semibold text-[#a7594d] ">{count1}+ </h3>
                        <p className="text-xl text-[#a7594d] ">Happy Students</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="text-5xl font-semibold text-[#a7594d] ">{count2}+ </h3>
                        <p className="text-xl text-[#a7594d] ">Yoga Sessions</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="text-5xl font-semibold text-[#a7594d] ">{count3}+ </h3>
                        <p className="text-xl text-[#a7594d] ">Countries Visited</p>
                    </div>
                </div>
            </div>
            <Chatbot />
        </section>
    );
};

export default StatsCounter;
