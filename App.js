import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import EncounterScreen from './screens/EncounterScreen';
import { Provider } from 'react-redux';
import configureStore from './store';

const Stack = createNativeStackNavigator();
const store = configureStore();

export default function App() {

    return (
        <Provider store={store}>    
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Encounter" component={EncounterScreen} />
                </Stack.Navigator>
                <StatusBar style="auto" />
            </NavigationContainer>
        </Provider>
    );
}