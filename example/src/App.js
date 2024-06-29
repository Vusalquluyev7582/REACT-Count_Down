import React, { useEffect, useState } from 'react'


function App() {

  // const [timer, setTimer] = useState(30);
  const [timer, setTimer] = useState(5);

  useEffect(() => {

    if (timer !== 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1)
      }, 1000);

      return () => clearInterval(interval)  // onMount
    }
  }, [timer])

  return (
    <div className="App">

      <div style={{ width: "250px", height: "250px", color: "white", backgroundColor: "blue", borderRadius: "50%", fontSize: "60px", lineHeight: "250px", margin: "10px auto" }}>
        <p style={{textAlign:"center"}}>{timer}</p>
      </div>

    </div>
  );
}

export default App;