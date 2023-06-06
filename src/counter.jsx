import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='okk'>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default Counter;
