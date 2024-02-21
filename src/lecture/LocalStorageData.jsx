import { useEffect } from "react";
import { useState } from "react";

const LocalStorageData = () => {
  const [local, setLocal] = useState(0);
  //pure fun
  //not use side fun
  // same inp =some output
// hook : useEffect abd used localStorage saved a local value
  useEffect(() => {
    const localCount = Number(localStorage.getItem("local"));
    setLocal(localCount);
  }, []);
  const handelClick = () => {
    setLocal(local + 1);
    localStorage.setItem("local", local + 1);
  };
  return (
    <div>
      <button onClick={handelClick}>count : {local} </button>
    </div>
  );
};

export default LocalStorageData;
