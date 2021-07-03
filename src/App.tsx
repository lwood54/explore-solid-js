import { Component, createSignal } from "solid-js";
import styles from "./App.module.css";
import MyComponent from "./components/my-component";
import ToDo from "./components/todo";

enum demo {
  ONE,
  TWO,
  THREE,
}
const App: Component = () => {
  const [demoNum, setDemoNum] = createSignal(demo.TWO);
  return (
    <div class={styles.App}>
      <select
        name="demo"
        id="demo"
        onChange={(e) => setDemoNum(parseInt(e.currentTarget.value))}
      >
        <option value={demo.ONE}>Basic</option>
        <option value={demo.TWO}>To Do List</option>
        <option value={demo.THREE}>Demo 3</option>
      </select>
      {demoNum() === demo.ONE && <MyComponent name="Logan" />}
      {demoNum() === demo.TWO && <ToDo />}
      <br />
      <br />
    </div>
  );
};

export default App;
