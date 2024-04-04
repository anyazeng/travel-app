import React from "react";

export default function Stats({ items }) {
  //early return
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list! 🏖️</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  console.log(numItems);
  console.log(percentage);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everthing! Read to go ✈️"
          : `You have ${numItems} items in your list, and now you have packed ${numPacked} (${percentage} %).`}
      </em>
    </footer>
  );
}
