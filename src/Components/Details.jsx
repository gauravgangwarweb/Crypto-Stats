import { useSelector } from 'react-redux';

const Details = () => {
  const data = useSelector((state) => state.coins.selectedCoin);
  const conditionalData = (data) => {
    if (data < 0) {
      return (<span className="negative-text">{data}</span>);
    }
    return (<span className="positive-text">{data}</span>);
  };
  return (
    <div data-testid="Details-test" className="details-card">
      <div className="hero-section"><img className="coin-img" src={data.icon} alt="coin-icon" /></div>
      <h2 className="details-head">COIN DETAILS</h2>
      <ul className="details-list">
        <li className="list-items">
          <span>Name:</span>
          <span className="list-items-child">
            <span>{data.name}</span>
            <i className="arrow-img fa-solid fa-arrow-right" />
          </span>
        </li>
        <li className="list-items">
          <span>Rank:</span>
          <span className="list-items-child">
            <span>{data.rank}</span>
            <i className="arrow-img fa-solid fa-arrow-right" />
          </span>
        </li>
        <li className="list-items">
          <span>Price Change(1h):</span>
          <span className="list-items-child">
            {conditionalData(data.priceChange1h)}
            <i className="arrow-img fa-solid fa-arrow-right" />
          </span>
        </li>
        <li className="list-items">
          <span>Price Change(1d):</span>
          <span className="list-items-child">
            {conditionalData(data.priceChange1d)}
            <i className="arrow-img fa-solid fa-arrow-right" />
          </span>
        </li>
        <li className="list-items">
          <span>Price Change(1w):</span>
          <span className="list-items-child">
            {conditionalData(data.priceChange1w)}
            <i className="arrow-img fa-solid fa-arrow-right" />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Details;
