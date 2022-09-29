import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const correction =(e)=>{
    setText(e.target.value);
    const strArr = text.split(" ");
    const obj = {
      "realy": "really",
      "wierd":"weird"
    };
    const objArr = Object.getOwnPropertyNames(obj);

    
    strArr.map((d, i) => {
      const n = objArr.indexOf(d);
      if (n !== -1) {
        strArr[i] = obj[objArr[n]];
        setText(strArr.join(" ")+" ");
      }
      return true;
    });
  }
  return (
    <div className="App">
      <div className="App-header">   
      <span>Enter Here :</span>  <input value={text} onChange={correction}/>
      </div>

    </div>
  );
}