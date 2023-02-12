import ReactImageMagnify from "react-image-magnify";

const KCH002 = () => {
  const coverImage = "/img/albums/canteloop.jpg";
  return (
    <section>
      <div class="flex justify-between items-center flex-wrap mx-10 lg:pt-[70px] lg:flex-nowrap ">
        <div class="md:mb-0 hidden lg:block">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Fake Boundaries",
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
          <img src={coverImage} alt="Fake Boundaries" class="image" />
        </div>

        <div class="lg:pl-[209px]">
          <h2 class="font-medium">Canteloop</h2>
          <p>Fake Boundaries [KCH002]</p>
          <p class="text-justify py-5 lg:mr-[150px]">
            In the second release on Koche records we will present a
            great-detailed and deep sounds from Cantheloop - Fake Boundaries EP.
            Cantheloop is Miroslav Tanev, Berlin based sound producer and dj. In
            his music Cantheloop takes us on a long journey into a deep,
            intelligent and awesome universe of his own style.
          </p>
          <div className="bandcamp-player">
            <iframe
              title="ttt"
              class="w-full border-0"
              height={120}
              src="https://bandcamp.com/EmbeddedPlayer/album=3614153839/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/transparent=true/"
              seamless
            >
              <a href="https://kocherecords.bandcamp.com/album/fake-boundaries">
                Fake Boundaries by Cantheloop
              </a>
            </iframe>
          </div>
          <div class="lg:my-0 lg:pt-[70px]">
            <div>
              Listen on{" "}
              <a
                href="https://soundcloud.com/kocherecords/sets/cantheloop-fake-boundaries-kch002"
                class="hover-underline-animation"
              >
                SoundCloud
              </a>
            </div>
            <div>
              Buy on{" "}
              <a
                href="https://www.beatport.com/release/fake-boundaries/3525737"
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

export default KCH002;
