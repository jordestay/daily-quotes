import { useState } from "react";
import { Header } from "./Header";
import { Quote } from "./Quote";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [content, setContent] = useState(
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.'
  );
  const [author, setAuthor] = useState("Annie Hall");
  const [slug, setSlug] = useState("New York Times");

  async function fetchQuote() {
    const result = await fetch(
      "https://usu-quotes-mimic.vercel.app/api/random"
    );
    // setQuote(data.parse("content").value());
    console.log(await result.json());
    // JSON = (await result.json());
    // setContent(result.parse(content));
    // setAuthor((await result.json()).parse(author));
    // setSlug((await result.json()).parse(slug));
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <Quote content={content} author={author} slug={slug} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
