import ReactImageMagnify from "react-image-magnify";

const KCH006 = () => {
  const coverImage = "/img/albums/torno.jpg";
  return (
    <section class="content-container">
      <div class="flex justify-between items-center flex-wrap mx-10 pt-[80px] lg:flex-nowrap">
        <div class="md:mb-0 hidden lg:block lg:max-w-[500px]">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Belka",
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
          <img src={coverImage} alt="Belka" />
        </div>

        <div class="lg:w-[70%] lg:pl-[209px] md:pb-4 z-50">
          <h2 class="font-medium pt-2">Kirill Torno</h2>
          <p>Belka [KCH006]</p>
          <p class="text-justify py-5 lg:mr-[150px]">
            In the sixth releas on Koche Records, producer Kirill Torno,
            presents his EP Belka. Strong hypnotic rhythm and deep details
            completely immerse you in the tracks. This longplay contains 4
            tracks that will take you on a journey through deep rhythms on the
            verge of minimal, dub and techno music.
          </p>
          <div className="bandcamp-player">
            <iframe
              title="ttt"
              class="w-full border-0"
              height={120}
              src="https://bandcamp.com/EmbeddedPlayer/album=1476825714/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/transparent=true/"
              seamless
            >
              <a href="https://kocherecords.bandcamp.com/album/belka">
                Belka by Kirill Torno
              </a>
            </iframe>
          </div>
          <div class="py-4 lg:pt-[70px]">
            <div>
              Listen on{" "}
              <a
                href="https://soundcloud.com/kocherecords/sets/kirill-torno-belka-kch006"
                class="hover-underline-animation"
              >
                SoundCloud
              </a>
            </div>
            <div>
              Buy on{" "}
              <a
                href="https://www.beatport.com/release/belka/3689028"
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

export default KCH006;
