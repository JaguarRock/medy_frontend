import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MedicineScreen from "./AddMedicine/MedicineScreen";
import LoadingMedicineBag from "./AddMedicine/LoadingMedicineBag";
import AddNewMedicine from "./AddMedicine/AddNewMedicine";
import AddNewUser from "./AddUser/AddNewUser"
import UserScreen from "./AddUser/UserScreen"
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
    },
    AddNewUser : {
        screen : AddNewUser,
        navigationOptions: ({ navigation }) => ({
            title: `Add New User`
        }),
    },
    UserScreen : {
        screen : UserScreen,
        navigationOptions: ({ navigation }) => ({
            title: `UserScreen`
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