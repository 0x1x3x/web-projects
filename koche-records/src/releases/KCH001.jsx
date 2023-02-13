import ReactImageMagnify from "react-image-magnify";

const KCH001 = () => {
  const coverImage = "/img/albums/eugene-schieffer.jpg";
  return (
    <section>
      <div class="flex justify-between items-center flex-wrap mx-10 lg:pt-[70px] lg:flex-nowrap ">
        <div class="md:mb-0 hidden lg:block">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Funny Grass and Sad Kids",
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
          <img src={coverImage} alt="Funny Grass and Sad Kids" class="image" />
        </div>

        <div class="lg:pl-[209px] md:pb-4 z-50">
          <h2 class="font-medium pt-2">Eugene Schieffer</h2>
          <p>Funny Grass and Sad Kids [KCH001]</p>
          <p class="text-justify py-5 lg:mr-[150px]">
            Carefully mixed together three beautiful tracks is now complete with
            Eugene Schieffer debut EP for first release on Köche Records. Eugene
            Schieffer discover a full detailed, panoramic, deep and eclectic
            sound from scratch. Crispy percussions and also little sounds take
            us to the basics of micro house.
          </p>
          <div className="bandcamp-player">
            <iframe
              title="ttt"
              class="w-full border-0"
              height={120}
              src="https://bandcamp.com/EmbeddedPlayer/album=2991225309/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/track=3241070095/transparent=true/"
              seamless
            >
              <a href="https://eugeneschieffer.bandcamp.com/album/funny-grass-and-sad-kids">
                Funny Grass and Sad Kids by Eugene Schieffer
              </a>
            </iframe>
          </div>
          <div class="py-4 lg:pt-[70px]">
            <div>
              Listen on{" "}
              <a
                href="https://soundcloud.com/kocherecords/sets/eugene-schieffer-funny-grass"
                class="hover-underline-animation"
              >
                SoundCloud
              </a>
            </div>
            <div>
              Buy on{" "}
              <a
                href="https://www.beatport.com/release/funny-grass-and-sad-kids/3108130"
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

export default KCH001;
