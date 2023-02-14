const Footer = () => {
  const hands = {
    position: "relative",
    width: "100%",
    height: "300px",
    backgroundImage: "url('img/hands.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <footer class="w-full left-0 bottom-0 right-0 lg:absolute md:mt-[-200px]">
        <div style={hands} class="hidden md:block z-0"></div>
        <hr />
        <div class="flex justify-between content-center px-10 py-4 flex-col items-center text-center gap-5 md:flex-row md:text-left min-[768px]:text-xs lg:text-base">
          <div class="hidden md:block">
            <p>Barcelona</p>
            <p>Spain</p>
          </div>
          <div class="md:hidden">
            <p>Barcelona, Spain</p>
          </div>
          <div>
            <p>Demos:</p>
            <a
              href="mailto:kocherecords@gmail.com"
              class="hover-underline-animation"
            >
              <p>kocherecords@gmail.com</p>
            </a>
          </div>
          <div>
            <p>Art by:</p>
            <a
              href="https://www.fernandobarriosbenavides.com/"
              class="hover-underline-animation"
            >
              <p>Fernando Barrios Benavides</p>
            </a>
          </div>
          <div>
            <p>Web by:</p>
            <a
              href="https://behindthemeta.xyz"
              class="hover-underline-animation"
            >
              <p>Behind the Meta</p>
            </a>
          </div>
          <div class="text-right">
            <a href="https://soundcloud.com/kocherecords">
              <i class="fa fa-soundcloud"></i>
            </a>
            <a href="https://www.facebook.com/kocherecords">
              <i class="fa fa-facebook pl-5"></i>
            </a>
            <a href="https://open.spotify.com/playlist/2z5OZ40w3AwngbN3SEYBjN?si=80df77ec7e6e4d90">
              <i class="fa fa-spotify  pl-5"></i>
            </a>
            <a href="https://instagram.com/kocherecords">
              <i class="fa fa-instagram pl-5"></i>
            </a>
            <a href="https://kocherecords.bandcamp.com">
              <i class="fa fa-bandcamp pl-5"></i>
            </a>
            <a href="https://www.beatport.com/label/koche-records/89799">
              <i class="fa fa-headphones social-icon pl-5"></i>
            </a>
            <p class="text-xs">© 2023 Koche Records. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
