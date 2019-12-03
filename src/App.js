import React, { Suspense } from "react";
import { createResource } from "./PersonApi";
import { Person } from "./Person";
import { Num } from "./Num";

const resource = createResource();

function App() {
  return (

    <div className="App">
      <div>Other String</div>
      <Suspense fallback={<h1>Loading Number...</h1>}>
        <Num resource={resource} />
      </Suspense>
      <Suspense fallback={<h1>Loading Person...</h1>}>
        <Person resource={resource} />
      </Suspense>
    </div>

  );
}

export default App;
