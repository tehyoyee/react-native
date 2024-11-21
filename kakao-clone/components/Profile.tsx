import { Image, Text, View } from "react-native"
import styled from 'styled-components/native';
import Margin from "./Margin"

type ProfileProps = {
    uri: string,
    name: string,
    introduction: string,
    isMe: boolean,
};

const Container = styled.View`
    flex-direction: row;
`;

const ProfileImage = styled.Image<{ size:number }>`
    width: ${(props)=>props.size}px;
    height: ${(props)=>props.size}px;
    border-radius: ${(props)=>props.size * 0.4}px;
`;

const TextContainer = styled.View`
    justify-content: center;
    margin-left: 10px;
`
const NameText = styled.Text<{ isMe: boolean }>`
    font-weight: ${(props) => props.isMe ? "bold" : "normal"};
    font-size: ${(props) => props.isMe ? 16 : 15}px;
`;
const IntroductionText = styled.Text<{ isMe: boolean }>`
    font-size: ${(props)=> props.isMe ? 12 : 11}px;
    color: gray;
`;

export default ({ uri, name, introduction, isMe }: ProfileProps)  => {
    const size = isMe ? 50 : 40;
    return (
        <Container>
            <ProfileImage source={{ uri: uri }} size={ size } />
            <TextContainer>
                <NameText isMe={isMe}>{ name }</NameText>
                {introduction && 
                    <View>
                        <Margin height={ isMe ? 6 : 2 } />
                        <IntroductionText isMe={ isMe }>{introduction}</IntroductionText>
                    </View>
                }
            </TextContainer>
        </Container>
    )
}