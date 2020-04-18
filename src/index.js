import React from 'react';
import 'react-native-gesture-handler';
import '~/config/ReactotronConfig';
import Reactotron from 'reactotron-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'mobx-react';

import Routes from './routes/routes';
import RootStore from './stores/RootStore';

const store = (window.store = new RootStore());

function App() {
  Reactotron.log('Rodou');
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
