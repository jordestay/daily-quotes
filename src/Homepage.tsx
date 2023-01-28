import { SearchBar } from "./SearchBar";
import { Title } from "./Title";
import { QuoteList } from "./QuoteList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export function Homepage() {
  return (
    <div className="App">
      <div className="container">
        <header className="justify-content-center py-3 mb-4 border-bottom w-100">
          <Title />
          <SearchBar />
        </header>
      </div>
      <QuoteList />
    </div>
  );
}
