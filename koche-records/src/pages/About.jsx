const About = () => {
  return (
    <section>
      <div class="flex justify-between items-center flex-wrap mx-10 pb-8 pt-[80px] lg:flex-nowrap lg:pt-10 ">
        <div class="mb-4 md:block lg:hidden">
          <img src="/img/about.jpg" alt="" class="image" />
        </div>
        <div class="z-10 text-justify mb-4 lg:w-[600px] lg:mr-10">
          <h1 class="pb-4">ABOUT</h1>
          <p class="pb-4">
            Koche Records was launched by{" "}
            <a
              class="hover-underline-animation"
              href="https://soundcloud.com/eugeneschieffer"
            >
              Eugene Schieffer
            </a>{" "}
            &{" "}
            <a
              class="hover-underline-animation"
              href="https://soundcloud.com/christineschieffer"
              alt=""
            >
              Christine Schieffer
            </a>{" "}
            in 2020 in Barcelona, Spain.{" "}
          </p>
          <p class="pb-4">
            The key direction of the label to this day is, to combine visual art
            and music through a minimalist and sophisticated-sounding prism of
            tracks from producers who release on the label and record guest
            mixes. At the beginning of the way, we wanted to make a recognizable
            style, for{" "}
            <a
              href="https://www.instagram.com/fernandobarriosbenavides/"
              class="hover-underline-animation"
            >
              Fernando Barrios Bennavides
            </a>
            , a talented artist from Madrid. Fernando creates great hand-drawn
            covers for our releases to enhance the sound with visuals.
          </p>
          <p class="pb-4">
            {" "}
            During this time Eugene Schieffer, Dreimal T, Canteloop, FOURM,
            Kirill Torno, Nicolas Barnes, Dr. Nojoke, and Tredbleu were released
            on the label. Podcasts were recorded by many famous producers and
            DJs such as Hari, Eraseland, Matthias Lindner, Basti Lorenz, and
            others.{" "}
          </p>
          <p class="pb-4">
            The label's events and parties will be announced soon, the radio
            will be launched and you will know the names of the first artists.
          </p>
          <p> The journey is just beginning.</p>
        </div>
        <div class="mb-4 md:hidden sm: hidden lg:block">
          <img src="/img/about.jpg" alt="" class="image" />
        </div>
      </div>
    </section>
  );
};

export default About;
