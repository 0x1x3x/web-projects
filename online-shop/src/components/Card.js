function Card(props) {
  return (
    <div className="card">
      <div className="favourite">
        <img width={30} height={30} src="img/unliked.svg" alt="Unliked" />
      </div>
      <img width={330} src={props.imageUrl} alt="" />
      <p>Nike</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>{props.title}</span>
          <b>{props.price}.00€</b>
        </div>
        <button className="button">
          <img width={30} height={30} src="/img/add.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;
