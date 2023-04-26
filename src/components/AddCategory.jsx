import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onAddCategory }) => {
  const [inputCategory, setInputCategory] = useState("");

  const onChangeCategory = ({ target }) => {
    setInputCategory(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newCategory = inputCategory.trim();

    if (newCategory.length <= 1) return;
    onAddCategory(newCategory);
    setInputCategory("");
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs..."
        onChange={onChangeCategory}
        value={inputCategory}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};
