import NavBar from "./components/NavBar";
import TextForms from "./components/TextForms";
//import TextForms from "./components/TextForms";

function App() {
  return (
    <>
      <NavBar title="TextUtils" />
      <div className="container my-3">
        <TextForms heading = "Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
