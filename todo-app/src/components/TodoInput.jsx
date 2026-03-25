/* This code will handle the input and all that*/

import { createRoot } from "react-dom/client";
import { useState } from "react";

function MyForm() {
  const [mytxt, setMytxt] = useState("");

  function handleChange(e) {
    setMytxt(e.target.value);
  }

  return (
    <form>
      <label>
        Write here:
        <textarea value={mytxt} onChange={handleChange} />
      </label>
      <button>add items</button>
    </form>
  );
}

export default MyForm;
