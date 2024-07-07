import { LoginScreen } from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegisterScreen } from "./screens/RegisterScreen";
import MainScreen from "./screens/MainScreen";
import SplashScreen from "./screens/SplashScreen";
import ScreenNames from "./utils/ScreenNames";
import UserScreen from "./screens/UserScreen";
import AccountScreen from "./screens/AccountScreen";
import AddressScreen from "./screens/AddressScreen";
import CreateAddressScreen from "./screens/CreateAddressScreen";
import UpdateAddressScreen from "./screens/UpdateAddressScreen";
import ProductScreen from "./screens/ProductScreen";
import CreateOrderScreen from "./screens/CreateOrderScreen";
import AllProductScreen from "./screens/AllProductScreen";
import ProductByCategoryScreen from "./screens/ProductByCategoryScreen";
import ProductSearchScreen from "./screens/ProductSearchScreen";
import CreateCartOrderScreen from "./screens/CreateCartOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import DetailOrderScreen from "./screens/DetailOrderScreen";
import DetailOrderPendingScreen from "./screens/DetailOrderPendingScreen";
import DetailOrderShippingScreen from "./screens/DetailOrderShippingScreen";
import WebVnPay from "./screens/WebViewVnPayScreen";
import WebVnPayCart from "./screens/WebViewVnPayCartScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="SplashScreen"
      >
        <Stack.Screen name={ScreenNames.SPLASH} component={SplashScreen} />
        <Stack.Screen name={ScreenNames.MAIN} component={MainScreen} />
        <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
        <Stack.Screen name={ScreenNames.REGISTER} component={RegisterScreen} />
        <Stack.Screen name={ScreenNames.USER} component={UserScreen} />
        <Stack.Screen name={ScreenNames.ACCOUNT} component={AccountScreen} options={{ headerShown: true, headerStyle: { backgroundColor: '#EE4D2D' }, headerTintColor: '#FFFFFF', headerTitleStyle: { fontSize: 14 } }} />
        <Stack.Screen name={ScreenNames.ADDRESS} component={AddressScreen} options={{ headerShown: true, headerStyle: { backgroundColor: '#EE4D2D' }, headerTintColor: '#FFFFFF', headerTitleStyle: { fontSize: 14 } }} />
        <Stack.Screen name={ScreenNames.CREATEADDRESS} component={CreateAddressScreen} options={{ headerShown: true, headerStyle: { backgroundColor: '#EE4D2D' }, headerTintColor: '#FFFFFF', headerTitleStyle: { fontSize: 14 } }} />
        <Stack.Screen name={ScreenNames.UPDATEADDRESS} component={UpdateAddressScreen} options={{ headerShown: true, headerStyle: { backgroundColor: '#EE4D2D' } }} />
        <Stack.Screen name={ScreenNames.PRODUCT} component={ProductScreen} />
        <Stack.Screen name={ScreenNames.CREATE_ORDER} component={CreateOrderScreen} options={{ headerShown: true, headerStyle: { backgroundColor: '#EE4D2D' }, headerTintColor: '#FFFFFF', headerTitleStyle: { fontSize: 14 } }} />
        <Stack.Screen name={ScreenNames.ALL_PRODUCT} component={AllProductScreen} />
        <Stack.Screen name={ScreenNames.PRODUCT_BY_CATEGORY} component={ProductByCategoryScreen} />
        <Stack.Screen name={ScreenNames.PRODUCT_SEARCH} component={ProductSearchScreen} />
        <Stack.Screen name={ScreenNames.CREATE_CART_ORDER} component={CreateCartOrderScreen} options={{ headerShown: true, headerStyle: { backgroundColor: '#EE4D2D' }, headerTintColor: '#FFFFFF', headerTitleStyle: { fontSize: 14 } }} />
        <Stack.Screen name={ScreenNames.ORDER} component={OrderScreen} />
        <Stack.Screen name={ScreenNames.DETAIL_ORDER} component={DetailOrderScreen} />
        <Stack.Screen name={ScreenNames.DETAIL_ORDER_PENDING} component={DetailOrderPendingScreen} />
        <Stack.Screen name={ScreenNames.DETAIL_ORDER_SHIPPING} component={DetailOrderShippingScreen} />
        <Stack.Screen name={ScreenNames.VNPAY} component={WebVnPay}/>
        <Stack.Screen name={ScreenNames.VNPAY_CART} component={WebVnPayCart}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}