const KCH001 = () => {
  return (
    <section>
      <div class="flex justify-between items-center flex-wrap md:flex-nowrap mx-10 md:pt-[70px]">
        <div class="mb-4 md:mb-0">
          <img src="/img/albums/eugene-schieffer.jpg" alt="" />
        </div>

        <div class="md:pl-[209px]">
          <h2 class="font-medium">Eugene Schieffer</h2>
          <p>Funny Grass and Sad Kids [KCH001]</p>
          <p class="text-justify py-5 md:pr-[150px]">
            Carefully mixed together three beautiful tracks is now complete with
            Eugene Schieffer debut EP for first release on Köche Records. Eugene
            Schieffer discover a full detailed, panoramic, deep and eclectic
            sound from scratch. Warm berlin-style patterns, crispy percussions
            and also little sounds take us to the basics of micro house.
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
          <div class="md:pt-[70px] my-4 md:my-0">
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
