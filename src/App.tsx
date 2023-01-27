import { useState } from "react";
import { Quote } from './Quote'; 
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <header className="justify-content-center py-3 mb-4 border-bottom">
          <h1>Daily Quotes</h1>
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6 m-auto">
              <div className="input-group my-3 shadow m-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Author Name"
                  aria-label="Author Name"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button
                    onClick={() => setCount((count) => count + 1)}
                    className="btn btn-primary"
                    type="button"
                  >
                    Search {count}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
          <Quote />  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
