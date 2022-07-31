import React from "react";
import { Range } from "react-range";

class Ranger extends React.Component {
  state = { values: [20, 50] };
  render() {
    const pack = this.props;

    //////////BLACK-MAGIC////////
    // const price = document.magicObj;
    //////////BLACK-MAGIC////////

    return (
      <div>
        <Range
          step={0.1}
          min={0}
          max={100}
          values={[this.props.state.min, this.props.state.max]}
          //////////BLACK-MAGIC////////
          // values={[price.state.min, price.state.max]}
          //////////BLACK-MAGIC////////

          onChange={(values) => {
            pack.setState({ min: values[0], max: values[1] });
            const step = { ...pack.filter };
            step.price = { min: values[0], max: values[1] };
            pack.setFilter(step);

            //////////BLACK-MAGIC////////
            // price.setState({ min: values[0], max: values[1] });
            //////////BLACK-MAGIC////////
          }}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                width: "100%",
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
        <output style={{ marginTop: "30px" }} id="output">
          {pack.state.min}
        </output>
        <br />
        <output style={{ marginTop: "30px" }} id="output">
          {pack.state.max}
        </output>
      </div>
    );
  }
}

export default Ranger;
