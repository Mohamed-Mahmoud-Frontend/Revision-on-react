import { useEffect } from "react";

const EffectHook = () => {
  // 1 : use == hook
  // 2 : useEffect  initial render || every render
  // 3 : useEffect After render
  // 4 : side effect
  useEffect(() => {
    console.log("effect");
    // return fun  == بيظهر بعد ما يتم التنفيذ من الافكت بالحالة السابقة
    return () => {
      console.log("cleanup");
    };
    // required
  }, []);
  //  [] initial rendering  [another] render all change count

  return <div>EffectHook</div>;
};

export default EffectHook;
