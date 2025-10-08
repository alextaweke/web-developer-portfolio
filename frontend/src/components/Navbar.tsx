import { Moon, Sun, FileText } from "lucide-react";

interface NavbarProps {
  name: string;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ name, darkMode, setDarkMode }) => (
  <nav className="fixed w-full bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-900 dark:to-gray-800 shadow-md z-20">
    <div className="container mx-auto px-6 flex justify-between items-center h-16">
      {/* Logo / Name */}
      <a href="#" className="text-xl font-bold text-white">
        {name}
      </a>

      {/* Menu */}
      <div className="flex items-center space-x-6">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white hover:text-yellow-300 transition"
          >
            {item}
          </a>
        ))}

        {/* Admin link */}
        <a
          href="/admin"
          className="text-white hover:text-yellow-300 transition font-semibold"
        >
          Admin
        </a>

        {/* Resume button */}
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-1 px-3 py-2 bg-yellow-400 text-black font-medium rounded-lg shadow hover:scale-105 transition"
        >
          <FileText size={18} /> Resume
        </a>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-blue-700 dark:hover:bg-gray-700"
        >
          {darkMode ? (
            <Sun className="text-yellow-400" />
          ) : (
            <Moon className="text-white" />
          )}
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
