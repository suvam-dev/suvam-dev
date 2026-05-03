import { Copyright } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer-container flex flex-col items-center justify-center py-8 bg-[#050510] border-t border-cyan-900/30">
            <h1 className="text-gray-400 font-bold mb-4 text-md tracking-wider">
                Made with ❤️ and {`</>`} by <a href="https://github.com/suvam-dev" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-bold">suvam-dev</a>
            </h1>
            <div className="flex space-x-6 text-gray-500 mb-6">
                <a href="https://github.com/suvam1061" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/suvam-ghosh" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                    LinkedIn
                </a>
                <a href="mailto:suvam1061@gmail.com" className="hover:text-cyan-400 transition-colors">
                    Email
                </a>
            </div>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                <Copyright size={14} />
                <span>{new Date().getFullYear()} Suvam Ghosh. All rights reserved.</span>
            </div>
        </footer>
    );
}