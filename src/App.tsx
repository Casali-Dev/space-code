import React, { useEffect, useState } from "react";

import "./App.scss";

export function App() {
  const [lastPressedKey, setLastPressedKey] = useState("");
  const [isKeyGrowing, setIsKeyGrowing] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (keyPressed: KeyboardEvent) => {
      if (keyPressed.key.match(/^.$/)) {
        setLastPressedKey(keyPressed.key);
        setIsKeyGrowing(true);
        setTimeout(() => {
          setIsKeyGrowing(false);
        }, 100);
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="comingSoon">
        <h1>
          <span className="timeout">setTimeout</span>
          <span className="bracket">(</span>
          <span className="variable">soon</span>
          <span className="bracket">)</span>;
        </h1>
      </div>

      <h1 className={"keyPressed" + (isKeyGrowing ? " grow" : "")}>
        {lastPressedKey}
      </h1>
    </div>
  );
}
