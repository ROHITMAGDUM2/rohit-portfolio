const Header = () => (
    <header className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 py-6 shadow-lg">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
            <div className="flex flex-col items-center md:items-start">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow mb-1">Rohit Magdum</h1>
                <span className="text-lg md:text-xl text-white/80 font-medium">Software Developer</span>
            </div>
            <nav className="flex gap-3 mt-4 md:mt-0">
                <a
                    href="mailto:rohitmagdum2@gmail.com"
                    className="px-4 py-2 bg-white text-purple-600 rounded-full font-semibold shadow hover:bg-purple-100 transition"
                >
                    Email
                </a>
                <a
                    href="https://www.linkedin.com/in/rohitmagdum2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-blue-600 rounded-full font-semibold shadow hover:bg-blue-100 transition"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/ROHITMAGDUM2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-gray-900 rounded-full font-semibold shadow hover:bg-gray-100 transition"
                >
                    GitHub
                </a>
                <a
                    href="https://www.hackerrank.com/rohitmagdum2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-green-600 rounded-full font-semibold shadow hover:bg-green-100 transition"
                >

                    HackerRank
                </a>
            </nav>
        </div>
    </header>
);

export default Header;