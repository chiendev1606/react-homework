import './BigCoin.css';

function BigCoin({onChangeCoin}) {

  const handleClickBtn = (coins) => () => onChangeCoin(coins)
  
  return (
    <div className="coin-wrapper">
      <button
        className="coin"
        onClick={handleClickBtn(2)}
      >
        <span className="visually-hidden">
          Add 2 coins
        </span>
        <img
          className="coin-image"
          alt=""
          src="https://sandpack-bundler.vercel.app/img/toonie.png"
        />
      </button>
    </div>
  );
}

export default BigCoin;