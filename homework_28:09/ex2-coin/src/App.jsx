import React from 'react';

import BigCoin from './BigCoin';

function App() {
  const [numOfCoins, setNumOfCoins] = React.useState(0);

  const handleChangeCoin  = (coins) =>{
    setNumOfCoins(numOfCoins + coins)
  }

  return (
    <div className="wrapper">
      <main>
        <BigCoin onChangeCoin={handleChangeCoin} />
      </main>
      <footer>
        Your coin balance:
        <strong>{numOfCoins}</strong>
      </footer>
    </div>
  );
}

export default App;