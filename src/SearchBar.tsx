export function SearchBar() {
//   const [searchTerm, setSearchTerm] = (useState="");

//   function search(enter, buttonPress) {
//     if (enter.key === "Enter" || buttonPress === true) {
//       console.log("Success!!!");
//     }
//   }

  return (
    <div className="row">
      <div className="col-12 col-md-8 col-lg-6 m-auto">
        <div className="input-group my-3 shadow m-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Author Name"
            aria-label="Author Name"
            aria-describedby="basic-addon2"
            id="input"
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
