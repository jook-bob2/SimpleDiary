import React from "react";
import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #000000;
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

export default function Button({ children, onPress }) {
  return (
    <Container onPress={onPress}>
      <Label>{children}</Label>
    </Container>
  );
}
