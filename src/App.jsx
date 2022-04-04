import React from "react";

import axios from "axios";

function App() {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    let choice1 = data.get("choices[]1");
    let choice2 = data.get("choices[]2");
    let choice3 = data.get("choices[]3");

    let choices = [choice1, choice2, choice3];

    let calculusCount = 0;

    for (let i = 0; i < choices.length; i++) {
      if (choices[i] === "") continue;

      if (choices[i].toLowerCase() === "calculus") {
        calculusCount++;
      }
    }

    if (calculusCount > 0) {
      axios
        .post("/mainForm", {
          choices,
        })
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
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
