import AlbumItem from "../components/AlbumItem";
import { albums } from "../data/albumsData";

const Releases = () => {
  return (
    <section class="content-container pt-[100px] lg:pt-2 lg:pb-10">
      <div class="flex justify-between content-center items-center mx-10 mb-8 flex-wrap gap-y-7 lg:gap-x-52">
        {albums.map((album) => (
          <AlbumItem key={album.desc} {...album} />
        ))}
      </div>
    </section>
  );
};

export default Releases;
