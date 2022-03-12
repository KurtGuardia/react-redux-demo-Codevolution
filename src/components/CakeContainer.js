import React from 'react';
import { buyCake } from '../redux';
import { connect } from 'react-redux';

function CakeContainer(props) {
  return (
    <>
      <h2>We have: {props.numOfCakes} cakes</h2>
      <button onClick={() => props.buyCake()}>Buy cake</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
