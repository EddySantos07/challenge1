import React from "react";

function App() {
  return (
    <div className="App">
      <form action="/post" /* form submission handler … */>
        Choice A: <input type="text" name="choices[]" />
        Choice B: <input type="text" name="choices[]" />
        Choice C: <input type="text" name="choices[]" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default App;
