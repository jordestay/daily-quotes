import { SearchBar } from './SearchBar'; 

export function Header() {
  return (
    <div className="container">
      <header className="justify-content-center py-3 mb-4 border-bottom">
        <h1>Daily Quotes</h1>
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 m-auto">
            <SearchBar />
          </div>
        </div>
      </header>
    </div>
  );
}
