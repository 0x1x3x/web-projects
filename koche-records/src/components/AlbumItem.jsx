import { Link } from "react-router-dom";

const AlbumItem = ({ name, desc, image, href }) => {
  return (
    <>
      <div class="mb-3 z-10">
        <Link to={href}>
          <img src={image} alt={name} width={300} />
          <h3 class="pt-3 font-medium">{name}</h3>
          <p>{desc}</p>
        </Link>
      </div>
    </>
  );
};

export default AlbumItem;
