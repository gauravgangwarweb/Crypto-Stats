import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCoin } from '../Redux/Reducer/coinReducer';

const Coin = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  const {
    icon, name, priceChange1d,
  } = data;

  const conditionalData = (data) => {
    if (data < 0) {
      return (<span className="negative-text">{data}</span>);
    }
    return (<span className="positive-text">{data}</span>);
  };

  return (
    <Link onClick={() => { dispatch(selectCoin(data)); }} to="/details" className="coin-card">
      <i className="arrow-img fa-solid fa-arrow-right" />
      <div className="coin-div">
        <img className="coin-img" src={icon} alt="coin-png" />
        <div className="coin-text">
          <p className="coin-name">{name}</p>
          <p className="coin-price">{conditionalData(priceChange1d)}</p>
        </div>
      </div>
    </Link>
  );
};

Coin.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
export default Coin;
