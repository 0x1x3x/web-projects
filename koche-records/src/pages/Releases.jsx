import AlbumItem from "../components/AlbumItem";

const Releases = () => {
  const albums = [
    {
      name: "Kirill Torno",
      desc: "Belka [KCH006]",
      image: "/img/albums/torno.jpg",
      href: "/kch006",
    },
    {
      name: "FOURM",
      desc: "Satellites [KCH005]",
      image: "/img/albums/fourm.jpg",
      href: "/kch005",
    },
    {
      name: "Eugene Schieffer",
      desc: "Orchidea [KCH004]",
      image: "/img/albums/eugene-schieffer-2.jpg",
      href: "/kch004",
    },
    {
      name: "Dreimal T",
      desc: "Ambient Works [KCH003]",
      image: "/img/albums/dreimal-t.jpg",
      href: "/kch003",
    },
    {
      name: "Canteloop",
      desc: "Fake Boundaries [KCH002]",
      image: "/img/albums/canteloop.jpg",
      href: "/kch002",
    },
    {
      name: "Eugene Schieffer",
      desc: "Funny Grass And Sad Kids [KCH001]",
      image: "/img/albums/eugene-schieffer.jpg",
      href: "/kch001",
    },
  ];
  return (
    <section>
      <div class="flex justify-between items-center mx-10 mb-8 flex-wrap gap-y-7 lg:gap-x-52 pt-[80px] lg:pt-0">
        {albums.map((album) => (
          <AlbumItem key={album.name} {...album} />
        ))}
      </div>
    </section>
  );
};

export default Releases;
