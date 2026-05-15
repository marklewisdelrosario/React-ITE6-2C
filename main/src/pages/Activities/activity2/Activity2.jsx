import { useState, useRef, useEffect } from "react";
import "./Activity2.css";

const Activity2 = () => {
  const [dark, setDark] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;

    if (dark) {
      page.style.backgroundColor = "black";
      page.style.color = "white";
    } else {
      page.style.backgroundColor = "white";
      page.style.color = "black";
    }
  }, [dark]);

  return (
    <div ref={pageRef} className="page">
      <h1>Switching between Darkmode and Lightmode</h1>

      <button
        className="btn"
        onClick={() => setDark(!dark)}
      >
        {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default Activity2;