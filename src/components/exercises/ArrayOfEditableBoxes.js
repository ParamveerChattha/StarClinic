import { useState } from "react";
import "./ArrayOfEditableBoxes.css";

const ArrayOfEditableBoxes = () => {
  const joke = null;
  const [status, setStatus] = useState(false);
  const [arrayList, setArrayList] = useState(["A", "B", "C", "D"]);
  // useEffect(() => {
  //   fetch("https://catfact.ninja/fact", {})
  //     .then((response) => {
  //       return response.data;
  //     })
  //     .then((data) => {
  //       setJoke(data);
  //       console.log("data:", data);
  //     })
  //     .catch((error) => console.log(error));
  // }, [null]);

  const changeElemntVal = (e, idx) => {
    setArrayList((prevArray) =>
      prevArray.map((cell, i) => (i === idx ? e.target.value : cell))
    );
  };

  const addElement = (index) => {
    setArrayList((prevArray) => [
      ...prevArray.slice(0, index + 1),
      "-",
      ...prevArray.slice(index + 1),
    ]);

    console.log("arrayList", arrayList);
  };

  return (
    <>
      <>
        <h1>hello</h1>
        <button onClick={() => setStatus(!status)}>CLICK ME</button>
        {joke && <p> {joke}</p>}
      </>
      <p>under this</p>
      <div className="BaseElemets">
        {arrayList.map((cells, idx) => (
          <div className="ElementBoxes" key={idx}>
            <input
              className="CellInputField"
              value={cells}
              onChange={(e) => changeElemntVal(e, idx)}
            />

            {idx < arrayList.length - 1 && (
              <span
                className="AddElement"
                onClick={(e) => {
                  e.preventDefault();
                  addElement(idx);
                }}
              >
                +
              </span>
            )}
          </div>
        ))}
      </div>

      {/* arrayList below this */}
    </>
  );
};

export default ArrayOfEditableBoxes;
