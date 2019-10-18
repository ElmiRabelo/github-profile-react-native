import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Welcome from './pages/Welcome/welcome.page';
import Repositories from './pages/Repositories/repositories.page';

const Routes = createAppContainer(
  createSwitchNavigator({
    Welcome,
    Repositories,
  }),
);

export default Routes;
