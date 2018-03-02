import { StackNavigator } from 'react-navigation';
import CheckScreen from '../containers/CheckScreen';
import FormScreen from '../containers/FormScreen';
import ConfirmScreen from '../containers/ConfirmScreen';

const AppNavigator = StackNavigator({
  CheckScreen: { screen: CheckScreen },
  FormScreen: { screen: FormScreen },
  ConfirmScreen: { screen: ConfirmScreen },
});

export default AppNavigator;
