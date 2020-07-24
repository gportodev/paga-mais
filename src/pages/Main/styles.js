import styled from 'styled-components/native'

export const List = styled.View`
  flex-direction: column;
`

export const Button = styled.TouchableOpacity`
  border-radius: 6;
  width: 300px;
  height: 70px;
  background: #FFFFFF;
  margin: 30px 0px 5px;
  flex-direction: row;
`

export const Cover = styled.View`
  margin-top: 1px;
  width: 63px;
  height: 68px;
  background: #8D5C09;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  border-left-width: 1px;
  border-left-color: #FFF;
  justify-content: center;
  align-items: center;
`

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
`

export const Name = styled.Text`
  font-size: 24px;
  color: #8D5C09;
  padding-left: 12px;
  padding-top: 17px;

`
