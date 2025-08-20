import { useRef, useEffect } from "react";

const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "HTML/CSS",
    "Tailwind CSS",
    "Git",
    "SQL",
    "Redux",
    "Express",
    "MongoDB",
    "REST API",
    "Jest",
];

export default function Skills() {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let start = 0;
        let req: number;

        function animate() {
            start -= 0.5; // Adjust speed here
            if (Math.abs(start) >= slider.scrollWidth / 2) {
                start = 0;
            }
            slider.style.transform = `translateX(${start}px)`;
            req = requestAnimationFrame(animate);
        }

        req = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(req);
    }, []);

    return (
        <section className="my-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Skills</h2>
            <div className="overflow-hidden w-full">
                <div
                    ref={sliderRef}
                    className="flex gap-6 py-4 px-2 whitespace-nowrap transition-transform duration-700 will-change-transform"
                    style={{ width: "max-content" }}
                >
                    {[...skills, ...skills].map((skill, idx) => (
                        <span
                            key={idx}
                            className="px-6 py-3 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 text-white font-bold rounded-full shadow-lg text-lg animate-skill-pop"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}