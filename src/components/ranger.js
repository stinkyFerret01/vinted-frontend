import React from "react";
import { Range } from "react-range";
import { useState } from "react";

const Ranger = ({ filter, setFilter }) => {
  const [priceSort, setPriceSort] = useState([20, 50]);

  //////////BLACK-MAGIC////////
  // const price = document.magicObj;
  //////////BLACK-MAGIC////////

  return (
    <div>
      <Range
        step={2}
        min={0}
        max={100}
        values={priceSort}
        //////////BLACK-MAGIC////////
        // values={[price.state.min, price.state.max]}
        //////////BLACK-MAGIC////////

        onChange={(values) => {
          setPriceSort(values);

          //////////BLACK-MAGIC////////
          // price.setState({ min: values[0], max: values[1] });
          //////////BLACK-MAGIC////////
        }}
        onFinalChange={(values) => {
          let step = { ...filter };
          step.priceSort = values;
          setFilter(step);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "16rem",
              backgroundColor: "#ccc",
              allowOverlap: true,
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "1rem",
              width: "1rem",
              backgroundColor: "#0DB0BA",
              borderRadius: "50%",
            }}
          />
        )}
      />
      {/* <output style={{ marginTop: "30px" }} id="output">
          {pack.state.min}
        </output>
        <br />
        <output style={{ marginTop: "30px" }} id="output">
          {pack.state.max}
        </output> */}
    </div>
  );
};

export default Ranger;
