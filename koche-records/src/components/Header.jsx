import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import AudioPlayer from "./AudioPlayer";

const Header = () => {
  // nav
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header class="fixed lg:sticky">
        <div class="lg:hidden z-[10000]">
          <AudioPlayer />
        </div>
        <div class="lg:w-2/6">
          <Link to="/">
            <img
              src="./logo.webp"
              width={100}
              alt="Koche Logo"
              class="z-[10000]"
            />
          </Link>
        </div>

        <nav class="lg:w-2/6 text-center" ref={navRef}>
          <Link
            to="/"
            title="releases"
            class="hover-underline-animation"
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
            target="blank"
            title="contact"
            class="hover-underline-animation lg:ml-5"
            onClick={showNavbar}
          >
            contact
          </a>
          <div class="md:visible lg:hidden mt-[100px] flex flex-row">
            <a href="https://soundcloud.com/kocherecords" target="blank">
              <i class="fa fa-soundcloud"></i>
            </a>
            <a href="https://www.facebook.com/kocherecords" target="blank">
              <i class="fa fa-facebook pl-5"></i>
            </a>
            <a
              href="https://open.spotify.com/playlist/2z5OZ40w3AwngbN3SEYBjN?si=80df77ec7e6e4d90"
              target="blank"
            >
              <i class="fa fa-spotify  pl-5"></i>
            </a>
            <a href="https://instagram.com/kocherecords" target="blank">
              <i class="fa fa-instagram pl-5"></i>
            </a>
            <a href="https://kocherecords.bandcamp.com" target="blank">
              <i class="fa fa-bandcamp pl-5"></i>
            </a>

            <a
              href="https://www.beatport.com/label/koche-records/89799"
              target="blank"
            >
              <img
                src="https://www.svgrepo.com/show/330041/beatport.svg"
                alt=""
                class="pl-5 pt-[2px]"
                width={40}
              />
            </a>
          </div>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>

        <div class="max-[900px]:hidden lg:w-2/6 lg:text-right">
          <a href="https://soundcloud.com/kocherecords" target="blank">
            <i class="fa fa-soundcloud"></i>
          </a>
          <a href="https://www.facebook.com/kocherecords" target="blank">
            <i class="fa fa-facebook pl-5"></i>
          </a>
          <a
            href="https://open.spotify.com/playlist/2z5OZ40w3AwngbN3SEYBjN?si=80df77ec7e6e4d90"
            target="blank"
          >
            <i class="fa fa-spotify  pl-5"></i>
          </a>
          <a href="https://instagram.com/kocherecords" target="blank">
            <i class="fa fa-instagram pl-5"></i>
          </a>
          <a href="https://kocherecords.bandcamp.com" target="blank">
            <i class="fa fa-bandcamp pl-5"></i>
          </a>
          <a
            href="https://www.beatport.com/label/koche-records/89799"
            target="blank"
          >
            <i class="fa fa-headphones social-icon pl-5"></i>
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
