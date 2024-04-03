import React from "react";

export default function ListItem({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <span>{item.quantity}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
