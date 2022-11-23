import { HeaderPhoto, MyName, Buttons, Details, Footer } from "./components";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="business-card">
        <HeaderPhoto />
        <div className="contents">
          <MyName />
          <Buttons />
          <Details />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
