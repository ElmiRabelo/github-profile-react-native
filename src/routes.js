import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Welcome from './pages/Welcome/welcome.page';
import Repositories from './pages/Repositories/repositories.page';

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        Repositories,
      },
      {
        initialRouteName: userLogged ? 'Repositories' : 'Welcome',
      },
    ),
  );

export default Routes;
