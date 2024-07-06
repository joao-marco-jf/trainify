import { Content, ThemedH1 } from "@/components";
import { StatusBar } from "expo-status-bar";

export default function SettingsTab(){
    return(
        <>
            <StatusBar style="light" />
            <Content>
                <ThemedH1>Settings</ThemedH1>
            </Content>
        </>
    )
}