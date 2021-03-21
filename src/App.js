import './App.css';
import './assets/styles/styles.scss'
import 'react-block-ui/style.css';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import stores from './redux/stores';
import AppRoute from './routes/router';

let persistor = persistStore(stores);

function App() {
  return (
    <Provider store={stores}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoute />
      </PersistGate>
    </Provider>
  );
}

export default App;
