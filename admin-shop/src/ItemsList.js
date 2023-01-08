import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
    <ul className="shop">
      {props.items.map((item) => (
        <li key={item.id}>
          <Item info={item} />
          <button
            className="bg-[#fffff] text-black py-3.5 px-5 min-w-150 cursor-pointer mr-10 ml-10 shadow-black"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
