import React, { useEffect, useState } from 'react';

function Example() {
  // Déclaration d'une nouvelle variable d'état, que l'on appellera “count”  const [count, setCount] = useState(0);
  const [count, setCount] = useState(0);

    // Équivalent à componentDidMount plus componentDidUpdate :  
    useEffect(() => {
        document.title = `Vous avez cliqué ${count} fois`;
      }, [count]); // N’exécute l’effet que si count a changé

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}

export default Example;