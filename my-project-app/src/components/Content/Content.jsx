// Content.js
import React, { useState } from 'react';

function Content() {
  const [text, setText] = useState('');

  const handleButtonClick = () => {
    console.log(text);
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleButtonClick}>Display Text</button>
      <p>{text}</p>
    </div>
  );
}

export default Content;
