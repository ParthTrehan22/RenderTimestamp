import "./styles.css";
import RenderTimestamp from "./RenderTimestamp";

export default function App() {
  const renderComps = [
    { comment: "hey", timestamp: 0 },
    { comment: "hello", timestamp: 5000 },
    { comment: "end", timestamp: 10000 }
  ];
  return (
    <div className="App">
      <RenderTimestamp renderComps={renderComps}></RenderTimestamp>
    </div>
  );
}
