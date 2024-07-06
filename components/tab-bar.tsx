import { NavigationHelpers, ParamListBase, TabNavigationState } from "@react-navigation/native";
import { BottomTabDescriptorMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { Pressable, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { XStack } from "tamagui";

interface TabBarProps {
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

export default function TabBar({state, descriptors, navigation}: TabBarProps){
    const icons = {
        index: (props: any) => <Feather name="home" size={24} color={"white"} {...props}/>,
        workouts: (props: any) => <Feather name="zap" size={24} color={"white"} {...props}/>,
        settings: (props: any) => <Feather name="settings" size={24} color={"white"} {...props}/>
    }

    return(
        <XStack 
            display="flex"
            backgroundColor={"#1a1a1a"}
            padding={10}
        >
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
                    
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true
                    })

                    if(!isFocused && !event.defaultPrevented){
                        navigation.navigate(route.name)
                    }
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key
                    })
                }

                return (
                    <Pressable
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{flex: 1, alignItems: 'center'}}
                    >
                        {icons[(route.name as "index"|"workouts"|"settings")]({color: isFocused ? 'white' : '#555'})}
                        <Text style={{color: isFocused ? 'white' : '#555'}}>
                            {label}
                        </Text>
                    </Pressable>
                )
            })}
        </XStack>
    )
}