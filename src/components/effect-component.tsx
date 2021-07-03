import { createEffect, createSignal } from "solid-js";

const EffectComponent = (props: {fNum: number}) => {
  const initialNum = () => props.fNum;
  const add5 = (num: number) => num + 5;
  const [firstNum, setFirstNum] = createSignal(props.fNum);

  createEffect((prev) => {
    console.log('prev: ', prev, ' | fNum: ', props.fNum);
    console.log('prev: ', prev, ' | firstNum add5: ', add5(props.fNum));
    setFirstNum(add5(initialNum()));
  });
  return (
    <div>
      <h1>provided Num {initialNum}</h1>
      <h1>SUM w createEffect : {firstNum}</h1>
      <h1>SUM inline func {add5(props.fNum)}</h1>
    </div>
  );
}

export default EffectComponent;