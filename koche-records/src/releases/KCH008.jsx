import ReactImageMagnify from "react-image-magnify";

const KCH008 = () => {
  const coverImage = "/img/albums/roux.jpg";
  return (
    <section class="content-container">
      <div class="flex justify-between items-center flex-wrap mx-10 pt-[80px] lg:flex-nowrap">
        <div class="md:mb-0 hidden lg:block lg:max-w-[500px] ">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Beneath The Reef",
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
        <div class="mb-4 lg:hidden ">
          <img src={coverImage} alt="Beneath the Reef" />
        </div>

        <div class="lg:w-[70%] lg:pl-[209px] md:pb-4 z-50">
          <h2 class="font-medium pt-2">Roux</h2>
          <p>Beneath The Reef [KCH008]</p>
          <p class="text-justify py-5 lg:mr-[150px]">
            Koche Records presents the new EP «Beneath the Reef» by ROUX . This
            EP includes 3 beautiful energy-driven tracks and a superb remix by
            our label co-owner Christine Schieffer.
          </p>
          <div className="bandcamp-player">
            <iframe
              title="ttt"
              class="w-full border-0"
              height={120}
              src="https://bandcamp.com/EmbeddedPlayer/album=3866481969/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/transparent=true/"
              seamless
            >
              <a href="https://kocherecords.bandcamp.com/album/beneath-the-reef">
                Beneath The Reef by Roux
              </a>
            </iframe>
          </div>
          <div class="py-4 lg:pt-[70px]">
            <div>
              Listen on{" "}
              <a
                href="https://soundcloud.com/kocherecords/sets/roux-beneath-the-reef-kch008"
                class="hover-underline-animation"
              >
                SoundCloud
              </a>
            </div>
            <div>
              Buy on{" "}
              <a
                href="https://www.beatport.com/release/beneath-the-reef/4031292"
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

export default KCH008;
