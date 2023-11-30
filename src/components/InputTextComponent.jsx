import { useState } from "react";

export default function InputTextComponent() {
  console.log("render InputTextComponent");
  const [text, setText] = useState("");

  function textChangeHandler(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h3>text: {text}</h3>
      <input type="text" value={text} onChange={textChangeHandler} />
    </div>
  );
}
