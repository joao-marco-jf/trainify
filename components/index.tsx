import { H1, H2, Paragraph, styled, YStack } from "tamagui";

export const Content = styled(YStack, {
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#1f1f1f',
})

export const ThemedH1 = styled(H1, {
    letterSpacing: -4,
})

export const ThemedH2 = styled(H2, {
    letterSpacing: -3,
})

export const ThemedParagraph = styled(Paragraph, {
    letterSpacing: -1,
})