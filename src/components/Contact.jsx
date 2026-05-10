import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-dark text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-primary mb-10">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">

          <a
            href="mailto:vinu.prakash050@gmail.com"
            className="flex items-center gap-3 glass p-4 rounded-2xl border border-white/10 hover:border-primary/40 transition group"
          >
            <FaEnvelope className="text-primary text-xl flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-gray-300 group-hover:text-white text-sm break-all">vinu.prakash050@gmail.com</span>
          </a>

          <a
            href="tel:+919994292890"
            className="flex items-center gap-3 glass p-4 rounded-2xl border border-white/10 hover:border-primary/40 transition group"
          >
            <FaPhone className="text-primary text-xl flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-gray-300 group-hover:text-white text-sm">+91 9994292890</span>
          </a>

          <div className="flex items-center gap-3 glass p-4 rounded-2xl border border-white/10">
            <FaMapMarkerAlt className="text-primary text-xl flex-shrink-0" />
            <span className="text-gray-300 text-sm">Hyderabad, Telangana, India</span>
          </div>

          <a
            href="https://github.com/vinuprakash050"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 glass p-4 rounded-2xl border border-white/10 hover:border-primary/40 transition group"
          >
            <FaGithub className="text-primary text-xl flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-gray-300 group-hover:text-white text-sm">github.com/vinuprakash050</span>
          </a>

        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-block px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:scale-105 transition mb-8"
        >
          Download Resume
        </a>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/vinu-prakash-2919201b1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/vinuprakash050"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
        </div>

        <p className="text-gray-400 max-w-xl mx-auto mt-6">
          Open to full-stack engineering opportunities and collaborations.
          Feel free to reach out via email or LinkedIn.
        </p>

      </div>
    </section>
  );
}
