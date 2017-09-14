import React from 'react';

export default function MenuItemComponent({ item, onAddItem }) {
  function handleClick(event) {
    event.preventDefault();
    onAddItem(item.id);
  }

  if (!item) return <h4>'No Items Available'</h4>;
  return (
    <div className="card MenuItemComponent">
      <div className="card-image">
        <img src={item.imagePath} alt={item.name} />
      </div>
      <div className="card-content">
        <h5 className="card-title">
          {item.name || 'N/A'}
        </h5>
        <p>
          {item.price && typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : 'N/A'}
        </p>
      </div>
      <div className="card-action">
        <a className="chooseItem" onClick={handleClick} type="button">
          ADD TO ORDER!
        </a>
      </div>
    </div>
  );
}
