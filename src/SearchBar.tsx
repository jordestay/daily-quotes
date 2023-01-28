const [searchTerm, setSearchTerm] = (useState = "");

function search(enter, buttonPress) {
    if (enter.key === "Enter" || buttonPress === true) {
        if (input.value === "") {

        }
    }
}

export function SearchBar() {
  return (
    <div className="input-group my-3 shadow m-auto">
      <input
        type="text"
        className="form-control"
        placeholder="Author Name"
        aria-label="Author Name"
        aria-describedby="basic-addon2"
        id="input"
        value={ searchTerm }
        onKeyDown={(e) => { search(e, false) }}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button"  onclick={ search("", true) }>
          Search
        </button>
      </div>
    </div>
  );
}
