import React, { useEffect, useState } from "react";

export default function RenderTimestamp(props) {
  const [currState, setcurrState] = useState([]);
  useEffect(() => {
    let timer = props.renderComps.map((val) => {
      setTimeout(() => {
        setcurrState((prevState) => [...prevState, val]);
      }, val.timestamp);
    });
    return clearTimeout(timer);
  }, []);
  return (
    <div>
      {currState.map((val) => {
        return <div key={val.comment}>{val.comment}</div>;
      })}
    </div>
  );
}
