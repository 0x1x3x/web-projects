const AlbumItem = ({ name, desc, image, href }) => {
  return (
    <>
      <div class="mb-3 z-10">
        <a href={href}>
          <img src={image} alt={name} width={300} />
          <h3 class="pt-3 font-medium">{name}</h3>
          <p>{desc}</p>
        </a>
      </div>
    </>
  );
};

export default AlbumItem;
