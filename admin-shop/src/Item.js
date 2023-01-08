import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="item">
      <div className="ml-10">
        <h2 className="text-3xl font-bold">{info.name}</h2>
        <p>{info.desc}</p>
      </div>
      <div className="flex items-center mb-50">
        <button
          className="bg-[#fffff] text-black py-3.5 px-5 min-w-150 cursor-pointer mr-10 ml-10"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="item-total">{total ? total : ""}</h3>
        <button
          className="bg-[#fffff] text-black py-3.5 px-5 min-w-150 cursor-pointer mr-10 ml-10"
          onClick={handleAddClick}
        >
          +
        </button>
      </div>
    </div>
  );
}
