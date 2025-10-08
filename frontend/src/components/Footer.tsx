const Footer: React.FC<{
  data: { github: string; linkedin: string; email: string };
}> = ({ data }) => (
  <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-gray-900 dark:to-gray-800 text-white py-8">
    <div className="container mx-auto text-center">
      <p>
        &copy; {new Date().getFullYear()} Alemayehu Taweke — All Rights Reserved
      </p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href={data.github} className="hover:text-yellow-300">
          GitHub
        </a>
        <a href={data.linkedin} className="hover:text-yellow-300">
          LinkedIn
        </a>
        <a href={`mailto:${data.email}`} className="hover:text-yellow-300">
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
