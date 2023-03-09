import AlbumItem from "../components/AlbumItem";
import { albums } from "../data/albumsData";

const Releases = () => {
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
