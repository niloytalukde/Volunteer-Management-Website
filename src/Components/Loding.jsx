
import { useState, CSSProperties } from "react";
import { DotLoader } from "react-spinners";


const  CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Loding = () => {
    let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000000");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <DotLoader
        color={color}
        loading={loading}
        cssOverride={CSSProperties}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loding;