import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleStateChange(event) {
    const { name, value } = event.target;

    setContact((previous) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: previous.lName,
          email: previous.email
        };
      } else if (name === "lName") {
        return {
          fName: previous.fName,
          lName: value,
          email: previous.email
        };
      } else if (name === "email") {
        return {
          fName: previous.fName,
          lName: previous.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          value={contact.fName}
          onChange={handleStateChange}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={contact.lName}
          onChange={handleStateChange}
          name="lName"
          placeholder="Last Name"
        />
        <input
          value={contact.email}
          onChange={handleStateChange}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
