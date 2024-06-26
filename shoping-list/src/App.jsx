import { useState } from "react";
import "./App.css";

const initialItems = [
  { id: 1, name: "Milk", quantity: 2, price: 5.99, completed: false },
  { id: 2, name: "Bread", quantity: 1, price: 2.99, completed: true },
  { id: 3, name: "Eggs", quantity: 12, price: 3.99, completed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleIncreaseQuantity(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function handleDecreaseQuantity(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  }

  function handleToggleComplete(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <>
      <h1>Shopping List</h1>
      <div className="container">
        <AddItem onAddItem={handleAddItem} />
        <ItemsList
          items={items}
          onDelete={handleDelete}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
          onToggleComplete={handleToggleComplete}
        />
        <Total items={items} />
      </div>
    </>
  );
}

function ItemsList({
  items,
  onDelete,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onToggleComplete,
}) {
  return (
    <div className="items-container">
      {items.map((item) => (
        <Item
          item={item}
          key={item.id}
          onDelete={onDelete}
          onIncreaseQuantity={onIncreaseQuantity}
          onDecreaseQuantity={onDecreaseQuantity}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

function Item({
  item,
  onDelete,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onToggleComplete,
}) {
  return (
    item.quantity > 0 && (
      <div className={`item ${item.completed ? "completed" : ""}`}>
        <h1 onClick={() => onToggleComplete(item.id)}>{item.name}</h1>
        <p>
          <button onClick={() => onDecreaseQuantity(item.id)}>-</button>
          Quantity: {item.quantity}
          <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
        </p>
        <p>Unit Price: ${item.price.toFixed(2)}</p>
        <p className="subtotal">
          Subtotal: ${(item.price * item.quantity).toFixed(2)}
        </p>
        <div>
          <button className="delete-btn" onClick={() => onDelete(item.id)}>
            Delete
          </button>
          {!item.completed && (
            <button
              className="complete-btn"
              onClick={() => onToggleComplete(item.id)}
            >
              Complete
            </button>
          )}
        </div>
      </div>
    )
  );
}

function AddItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  function handleAdd(e) {
    e.preventDefault();

    const newItem = {
      id: Math.round(Math.random() * 100000),
      name,
      quantity: parseInt(quantity),
      price: parseFloat(price),
      completed: false,
    };

    onAddItem(newItem);

    setName("");
    setQuantity("");
    setPrice("");
  }

  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
      />
      <input
        type="text"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Enter quantity"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter unit price"
      />
      <button type="submit">Add</button>
    </form>
  );
}

function Total({ items }) {
  const totalCost = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const completedCost = items
    .filter((item) => item.completed)
    .reduce((total, item) => total + item.price * item.quantity, 0);

  const incompleteCost = items
    .filter((item) => !item.completed)
    .reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="total">
      {totalCost > 0 && <h2>Total Cost: ${totalCost.toFixed(2)}</h2>}
      {completedCost > 0 && (
        <h2>Completed Items Cost: ${completedCost.toFixed(2)}</h2>
      )}
      {incompleteCost > 0 && (
        <h2>Incomplete Items Cost: ${incompleteCost.toFixed(2)}</h2>
      )}
    </div>
  );
}

export default App;
