import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ReelsScreen from '../screens/ReelsScreen/ReelsScreen'

const Stack = createNativeStackNavigator()

export const ReelsStackNavigator = () => (
    <Stack.Navigator initialRouteName="Reels">
        <Stack.Screen 
            name="Reels" 
            component={ReelsScreen} 
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
)