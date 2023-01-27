import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
    <header className="justify-content-center py-3 mb-4 border-bottom">
        <h1>Daily Quotes</h1>
      
      <div className="input-group my-3 shadow m-auto">
        <input type="text" className="form-control" placeholder="Author Name" aria-label="Author Name" aria-describedby="basic-addon2" />
          <div className="input-group-append">
          <button onClick={() => setCount((count) => count + 1)} className="btn btn-primary" type="button">Search {count}</button>
        </div>
      </div>
    </header>
  </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">

      <div className="card mb-3">
                          <figure>
                            <blockquote className="blockquote mb-4">
                              <p>
                                <span className="font-italic">Sed ut perspiciatis unde omnis iste natus error sit
                                  voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                  quae ab illo inventore veritatis.</span>
                              </p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                              Annie Hall <cite title="Source Title">New York Times</cite>
                            </figcaption>
                          </figure>
                  </div>
                  <div className="card mb-3">
                          <figure>
                            <blockquote className="blockquote mb-4">
                              <p>
                                <span className="font-italic">Sed ut perspiciatis unde omnis iste natus error sit
                                  voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                  quae ab illo inventore veritatis.</span>
                              </p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                              Annie Hall <cite title="Source Title">New York Times</cite>
                            </figcaption>
                          </figure>
                  </div>
                  <div className="card mb-3">
                          <figure>
                            <blockquote className="blockquote mb-4">
                              <p>
                                <span className="font-italic">Sed ut perspiciatis unde omnis iste natus error sit
                                  voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                  quae ab illo inventore veritatis.</span>
                              </p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                              Annie Hall <cite title="Source Title">New York Times</cite>
                            </figcaption>
                          </figure>
                  </div>
        <div className="card">
                          <figure>
                            <blockquote className="blockquote mb-4">
                              <p>
                                <span className="font-italic">Sed ut perspiciatis unde omnis iste natus error sit
                                  voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                  quae ab illo inventore veritatis.</span>
                              </p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                              Annie Hall <cite title="Source Title">New York Times</cite>
                            </figcaption>
                          </figure>
                  </div>
          </div>
          </div>
          </div>
          </div>
  )
}

export default App
