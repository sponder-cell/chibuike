import { CiHome } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { RiGithubLine } from "react-icons/ri";
import { IoDocumentOutline } from "react-icons/io5";
import { GoDot } from "react-icons/go";

import { PiDotOutlineDuotone } from "react-icons/pi";
import { FaUpRightFromSquare } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';


// import required modules
import { FreeMode } from 'swiper/modules';

import "./App.css";

function App() {

  return (
    <>

    <nav>
      <ul>
        <li><a href=""><CiHome className="nav-icon" /></a></li>
        <li><a href=""><FaXTwitter className="nav-icon" /></a></li>
        <li><a href=""><RiGithubLine className="nav-icon" /></a></li>
        <li><a href=""><IoDocumentOutline className="nav-icon last" /></a></li>
      </ul>
    </nav>

    <section id="home">
      <div className="home">
      <div className="avatar">
        <img className="avatar-img" src="avatar.jpg" alt="" />
      </div>

      <div className="intro">
        <h1 className="home-intro">Hey, I'm Chukwuwetalu Chibuike. <br /> Website Developer</h1>
        <p>Creating innovative solutions and captivating designs.
University student by day, visionary creator by night.</p>


      </div>

      <div className="button">
        <div className="home-button">
          <button className="hire">Hire Me!</button>
        </div>

        <div className="availability">
      <span className="glow-dot"></span>
      <span className="status-text">I’m available for new projects</span>
    </div>
      </div>

      </div>
    </section>

    <section id="project-overview">
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
         autoplay={{
    delay: 1000,          // time between slides (ms)
    disableOnInteraction: false,
  }}
  speed={300}             // transition speed (ms)
  loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="overview-div">
             <span className="pin-dot"></span>
          <img src="center-img.png" alt="" className="overview-img" />
          <GoDot classroom = "dots"/>   

          </div>

       </SwiperSlide>

        <SwiperSlide>
          <div className="overview-div">
                         <span className="pin-dot"></span>

          <img src="barbershop-img.png" alt="" className="overview-img" />
          </div>
          </SwiperSlide>

        <SwiperSlide>
          <div className="overview-div">
                         <span className="pin-dot"></span>

          <img src="gym-img.png" alt="" className="overview-img" />
          </div>
          </SwiperSlide>

        <SwiperSlide>
          <div className="overview-div">
                         <span className="pin-dot"></span>

          <img src="cleaning-img.png" alt="" className="overview-img" />
          </div>
          </SwiperSlide>

        <SwiperSlide>
          <div className="overview-div">
                         <span className="pin-dot"></span>

          <img src="beauty-img.png" alt="" className="overview-img" />
          </div>
          </SwiperSlide>
      </Swiper>

    </section>

    <section id="about">
      <div className="about">
        <div className="about-intro">
          <h3>About Me</h3>
        </div>

        <div className="about-text">
          <p>I’m Chukwuwetalu Prayer Chibuike, a Front-End Developer with a strong passion for building clean, responsive, and user-focused websites. I enjoy transforming ideas and designs into functional web experiences that not only look good but also perform efficiently across all devices.
            <br /><br />

I specialize in front-end development using modern technologies such as HTML, CSS, JavaScript, and React, with a focus on writing clean, maintainable code and creating intuitive user interfaces. My approach combines good design principles with performance and accessibility, ensuring that every website I build is fast, reliable, and easy to use.
            <br />
            <br />

Alongside my work as a developer, I am currently a Medical Laboratory Science student, a background that has strengthened my attention to detail, problem-solving ability, and discipline. Balancing both fields has taught me how to manage time effectively, learn quickly, and adapt to new challenges—skills that I bring into every project I work on.
            <br />
            <br />

I have worked on various website projects for businesses, organizations, and personal brands, helping them establish a strong and professional online presence. From simple landing pages to full business websites, I focus on understanding each client’s goals and delivering solutions that align with their vision and brand identity.
            <br />
            <br />

I am constantly learning and improving my skills, exploring new tools, and keeping up with modern web development trends. My goal is to grow as a developer, collaborate with forward-thinking teams and clients, and build digital products that solve real problems and create meaningful user experiences.</p>
        </div>

        <div className="myself-img">
          <img src="me.jpg" alt="" />
        </div>
      </div>

    </section>

    <section id="projects">
      <div className="projects-intro">
        <h3>Here's What I Have Been Up To</h3>
      </div>

      <div className="project-grid">
        <div className="project-card">
          <div className="project-img">
            <img src="https://p56.f1.n0.cdn.zight.com/items/p9um44Xw/37feff35-bf71-4c28-8986-dae59f45f2e6.png?source=viewer&v=b0870fd5c80661f5ca12e97bf75311c7" alt="" />
          </div>
          <div className="description">
            <h4>NGO Website</h4>
            <p>A purpose-driven website designed to showcase the organization’s mission, programs, and impact while making it easy for supporters to learn, donate, and get involved.</p>
            <div className="project-button">
              <button>View Project <FaUpRightFromSquare className="arrow"/></button>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img">
            <img src="gym-img.png" alt="" />
          </div>
          <div className="description">
            <h4>Gym Website</h4>
            <p>A modern and responsive gym website designed to showcase fitness programs, trainers, and membership plans with strong calls-to-action.</p>
            <div className="project-button">
              <button>View Project <FaUpRightFromSquare className="arrow" /></button>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img">
            <img src="center-img.png" alt="" />
          </div>
          <div className="description">
            <h4>Clinic Website</h4>
            <p>A clean and informative clinic website built to present medical services, doctors, and appointment information with clarity and trust.</p>
            <div className="project-button">
              <button>View Project <FaUpRightFromSquare className="arrow" /></button>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img">
            <img src="cleaning-img.png" alt="" />
          </div>
          <div className="description">
            <h4>Cleaning Company Website</h4>
            <p>A professional website built to highlight cleaning services, pricing, and easy contact options for residential and commercial clients.</p>
            <div className="project-button">
              <button>View Project <FaUpRightFromSquare className="arrow"/></button>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img">
            <img src="beauty-img.png" alt="" />
          </div>
          <div className="description">
            <h4>Spa Website</h4>
            <p>An elegant and calming website designed to present spa services, packages, and booking information in a visually soothing layout.</p>
            <div className="project-button">
              <button>View Project <FaUpRightFromSquare className="arrow"/></button>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img">
            <img src="barbershop-img.png" alt="" />
          </div>
          <div className="description">
            <h4>Barbershop Website</h4>
            <p>A stylish barbershop website showcasing services, pricing, gallery, and booking details with a bold and modern design.</p>
            <div className="project-button">
              <button>View Project <FaUpRightFromSquare className="arrow"/></button>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="contact">
      <div className="contact-intro">
      <h3>Get In Touch</h3>
      <p>Feel free to reach out if you have a project in mind, need a website, or want to collaborate. I’m always open to new opportunities and happy to discuss ideas, answer questions, or help bring your vision to life. Let’s work together to create something impactful.</p>

      </div>

      <div className="form">
        <form action="">
          <div className="name-email">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" name="" id="" />
          </div>

          <textarea placeholder="Message" name="" id="" rows="10"></textarea>

          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    </section>
    <div className="dash"></div>

    <section id="footer">
      <p>Copyright © 2026 Chukwuwetalu Chibuike. </p>

      <div className="footer-links">
        <CiHome className="footer-icon" />
        <FaXTwitter className="footer-icon" />
        <RiGithubLine className="footer-icon" />
        <IoDocumentOutline className="footer-icon" />
      </div>
    </section>

    </>
  )
}

export default App
