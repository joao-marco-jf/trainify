import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import TabBar from "@/components/tab-bar";

export default function TabsLayout(){
    return(
        <Tabs tabBar={(props) => <TabBar {...props}/>}>
            <Tabs.Screen name="index" options={{
                title: 'Home',
                tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
                headerShown: false
            }}/>
            <Tabs.Screen name="workouts" options={{
                title: 'Workouts',
                tabBarIcon: ({ color }) => <Feather name="zap" size={24} color={color} />,
                headerShown: false
            }}/>
            <Tabs.Screen name="settings" options={{
                title: 'Settings',
                tabBarIcon: ({ color }) => <Feather name="settings" size={24} color={color} />,
                headerShown: false
            }}/>
        </Tabs>
    )
}