import * as React from 'react';
import App from './App';
import "./styles.css";

export default function MainApp() {
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
    <>
      <h3 style={{ textAlign: 'center' }}>{ name ? <p>Welcome: {name}</p> : null }</h3>
      <App onChange={(e) => setName(e.target.value)} />
      <div className='item'>
      <h4>Age:</h4>
      <button onClick={increase}>+</button>
      {item}
      <button onClick={decrease}>-</button><br></br>
      <input type="submit" />
      </div>
    </>
  );
}