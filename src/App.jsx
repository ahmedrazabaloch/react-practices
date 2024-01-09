import "./App.css";
// import PropsPratices from "./components/PropsPractices";
import HelloWorld from "./components/HelloWord";

function App() {
  // const arr = ["Cancel", "Delete", "Upload", "Submit", "Update"];
  return (
    <div className="App">
      {/* {arr.map((item, index) => (
        <PropsPratices value={item} key={index} />
      ))} */}
      <HelloWorld />
    </div>
  );
}

export default App;
