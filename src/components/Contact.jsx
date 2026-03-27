import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {

  return (

<section id="contact" className="py-20 bg-dark text-white">

      <div className="text-center">

        <h2 className="text-3xl font-bold text-primary mb-6">
          Contact Me
        </h2>
        <p className="text-gray-400">
          vinu.prakash050@gmail.com
        </p>
        <p className="text-gray-400 mt-2">
          +91 9994292890
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:scale-105 transition"
        >
        Resume
        </a>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://www.linkedin.com/in/vinu-prakash-2919201b1" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="hover:text-primary transition" />
          </a>
        </div>
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            I'm open to full-stack developer opportunities and collaborations.
            Feel free to reach out via email or LinkedIn.
          </p>
      </div>

    </section>

  );
}