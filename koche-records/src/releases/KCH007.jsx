import ReactImageMagnify from "react-image-magnify";

const KCH007 = () => {
  const coverImage = "/img/albums/tredbleu.jpg";
  return (
    <section class="content-container">
      <div class="flex justify-between items-center flex-wrap mx-10 pt-[80px] lg:flex-nowrap">
        <div class="md:mb-0 hidden lg:block lg:max-w-[500px]">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Sinergia",
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
          <img src={coverImage} alt="Sinergia" />
        </div>

        <div class="lg:w-[70%] lg:pl-[209px] md:pb-4 z-50">
          <h2 class="font-medium pt-2">Tredbleu</h2>
          <p>Sinergia [KCH007A]</p>
          <p class="text-justify py-5 lg:mr-[150px]">
            Welcome Tredbleu to the Koche Records family with his outstanding EP
            called "Sinergia". This 3 tracks beyond deeptech and techno delivers
            deep side of the electronic music, sending on a space journey
            through the expanses of sounds.
          </p>
          <div className="bandcamp-player">
            <iframe
              title="ttt"
              class="w-full border-0"
              height={120}
              src="https://bandcamp.com/EmbeddedPlayer/album=3923927270/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/transparent=true/"
              seamless
            >
              <a href="https://kocherecords.bandcamp.com/album/sinergia">
                Sinergia by Tredbleu
              </a>
            </iframe>
          </div>
          <div class="py-4 lg:pt-[70px]">
            <div>
              Listen on{" "}
              <a
                href="https://soundcloud.com/kocherecords/sets/trendbleu-sinergia-kch007"
                class="hover-underline-animation"
              >
                SoundCloud
              </a>
            </div>
            <div>
              Buy on{" "}
              <a
                href="https://www.beatport.com/release/sinergia/3924008"
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

export default KCH007;
