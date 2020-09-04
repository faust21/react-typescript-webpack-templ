import React from 'react';
import Axios from 'axios';

const App = () => {
  const axios = Axios.create();

  const app = () => {
    let app: string = 'app';

    return app + '.';
  };

  return <div>{app()}</div>;
};

export default App;
