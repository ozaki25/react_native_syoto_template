import { StackNavigator } from 'react-navigation';
import Hello from '../containers/Hello';

const AppNavigator = StackNavigator({
  Hello: { screen: Hello },
});

export default AppNavigator;
