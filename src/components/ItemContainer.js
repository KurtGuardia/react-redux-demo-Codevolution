import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

const ItemContainer = (props) => {
  return (
    <div>
      <h2>
        Item {props.name}: {props.item}
      </h2>
      <button onClick={props.dispatch}>Buy {props.name}</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  const itemName = ownProps.cake ? 'cake' : 'ice Cream';
  return {
    item: itemState,
    name: itemName,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFn = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    dispatch: dispatchFn,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
