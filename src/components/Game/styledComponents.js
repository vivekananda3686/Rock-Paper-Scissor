import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  padding: 30px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ffffff;
  padding: 10px;
`

export const HeaderTitles = styled.div`
  color: #ffffff;
  padding: 10px;
`

export const Heading = styled.h1`
  font-family: Roboto;
`

export const ScorePara = styled.div`
  color: #223a5f;
  background-color: #ffffff;
  text-align: center;
  min-height: 30px;
  min-width: 30px;
  max-width: 100px;
  max-height: 100px;
  padding: 10px;
  border-radius: 10px;
  font-family: Roboto;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 10px;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  padding: 10px;
  text-align: center;
  border-width: 0px;
`

export const PopupContainer = styled.div``

export const RulesImage = styled.img`
  height: 100%;
  width: 100%;
`

export const TriggerButton = styled.button`
  background-color: transparent;
  position: absolute;
  right: 0;
  border-width: 0px;
`

export const GameOptionsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  padding-left: 100px;
  padding-right: 100px;
`

export const GameViewContainer = styled.div``

export const Score = styled.p`
  font-family: Roboto;
`
