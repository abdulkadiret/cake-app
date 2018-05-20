import React from 'react';

const AddCakes = props => {
  return <div>
      <input type="text" placeholder="Add new cake " onKeyPress={props.onKeyPress} />
    </div>;
};

export default AddCakes;


