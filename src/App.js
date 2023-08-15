import React, { lazy, Suspense } from "react";
import "./components/styles.css";

const FirstApp = lazy(() => import("FIRST_APP/app"));

const App = () => {
  const [name, setName] = React.useState(null);

  const [item , setitem] = React.useState(0);
  const increase = () => {
    setitem(item+1);
  }
  const decrease = () => {
    if (item>0)
        setitem(item-1);
  }

  return (
    <div className="App">
      <div className="first">
      <h1>This is a Survey </h1>
      <h2>Please fill the below Contents</h2>
      { name ? <p>Welcome: {name}</p> : null }
      </div>
      <div>
        <Suspense fallback={<span>Loading...</span>}>
          <FirstApp onChange={(e) => setName(e.target.value)} />
      <div className='item'>
      <h4>Age:</h4>
      <button onClick={increase}>+</button>
      {item}
      <button onClick={decrease}>-</button><br></br>
      <input type="submit" />
      </div>
        </Suspense>
      </div>
    </div>
  );
};

export default App;