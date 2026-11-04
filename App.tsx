// O App.tsx só inicia a navegação. As telas e rotas ficam em src/.
import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index.routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
