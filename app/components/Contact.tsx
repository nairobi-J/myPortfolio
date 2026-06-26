"use client"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { FlareTrail } from './Motifs';

const contactInfo = [
  {
    icon: Mail,
    label: "Email · Standard Flare",
    value: "jerinusrat001@gmail.com",
    link: "mailto:jerinusrat001@gmail.com",
    color: "text-gold border-gold/30"
  },
  {
    icon: Phone,
    label: "Phone · Urgent Flare",
    value: "01533750217",
    link: "tel:+8801533750217",
    color: "text-crimson-bright border-crimson-bright/40"
  },
  {
    icon: MapPin,
    label: "Last Known Position",
    value: "3rd Ladies Hall, Shahjalal University of Science & Technology, Sylhet",
    link: "#",
    color: "text-parchment border-corps-green/60"
  }
];

const socialLinks = [
  { icon: Github, label: "GitHub", link: "https://github.com/nairobi-j" },
  { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/nairobi-nusrat/" },
  { icon: Twitter, label: "X", link: "https://x.com/n_xery" }
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-ink-soft corps-texture relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="Signal HQ"
          title={<>Fire A <span className="text-crimson-bright">Signal Flare</span></>}
          subtitle="Standard procedure for reaching command: send a flare, state your business, await response."
        />

        <Reveal className="max-w-2xl mx-auto relative">
          <FlareTrail className="hidden lg:block absolute -left-24 top-1/2 -translate-y-1/2 w-16 h-40 text-gold/40" />
          <FlareTrail className="hidden lg:block absolute -right-24 top-1/2 -translate-y-1/2 w-16 h-40 text-crimson-bright/40 scale-x-[-1]" />

          <div className="dossier-card rounded-sm p-8 md:p-10">
            <p className="text-lg text-parchment-dim mb-8 leading-relaxed">
              Im always excited to discuss new learning opportunities, collaborate on projects,
              or connect with fellow students and professionals in the tech industry.
            </p>

            <div className="space-y-5 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-3 rounded-sm hover:bg-gold/5 transition-colors group"
                >
                  <div className={`w-12 h-12 bg-ink rounded-full flex items-center justify-center border transition-colors ${info.color}`}>
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-parchment-dim font-label tracking-wide uppercase">{info.label}</p>
                    <p className="font-medium text-parchment">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="font-display text-xl font-bold text-parchment mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-ink border border-gold/25 rounded-full flex items-center justify-center text-parchment-dim hover:bg-crimson hover:text-parchment hover:border-crimson transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
