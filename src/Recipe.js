import React, { useState } from "react";
import "./styles.css";

export default function Recipe() {
  const [like, setLike] = useState(0);
  return <button onClick={() => setLike(like + 1)}>like👍{like}</button>;
}
