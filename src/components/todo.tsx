import { createEffect, createSignal, For } from "solid-js";

const initialList = [
  "add Jest unit tests",
  "create Cypress tests",
  "refactor create broadcast",
  "change Studio to Solid JS",
];
const ToDo = () => {
  const [list, setList] = createSignal<string[]>(initialList);
  const [addItem, setAddItem] = createSignal("");

  const handleRemove = (e) => {
    const updatedList = list().filter((item, i) => i !== e.currentTarget.value);
    setList(updatedList);
  };

  return (
    <div>
      <div>
        <input type="text" oninput={(e) => setAddItem(e.currentTarget.value)} />
        <button onClick={() => setList((prev) => [...prev, addItem()])}>
          Add Item
        </button>
      </div>
      <ul>
        <h1>To Do List</h1>
        <For each={list()} fallback={<div>Removing...</div>}>
          {(item) => <li onClick={handleRemove}>{item}</li>}
        </For>
      </ul>
    </div>
  );
};

export default ToDo;
