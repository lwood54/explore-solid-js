import { createMemo, createSignal } from "solid-js";
import EffectComponent from "./effect-component";

const BasicComp = (props: {age?: number}) => {
  // const value = props.age || 25; // DOES NOT WORK because components only render once, unless told to track
  // 1. can directly put props.age || 25 in JSX dome node
  // 2. below, return it from a function
  const value = () => props.age || 25; // wrapping in a function instructs Solid to track it
  // 3. expensive computation, can use createMemo
  const otherValue = createMemo(() => props.age ? props.age + 10 :  35);
  // 4. can use helper function mergeProps();
  // props = mergeProps({ age: 25}, props);

  return (
    <>
      <div>{value}</div>
      <div>{otherValue}</div>
    </>
  )
}

interface MyComponentProps {
  name: string;
  age?: number;
}
const MyComponent = (props: MyComponentProps) => {
  const [count, setCount] = createSignal(0);
  
  const [age, setAge] = createSignal(0);

  const [fNum, setFNum] = createSignal(0)

  return (
    <div>
      <h1>{props.name} is counting:</h1>
      <h3>Count: {count()}</h3>
      <button onClick={() => setCount(count() + 1)}>INC  +</button>
      <button onClick={() => setCount(count() - 1)}>DEC  -</button>
      <br />
      <br />
      <br />
      <BasicComp age={age()} />
      <input type="text" oninput={e => setAge(parseInt(e.currentTarget.value))} />
      <br />
      <br />
      <br />
      <input type="text" oninput={e => setFNum(parseInt(e.currentTarget.value))} />
      <EffectComponent fNum={fNum()} />
    </div>
  )
}

export default MyComponent;