import React from 'react';
import Axios from 'axios';

import useStyles from './App.s';

const App = () => {
  const axios = Axios.create();
  const s = useStyles();

  const app = () => {
    let app: string = 'app';

    return app + '.';
  };

  return <div className={s.title}>{app()}</div>;
};

export default App;
