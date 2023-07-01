import List from "./component/List";
import "./component/Style.css";

function App() {
  return (
    <div className="list-container">
      <h1
        style={{
          justifyContent: "center",
          display: "flex",
          marginBottom: "4rem",
        }}
      >
        TODO LIST..
      </h1>
      <List />
    </div>
  );
}

export default App;
