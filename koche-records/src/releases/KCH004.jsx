import ReactImageMagnify from "react-image-magnify";

const KCH004 = () => {
  const coverImage = "/img/albums/eugene-schieffer-2.jpg";
  return (
    <section>
      <div class="flex justify-between items-center flex-wrap mx-10 lg:pt-[70px] lg:flex-nowrap ">
        <div class="md:mb-0 hidden lg:block">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Orchidea",
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
          <img src={coverImage} alt="Orchidea" class="image" />
        </div>

        <div class="lg:pl-[209px] md:pb-4 z-50">
          <h2 class="font-medium pt-2">Eugene Schieffer</h2>
          <p>Orchidea [KCH004]</p>
          <p class="text-justify py-5 lg:mr-[150px]">
            "Orchidea" includes two single tracks from Eugene with the strongest
            remixes by Nicolas Barnes and Dr. Nojoke. Orchidea is inspired by
            vocal, which one was chopped and was constructed in idea with
            Spanish notes. Easy is a late-night lonely streets atmosphere in it
            and brings street sound to the music.
          </p>
          <div className="bandcamp-player">
            <iframe
              title="ttt"
              class="w-full border-0"
              height={120}
              src="https://bandcamp.com/EmbeddedPlayer/album=2937187551/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/transparent=true/"
              seamless
            >
              <a href="https://kocherecords.bandcamp.com/album/orchidea">
                Orchidea by Eugene Schieffer, Nicolas Barnes, Dr.Nojoke
              </a>
            </iframe>
          </div>
          <div class="py-4 lg:pt-[70px]">
            <div>
              Listen on{" "}
              <a
                href="https://soundcloud.com/kocherecords/sets/eugene-schieffer-orchidea-kch004"
                class="hover-underline-animation"
              >
                SoundCloud
              </a>
            </div>
            <div>
              Buy on{" "}
              <a
                href="https://www.beatport.com/release/orchidea/3612066"
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
