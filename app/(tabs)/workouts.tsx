import { Content, ThemedH1 } from "@/components";
import { StatusBar } from "expo-status-bar";

export default function WorkoutsTab(){
    return(
        <>
            <StatusBar style="light" />
            <Content>
                <ThemedH1>Workouts</ThemedH1>
            </Content>
        </>
    )
}