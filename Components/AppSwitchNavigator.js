import { createSwitchNavigator } from 'react-navigation';

import LoadingScreen from './LoadingScreen';
import AppStack from './AppStack';

export default createSwitchNavigator(

  {
    Loading: LoadingScreen,
    AppStack: AppStack,
  },
  {
    initialRouteName: 'Loading'
  }

);
