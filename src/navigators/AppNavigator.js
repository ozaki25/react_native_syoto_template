import { StackNavigator } from 'react-navigation';
import Hello from '../containers/Hello';
import World from '../containers/World';

const AppNavigator = StackNavigator({
  Hello: { screen: Hello },
  World: { screen: World },
});

export default AppNavigator;
