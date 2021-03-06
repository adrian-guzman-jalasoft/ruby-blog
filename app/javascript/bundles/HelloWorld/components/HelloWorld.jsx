import PropTypes from 'prop-types';
import React, { useState } from 'react';

const HelloWorld = (props) => {
  const [name, setName] = useState(props.name);

  return (
    <div>
      <h3>Hello, {name}!</h3>
      <hr />
      <form>
        <div className="form-group">
          <label htmlFor="name">
            Say hello to:
          </label>
          <input className="form-control" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <small className="form-text text-muted">This is just a simple react component</small>
        </div>
      </form>
    </div>
  );
};

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default HelloWorld;
