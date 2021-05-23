import { Fragment, useState } from 'react';
import './styles.css';

function InputComponent({ onSubmit }) {
  const [num, setNum] = useState(null);

  console.log(onSubmit);

  const handleSubmit = () => {
    onSubmit(parseInt(num));
  };

  return (
    <Fragment>
      <input
        type="number"
        placeholder="Type a number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </Fragment>
  );
}

export default function App() {
  const [sum, setSum] = useState(0);
  return (
    <div className="App">
      {/* var onSubmit = function(param) {...} */}
      <InputComponent onSubmit={(val) => setSum((prev) => prev + val)} />
      <h1>{sum}</h1>
    </div>
  );
}
