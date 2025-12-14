import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialButtons = () => {
  const socials = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <div className="flex gap-4">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="w-12 h-12 flex items-center justify-center border border-zinc-700 text-zinc-400 hover:border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          aria-label={social.label}
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialButtons;
