import AudioPlayer from "./AudioPlayer";

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
        <div class="relative flex justify-between px-10 py-4 flex-col items-center text-center gap-5 md:flex-row md:text-left min-[768px]:text-xs lg:text-base z-[100] bg-white">
          <div class="hidden lg:block">
            <div>
              <AudioPlayer />
            </div>
          </div>

          <div>
            <p>Demos:</p>
            <a
              href="mailto:hello@kocherecords.com"
              target="blank"
              class="hover-underline-animation"
            >
              <p>hello@kocherecords.com</p>
            </a>
          </div>
          <div>
            <p>Art by:</p>
            <a
              href="https://www.fernandobarriosbenavides.com/"
              target="blank"
              class="hover-underline-animation"
            >
              <p>Fernando Barrios Benavides</p>
            </a>
          </div>
          <div>
            <p>Web by:</p>
            <a
              href="https://behindthemeta.xyz"
              target="blank"
              class="hover-underline-animation"
            >
              <p>Behind the Meta</p>
            </a>
          </div>
          <div class="lg:text-right">
            <p class="text-xs">Barcelona, Spain </p>
            <p class="text-xs">© 2023 Koche Records. All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
