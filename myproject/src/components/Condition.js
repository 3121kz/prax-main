import { useState } from "react";
export default function Condition() {
  const [display, setDisplay] = useState(false);

  return display ? (
    <div>
      <h3>This is a Condition</h3>
    </div>
  ) : (
    <div>
      <h3>Nothing to see</h3>
    </div>
  );
}
