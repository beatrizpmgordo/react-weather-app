import Search from "./Search";
import Footer from "./Footer";
import City from "./City";
import Conditions from "./Conditions";
import Temperature from "./Temperature";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Search />
      <div className="weather-app">
        <div className="row">
          <div className="col-4">
            <City value="Lisbon" />
            <Conditions />
          </div>
          <div className="col-8">
            <Temperature value="☀️ 18" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
