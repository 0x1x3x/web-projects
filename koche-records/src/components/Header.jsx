import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header
        class="flex justify-between content-center px-9 py-5"
        height={150}
      >
        <Link to="/">
          <img src="./logo.webp" width={100} alt="" />
        </Link>
        <nav class="flex items-center lg:pl-20" ref={navRef}>
          <Link
            to="/"
            title="releases"
            class="hover-underline-animation onClick={showNavbar}"
            onClick={showNavbar}
          >
            releases
          </Link>
          <Link
            to="/podcasts"
            title="podcasts"
            class="hover-underline-animation lg:ml-5"
            onClick={showNavbar}
          >
            podcasts
          </Link>
          <Link
            to="/events"
            title="events"
            class="hover-underline-animation lg:ml-5"
            onClick={showNavbar}
          >
            events
          </Link>
          <Link
            to="/about"
            title="about"
            class="hover-underline-animation lg:ml-5"
            onClick={showNavbar}
          >
            about
          </Link>
          <a
            href="mailto:kocherecords@gmail.com"
            title="contact"
            class="hover-underline-animation lg:ml-5"
            onClick={showNavbar}
          >
            contact
          </a>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>

        <div class="max-[912px]:hidden flex content-center flex-wrap flex-row">
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
    </>
  );
};

export default Header;
