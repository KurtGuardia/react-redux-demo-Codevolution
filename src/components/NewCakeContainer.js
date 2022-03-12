import React from 'react';
import { buyCake } from '../redux';
import { connect } from 'react-redux';
import { useState } from 'react';

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);

  return (
    <>
      <h2>We have: {props.numOfCakes} cakes</h2>
      <input
        type='text'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} cakes</button>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
