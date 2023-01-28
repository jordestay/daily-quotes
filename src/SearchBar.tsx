export function SearchBar() {
  return (
    <div className="input-group my-3 shadow m-auto">
      <input
        type="text"
        className="form-control"
        placeholder="Author Name"
        aria-label="Author Name"
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button">
          Search
        </button>
      </div>
    </div>
  );
}