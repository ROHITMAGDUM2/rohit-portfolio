const Footer = () => (
    <footer className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white py-10 mt-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center px-6 gap-8">
            <div className="flex-1 text-center">
                <h3 className="text-xl font-bold mb-2">Contact</h3>
                <p className="mb-2 text-white/90">
                    Email: <a href="mailto:rohitmagdum2@gmail.com" className="underline hover:text-pink-200">rohitmagdum2@gmail.com</a>
                </p>
                <div className="flex justify-center gap-4 mt-2">
                    <a href="https://www.linkedin.com/in/rohitmagdum2/" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-100 transition">LinkedIn</a>
                    <a href="https://github.com/ROHITMAGDUM2" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition">GitHub</a>
                </div>
            </div>
        </div>
        <div className="text-center mt-8 text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Rohit Magdum. All rights reserved.
        </div>
    </footer>
);

export default Footer;