import ReactImageMagnify from "react-image-magnify";

const KCH005 = () => {
  const coverImage = "/img/albums/fourm.jpg";
  return (
    <section>
      <div class="flex justify-between items-center flex-wrap mx-10 lg:pt-[70px] lg:flex-nowrap ">
        <div class="md:mb-0 hidden lg:block">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Satellites ",
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
          <img src={coverImage} alt="Satellites " class="image" />
        </div>

        <div class="lg:pl-[209px] md:pb-4 z-50">
          <h2 class="font-medium pt-2">FOURM</h2>
          <p>Satellites [KCH005]</p>
          <p class="text-justify py-5 lg:mr-[150px]">
            Koche Records is happy to announce the fifth release by FOURM. FOURM
            is a project by Simon Vince - U.K based electronic producer & visual
            artist. Deep sounds of these tracks provide listeners to the space,
            truly the aesthetics of classic Minimal and Deeptech sounds open a
            mind for a new sophistic universe.
          </p>
          <div className="bandcamp-player">
            <iframe
              title="ttt"
              class="w-full border-0"
              height={120}
              src="https://bandcamp.com/EmbeddedPlayer/album=4259612428/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/transparent=true/"
              seamless
            >
              <a href="https://kocherecords.bandcamp.com/album/satellites">
                Satellites by FOURM
              </a>
            </iframe>
          </div>
          <div class="py-4 lg:pt-[70px]">
            <div>
              Listen on{" "}
              <a
                href="https://soundcloud.com/kocherecords/sets/fourm-satellites-kch005"
                class="hover-underline-animation"
              >
                SoundCloud
              </a>
            </div>
            <div>
              Buy on{" "}
              <a
                href="www.beatport.com/release/satellites/3662154"
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

export default KCH005;
