/*
1-async await =
2- call back func =
3- promise = وعد ||

setTimeOut = بيخلي الكود يتنفذ بعد مده معنيه
بياخد المده وال func  علشان يحولها او يشغلها بعد المده المحدده


forEach === Map  بتاخد عنصرين  index , key
map      === Filter   بتاخد عنصرين value,index & key
filter   === Reduce    بتاخد عنصرين acc && currenntValue

*/



import { useState, useEffect } from "react";

const Asynchronous = () => {
  // async await
  const fetchData = async () => {
    const posts = [
      {
        title: "mohamed mahmod",
        content: "post 1",
      },
      {
        title: "mohamed mahmodss",
        content: "post 2",
      },
      {
        title: "mohamed mahmod",
        content: "post 3",
      },
      {
        title: "mohamed mahmod",
        content: "post 4",
      },
    ];

    // setTimeout
    setTimeout(() => {
      // forEach === Map
      posts.forEach((post) => {
        // setState
        setState(post.title);
      });
    }, 1000);
  };

  // useEffect
  useEffect(() => {

    fetchData();
  }, []);

  // useState
  const [state, setState] = useState("");

  return <div>{state}</div>;
};

export default Asynchronous;
