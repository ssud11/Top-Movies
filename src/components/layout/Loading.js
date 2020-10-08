import React from 'react';
import Loading from './Loading.gif';

export default () => {
  return (
    <div>
      <img
        src={Loading}
        alt="Loading..."
        style={{ width: '200px', margin: ' 40px auto', display: 'block' }}
      />
    </div>
  );
};
