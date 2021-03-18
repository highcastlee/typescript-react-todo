import React from 'react';

interface GreetingProps {
  name: string;
  optional?: string;
  onClick: (name:string) => void;
};

function Greeting({name, optional, onClick}:GreetingProps){
  const handleClick = () => onClick(name);
  return(
    <div>
      Hello, {name}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click</button>
      </div>
    </div>
  )
};

Greeting.defaultProps = {
  name: 'jun'
};

export default Greeting;
