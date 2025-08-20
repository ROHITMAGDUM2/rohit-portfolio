import { useState, useEffect } from "react";

const projects = [
    {
        title: "Portfolio Website",
        description:
            "A personal portfolio built with React and Tailwind CSS to showcase my skills and projects.",
        link: "https://github.com/ROHITMAGDUM2/portfolio",
        image:
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    },
    {
        title: "Task Manager App",
        description:
            "A full-stack task manager with authentication, built using Node.js, Express, and MongoDB.",
        link: "https://github.com/ROHITMAGDUM2/task-manager",
        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    },
    {
        title: "Weather Dashboard",
        description:
            "A React dashboard that fetches and displays weather data using public APIs.",
        link: "https://github.com/ROHITMAGDUM2/weather-dashboard",
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    },
];

export default function Projects() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % projects.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (idx: number) => setCurrent(idx);

    return (
        <section className="my-12 w-full">
            <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
            <div className="relative w-full flex justify-center">
                <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg bg-white">
                    <div
                        key={projects[current].title}
                        className="transition-all duration-700 ease-in-out animate-fade-in"
                    >
                        <img
                            src={projects[current].image}
                            alt={projects[current].title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-2">
                                {projects[current].title}
                            </h3>
                            <p className="text-gray-700 mb-4">
                                {projects[current].description}
                            </p>
                            <a
                                href={projects[current].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-2 bg-purple-600 text-white rounded-full shadow hover:bg-purple-700 transition"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {projects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${idx === current ? "bg-purple-600 scale-125" : "bg-gray-300"
                                }`}
                            aria-label={`Go to project ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}