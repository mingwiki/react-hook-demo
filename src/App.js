// import React, { useState, useEffect } from 'react';
// import React, { useEffect } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

let state = []
let index = 0
function useState(initial) { // useState hooks
  state[index] = state[index] || initial

  let curIndex = index
  function setState(newState) {
    state[curIndex] = newState
    console.log("state: " + state + " curIndex:" + curIndex)
    index = 0
    ReactDOM.render(<App />, document.getElementById('root'))
  }
  return [state[index++], setState]
}


function useEffect(callback, deps) {
  let oldDeps = state[index]
  let changed = oldDeps ? !deps.every((e, i) => e === oldDeps[i]) : true
  if (!deps || changed) {
    callback()
    state[index] = deps
  }
  index++
}

function App() {
  const [count, setCount] = useState(0);
  const [hit, setHit] = useState(0);
  useEffect(() => {
    console.log('useEffect on count')
  }, [count])
  useEffect(() => {
    console.log('useEffect on hit')
  }, [hit])
  return (
    <div className="App">
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click it!</button>
      <p>You hit {hit} times</p>
      <button onClick={() => setHit(hit + 1)}>Hit it!</button>
    </div>
  );
}

export default App;