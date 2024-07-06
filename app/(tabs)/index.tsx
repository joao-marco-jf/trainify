import { Content, ThemedH1 } from "@/components";
import { StatusBar } from 'expo-status-bar';

export default function HomeTab(){
    return(
        <>
            <StatusBar style="light" />
            <Content>
                <ThemedH1>Home</ThemedH1>
            </Content>
        </>
    )
}