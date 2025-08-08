"use client"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jerinusrat001@gmail.com",
      link: "mailto:jerinusrat001@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "01533750217",
      link: "tel:+8801533750217"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "3rd Ladies Hall,Shahjalal University of Science & Technology, Sylhet",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", link: "https://github.com/nairobi-j" },
    { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/nairobi-nusrat/" },
    { icon: Twitter, label: "X", link: "@n_xery" }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project? Lets discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
         
          {/* Contact Form */}
        
        </div>
         <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Lets Connect</h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Im always excited to discuss new learning opportunities, collaborate on projects, 
              or connect with fellow students and professionals in the tech industry.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <info.icon className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="font-medium text-gray-900">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

      </div>
    </section>
  );
};

export default Contact;