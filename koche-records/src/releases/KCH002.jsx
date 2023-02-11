const KCH002 = () => {
  const imgContEl = document.querySelector(".img-container");
  const imgEl = document.querySelector(".img-container img");
  const ZOOM = 300;

  imgContEl.addEventListener("mouseenter", function () {
    imgEl.style.width = ZOOM + "%";
  });

  imgContEl.addEventListener("mouseleave", function () {
    imgEl.style.width = "100%";
  });

  return (
    <section>
      <div class="flex justify-between items-center flex-wrap md:flex-nowrap mx-10 md:pt-[70px]">
        <div class="container">
          <div class="mb-4 md:mb-0 img-container">
            <img src="/img/albums/canteloop.jpg" alt="" />
          </div>
        </div>

        <div class="md:pl-[209px]">
          <h2 class="font-medium">Canteloop</h2>
          <p>Fake Boundaries [KCH002]</p>
          <p class="text-justify py-5 md:pr-[150px]">
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
          <div class="md:pt-[70px] my-4 md:my-0">
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

// image zoom

// image zoom

export default KCH002;
