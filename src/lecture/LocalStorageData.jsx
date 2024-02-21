import { useEffect } from "react";
import { useState } from "react";

const LocalStorageData = () => {
  // used hook use state and useEffect & useState
  const [local, setLocal] = useState(0);
  //pure fun
  //not use side effect
  // same inp =some output
  // hook : useEffect abd used localStorage saved a local value
  useEffect(() => {
    //used number forward string return number
    const localCount = Number(localStorage.getItem("local"));
    setLocal(localCount);
  }, []);
  const handelClickDic = () => {
    setLocal(local + 1);
    localStorage.setItem("local", local + 1);
  };
  const handelClickInc = () => {
    setLocal(local - 1);
    localStorage.setItem("local", local - 1);
  };

  return (
    <div>
      <h2>count : {local}</h2>
      <button onClick={handelClickDic}> +</button>
      <button onClick={handelClickInc}> - </button>
    </div>
  );
};

export default LocalStorageData;
