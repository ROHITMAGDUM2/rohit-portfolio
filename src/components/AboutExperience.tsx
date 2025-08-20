import { useEffect, useRef } from "react";

const aboutMe = {
    name: "Rohit Magdum",
    title: "Software Developer",
    description:
        "I'm a passionate developer specializing in modern web technologies. I love building beautiful, performant applications and collaborating on exciting projects.",
};

const experiences = [
    {
        role: "Software Developer Intern",
        company: "Tech Company",
        period: "Jan 2025 – May 2025",
        details: [
            "Developed and maintained web applications using React and Node.js.",
            "Collaborated with cross-functional teams to deliver high-quality software.",
            "Implemented REST APIs and optimized database queries.",
        ],
    },
    {
        role: "Frontend Developer",
        company: "Startup Inc.",
        period: "Jun 2024 – Dec 2024",
        details: [
            "Built responsive UI components with React and Tailwind CSS.",
            "Improved performance and accessibility of web apps.",
            "Worked closely with designers to deliver pixel-perfect interfaces.",
        ],
    },
];

export default function AboutExperience() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const cards = section.querySelectorAll(".exp-card");
        cards.forEach((card, idx) => {
            card.classList.add("opacity-0", "translate-y-8");
            setTimeout(() => {
                card.classList.remove("opacity-0", "translate-y-8");
                card.classList.add("animate-exp-fade");
            }, 300 + idx * 300);
        });
    }, []);

    return (
        <section className="my-12" ref={sectionRef}>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-10 flex flex-col md:flex-row items-center gap-8 animate-fade-in">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-extrabold text-purple-700 mb-2">{aboutMe.name}</h2>
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">{aboutMe.title}</h3>
                    <p className="text-gray-700 text-lg">{aboutMe.description}</p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src="https://avatars.githubusercontent.com/u/ROHITMAGDUM2?v=4"
                        alt="Rohit Magdum"
                        className="w-32 h-32 rounded-full shadow-lg border-4 border-purple-400 object-cover"
                        onError={e => (e.currentTarget.src = "https://ui-avatars.com/api/?name=Rohit+Magdum&background=purple&color=fff")}
                    />
                </div>
            </div>
            <h2 className="text-2xl font-semibold mb-8 text-center">Experience</h2>
            <div className="relative max-w-2xl mx-auto">
                <div className="border-l-4 border-purple-400 pl-6">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="exp-card mb-10 bg-white rounded-xl shadow-lg p-6 relative transition-all duration-700"
                        >
                            <div className="absolute -left-8 top-6 w-6 h-6 bg-purple-400 rounded-full border-4 border-white shadow" />
                            <h3 className="text-xl font-bold text-purple-700 mb-1">{exp.role}</h3>
                            <span className="text-gray-600 font-medium">{exp.company}</span>
                            <span className="block text-sm text-gray-400 mb-3">{exp.period}</span>
                            <ul className="list-disc ml-6 text-gray-700 space-y-1">
                                {exp.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}