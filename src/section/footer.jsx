import { Copyright } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer-container flex flex-col items-center justify-center py-5 mt-10 bg-gray-900 border-t border-gray-700">
            <div className="flex flex-col items-center gap-2">
                <p className="text-gray-400 font-medium">
                    Made with ❤️ and <span className="text-blue-500 font-bold">{'</>'}</span> by
                    <a href="https://github.com/suvam-dev" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors ml-1">
                        Suvam-dev
                    </a>
                </p>
                <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Copyright size={14} />
                    <span>2026 Suvam Ghosh. All rights reserved.</span>
                </div>
            </div>
        </footer >
    );
}