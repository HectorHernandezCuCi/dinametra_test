import Link from "next/link";
import { Rocket, Github, Linkedin, Mail, ExternalLink, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navigation = {
    explore: [
      { name: "Asteroids", href: "/asteroids" },
      { name: "DONKI", href: "/donki" },
      { name: "Gallery", href: "/gallery" },
    ],
    resources: [
      { name: "NASA API Docs", href: "https://api.nasa.gov", external: true },
      { name: "About Project", href: "/about" },
    ],
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/HectorHernandezCuCi", color: "hover:text-white" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/h%C3%A9ctor-alfredo-hern%C3%A1ndez-trujillo-76734b334/", color: "hover:text-blue-400" },
    { name: "Email", icon: Mail, href: "mailto:hectoralfredohernandeztrujillo@gmail.com", color: "hover:text-[#ff6a00]" }
  ];

  return (
    <footer className="relative bg-black border-t border-gray-900">
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#ff6a00] hover:bg-[#ff8533] text-white p-3 rounded-full shadow-lg shadow-[#ff6a00]/30 hover:shadow-[#ff6a00]/50 transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#ff6a00] to-[#ff8533] rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">NASA Explorer</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Explore the cosmos through NASA&apos;s open APIs. Access real-time space data, stunning imagery, and track celestial events.
            </p>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:scale-110`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-3">
              {navigation.explore.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#ff6a00] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#ff6a00] transition-all duration-200"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#ff6a00] transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-[#ff6a00] transition-all duration-200"></span>
                      {item.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-[#ff6a00] transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-[#ff6a00] transition-all duration-200"></span>
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm text-center md:text-left">
            © 2025 Hector Alfredo Hernandez Trujillo. Built with data from{" "}
            <a
              href="https://api.nasa.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff6a00] hover:text-[#ff8533] transition-colors"
            >
              NASA Open APIs
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Made with</span>
            <span className="text-red-500 animate-pulse">♥</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff6a00]/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;