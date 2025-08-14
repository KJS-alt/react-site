import React, { useState, useEffect, useCallback } from "react";

const Ex_callback5 = () => {
  const [count, setCount] = useState(0);

  const handlekeyPress = useCallback((e) => {
    if (e.key === "ArrowUp") {
      setCount((prev) => prev + 1);
    } else if (e.key === "ArrowDown") {
      setCount((prev) => prev - 1);
    } else if (e.key === "ArrowRight") {
      setCount((prev) => prev + 1);
    } else if (e.key === "ArrowLeft") {
      setCount((prev) => prev - 1);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", handlekeyPress);
    return () => {
      window.removeEventListener("keydown", handlekeyPress);
      console.log("나가는거, 볼 수 있나?");
    };
  }, [handlekeyPress]);

  return (
    <div>
      <p>ArrowUp, Down 키를 눌러 증감</p>
      <p>ArrowRight, Left 키를 눌러 증감</p>
      <p>Count: {count}</p>
    </div>
  );
};

export default Ex_callback5;
