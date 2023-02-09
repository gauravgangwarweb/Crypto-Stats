/* eslint-disable */ 
import coinsSlice, { selectCoin } from '../Redux/Reducer/coinReducer';

const initialState = {
  data: [],
  selectedCoin: [],
  loading: false,
  error: null,
};

describe('test redux', () => {
  it('if it is eth', () => {
    expect(coinsSlice(initialState, selectCoin(['eth']))).toEqual({
      data: [],
      selectedCoin: ['eth'],
      loading: false,
      error: null,
    });
  });

  it('if it is btc', () => {
    expect(coinsSlice(initialState, selectCoin(['btc']))).toEqual({
      data: [],
      selectedCoin: ['btc'],
      loading: false,
      error: null,
    });
  });
  it('if it is sol', () => {
    expect(coinsSlice(initialState, selectCoin(['sol']))).toEqual({
      data: [],
      selectedCoin: ['sol'],
      loading: false,
      error: null,
    });
  });
});
