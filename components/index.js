import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MedicineScreen from "./AddMedicine/MedicineScreen";
import LoadingMedicineBag from "./AddMedicine/LoadingMedicineBag";
import AddNewMedicine from "./AddMedicine/AddNewMedicine";

const AppStack = createStackNavigator({
    MedicineScreen: {
        screen: MedicineScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Medicine Screen`,
        }),
    },
    AddNewMedicine: {
        screen: AddNewMedicine,
        navigationOptions: ({ navigation }) => ({
            title: `Add New Medicine`
        }),
    }
});

const RouteStack = createSwitchNavigator(
    {
        Loading: LoadingMedicineBag,
        App: AppStack
    },
    {initialRouteName: 'Loading'}
);

const Router = createAppContainer(RouteStack);

export default Router;