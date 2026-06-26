"use client"
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t-4 border-gold/25 text-parchment py-12"
      style={{ background: "linear-gradient(180deg, #1c1712 0%, #0e0b08 100%)" }}
    >
      {/* Gate rivets */}
      <div className="absolute top-1.5 left-0 right-0 flex justify-between px-6 sm:px-10">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-gold/40" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-parchment">
              Nusrat Jahan Jerin
            </h3>
            <p className="text-parchment-dim leading-relaxed">
              Undergrad Software Engineering student passionate about creating innovative
              solutions, building great digital experiences, and understanding the human
              side of the systems we build.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-label text-sm tracking-wide uppercase text-gold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Problem Solving', href: '#problem-solving' },
                { name: 'Research', href: '#research' },
                { name: 'About', href: '#about' },
                { name: 'Achievements', href: '#achievements' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-parchment-dim hover:text-gold transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-label text-sm tracking-wide uppercase text-gold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:jerinusrat001@gmail.com"
                className="flex items-center gap-3 text-parchment-dim hover:text-gold transition-colors"
              >
                <Mail size={18} />
                jerinusrat001@gmail.com
              </a>
              <div className="flex gap-4 mt-4">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com/nairobi-j" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nairobi-nusrat/" },
                  { icon: Twitter, label: "X", href: "https://x.com/n_xery" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-ink-soft border border-gold/20 rounded-full flex items-center justify-center hover:bg-crimson hover:border-crimson transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/15 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-parchment-dim text-sm">
            © {currentYear} Jerin. All rights reserved.
          </p>
          <p className="text-parchment-dim text-sm flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart size={16} className="text-crimson-bright" /> and lots of Teaaaaaaaa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
