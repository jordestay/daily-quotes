import { useState } from "react";
import { Header } from './Header'; 
import { Quote } from './Quote'; 
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />  
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
