import { useState, useEffect } from "react";

const slides = [
    {
        title: "Hi, I'm Rohit Magdum",
        subtitle: "Software Developers",
        description: "I build modern web applications with React, TypeScript, and Node.js.",
    },
    {
        title: "Spring, React & Tailwind Enthusiast",
        subtitle: "Front-End Specialist",
        description: "Passionate about creating beautiful and performant user interfaces.",
    },
    {
        title: "Open to Opportunities",
        subtitle: "Let's Connect!",
        description: "Reach out for collaborations or exciting projects.",
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden">
            <div className="w-full max-w-2xl px-6 py-12 text-center transition-all duration-700 ease-in-out">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in">
                    {slides[current].title}
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-2 animate-fade-in">
                    {slides[current].subtitle}
                </h2>
                <p className="text-lg text-gray-700 mb-6 animate-fade-in">
                    {slides[current].description}
                </p>
                <div className="flex justify-center gap-4 mt-4">
                    <a href="mailto:rohitmagdum2@gmail.com" className="px-6 py-2 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 transition">Contact Me</a>
                    <a href="https://github.com/ROHITMAGDUM2" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-gray-900 text-white rounded-full shadow hover:bg-gray-800 transition">GitHub</a>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>
    );
}