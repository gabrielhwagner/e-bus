import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from '~/pages/Main';
import Mapa from '~/pages/Mapa';

const Routes = createAppContainer(createSwitchNavigator({Mapa}));

export default Routes;
