import { useState } from 'react';
import { useSelector } from 'react-redux';
import crypto from '../Assets/crypto.png';
import Coin from './Coin';

const Home = () => {
  const coinsArray = useSelector((state) => state.coins.data.coins);
  const [query, setQuery] = useState('');
  return (
    <div data-testid="home-test">
      <div className="hero-section">
        <img className="main-logo" src={crypto} alt="Crypto" />
        <h2>
          Welcome to
          <span className="main-text"> Crypto Stats...</span>
        </h2>
      </div>
      <input onKeyUp={(e) => { setQuery(e.target.value.toLowerCase()); }} type="text" name="search" id="search" className="search-input" placeholder="Filter by coin name" />
      <div className="coin-list">
        {coinsArray?.filter((coin) => (coin.name.toLowerCase().includes(query)))
          .map((coins) => (<Coin key={coins.id} data={coins} />))}
      </div>
    </div>
  );
};
export default Home;
