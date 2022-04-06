// import React, { useState, useEffect } from 'react';
// import React, { useEffect } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

let state
function useState(initial) { // useState hooks
  state = state || initial
  function setState(newState) {
    state = newState
    ReactDOM.render(<App />, document.getElementById('root'))
  }
  return [state, setState]
}
let oldDeps
function useEffect(callback, deps) {
  // console.log(callback)
  // console.log(deps)
  const changed = oldDeps ? !oldDeps.every((e, i) => e === deps[i]) : true
  if (!deps || changed) {
    callback()
    oldDeps = deps
  }
}

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect on mount')
  }, [count]);
  return (
    <div className="App">
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click it!</button>
    </div>
  );
}

export default App;