import React from "react";

function App() {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    console.log(data.get("choices[]1"));
  };

  return (
    <div className="App">
      <form
        action="/post"
        onSubmit={handleFormSubmit} /* form submission handler … */
      >
        Choice A: <input type="text" name="choices[]1" />
        Choice B: <input type="text" name="choices[]2" />
        Choice C: <input type="text" name="choices[]3" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default App;
