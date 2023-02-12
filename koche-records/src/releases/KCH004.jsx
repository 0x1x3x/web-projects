import ReactImageMagnify from "react-image-magnify";

const KCH004 = () => {
  const coverImage = "/img/albums/dreimal-t.jpg";
  return (
    <section>
      <div class="flex justify-between items-center flex-wrap mx-10 lg:pt-[70px] lg:flex-nowrap ">
        <div class="md:mb-0 hidden lg:block">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Ambient Works",
                isFluidWidth: true,
                src: coverImage,
              },
              largeImage: {
                src: coverImage,
                width: 1200,
                height: 1200,
              },
            }}
          />
        </div>
        <div class="mb-4 lg:hidden">
          <img src={coverImage} alt="Ambient Works" class="image" />
        </div>

        <div class="lg:pl-[209px]">
          <h2 class="font-medium">Dreimal T</h2>
          <p>Ambient Works [KCH003]</p>
          <p class="text-justify py-5 lg:mr-[150px]">
            In the third release on Koche Records, Dreimal T delivers us his
            atmospheric and very detailed music in EP, called Ambient Works.
            Dreimal-T, is an alias of Tom-Tino Teichmann, German based dj and
            sound producer, focused on very deep and detailed sounds, he always
            searching for the new ways to deserve his music higher and higher.
          </p>
          <div className="bandcamp-player">
            <iframe
              title="ttt"
              class="w-full border-0"
              height={120}
              src="https://bandcamp.com/EmbeddedPlayer/album=1479455371/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/transparent=true/"
              seamless
            >
              <a href="https://kocherecords.bandcamp.com/album/ambient-works">
                Ambient Works by Dreimal T
              </a>
            </iframe>
          </div>
          <div class="lg:my-0 lg:pt-[70px]">
            <div>
              Listen on{" "}
              <a
                href="https://soundcloud.com/kocherecords/sets/dreimal-t-ambient-works-kch003"
                class="hover-underline-animation"
              >
                SoundCloud
              </a>
            </div>
            <div>
              Buy on{" "}
              <a
                href="https://www.beatport.com/release/ambient-works/3548469"
                class="hover-underline-animation"
              >
                Beatport
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KCH004;
