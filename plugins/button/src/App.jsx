import { Button } from "antd/dist/antd";
import { useState } from "react";
export default function () {
  const [count, setCount] = useState(0);
  return (
    <>
      <Button onClick={() => setCount((c) => c + 1)}>
        I am in react: {count}
      </Button>
    </>
  );
}
