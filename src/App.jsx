import "./App.css";
import PropsPratices from "./components/PropsPractices";

function App() {
  const arr = ["Cancel", "Delete", "Upload", "Submit", "Update"];
  return (
    <div className="App">
      {arr.map((item, index) => (
        <PropsPratices value={item} key={index} />
      ))}
    </div>
  );
}

export default App;
