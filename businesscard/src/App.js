import { HeaderPhoto, MyName, Buttons, Details, Footer } from "./components";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="business-card">
        <HeaderPhoto />
        <MyName />
        <Buttons />
        <Details />
        <Footer />
      </div>
    </div>
  );
}

export default App;
