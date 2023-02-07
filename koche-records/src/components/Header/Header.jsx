import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  // smooth scroll
  const anchors = document.querySelectorAll('a[href*="#"');
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const blockId = anchor.getAttribute("href").substring(1);
      document.getElementById(blockId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
  // smooth scroll
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header
      class="flex justify-between content-center px-10 py-10"
      height={150}
    >
      <a href="/">
        <img src="././logo.webp" width={100} alt="" />
      </a>

      <nav class="flex items-center md:pl-20" ref={navRef}>
        <a href="/music" title="music" class="hover-underline-animation ">
          music
        </a>
        <a
          href="/podcast"
          title="podcast"
          class="hover-underline-animation md:ml-5"
        >
          podcast
        </a>
        <a
          href="/events"
          title="events"
          class="hover-underline-animation md:ml-5"
        >
          events
        </a>
        <a
          href="/about"
          title="about"
          class="hover-underline-animation md:ml-5"
        >
          about
        </a>
        <a
          href="/contact"
          title="contact"
          class="hover-underline-animation md:ml-5"
        >
          contact
        </a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <div class="max-[800px]:hidden flex content-center flex-wrap flex-row">
        <a href="https://www.facebook.com/kocherecords">
          <i class="fa fa-facebook social-icon pl-5"></i>
        </a>
        <a href="https://instagram.com/kocherecords">
          <i class="fa fa-instagram social-icon pl-5"></i>
        </a>
        <a href="https://kocherecords.bandcamp.com">
          <i class="fa fa-bandcamp social-icon pl-5"></i>
        </a>
        <a href="https://soundcloud.com/kocherecords">
          <i class="fa fa-soundcloud social-icon pl-5"></i>
        </a>
        <a href="https://www.beatport.com/label/koche-records/89799">
          <img
            src="https://www.svgrepo.com/show/330041/beatport.svg"
            alt=""
            class="pl-5 pt-[3px]"
            width={37}
          />
        </a>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
