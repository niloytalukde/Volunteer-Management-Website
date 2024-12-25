
import { useState, CSSProperties } from "react";
import { DotLoader } from "react-spinners";


const  CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Loading = () => {
    let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000000");

  return (
    <div className="sweet-loading flex justify-center items-center">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
};

export default Loading;