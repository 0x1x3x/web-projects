import React from "react";

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div className="py-1 px-2.5">
        <label htmlFor="item-name">Название:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="py-3 px-2.5 rounded border-solid border-1 border-black text-base"
        />
      </div>
      <div className="py-1 px-2.5">
        <label htmlFor="item-description">Описание:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="py-3 px-2.5  text-base rounded border-solid border-1 border-black"
        />
      </div>
      <div className="py-3 px-2.5">
        <div className="validation">{props.valid}</div>
        <input
          type="submit"
          className="bg-[#0000ff] text-white py-3.5 px-5 min-w-150 rounded cursor-pointer shadow-indigo-500/50"
          value="Добавить"
        />
      </div>
    </form>
  );
}
