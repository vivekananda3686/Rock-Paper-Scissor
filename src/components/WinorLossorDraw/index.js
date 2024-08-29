import {
  WinorLossorDrawContainer,
  GameItemName,
  Container,
  GameItemButton,
  EachPlayer,
  PlayerHeader,
  EachPlayerChoice,
} from './styledComponents'

const WinorLossorDraw = props => {
  const {userChoice, robotChoice, gameStatus, playAgain} = props

  const changeGameStatus = () => {
    playAgain()
  }

  return (
    <Container>
      <WinorLossorDrawContainer>
        <EachPlayer>
          <PlayerHeader>YOU</PlayerHeader>
          <EachPlayerChoice src={userChoice} alt="your choice" />
        </EachPlayer>
        <EachPlayer>
          <PlayerHeader>OPPONENT</PlayerHeader>
          <EachPlayerChoice src={robotChoice} alt="opponent choice" />
        </EachPlayer>
      </WinorLossorDrawContainer>
      <GameItemName>{gameStatus}</GameItemName>
      <GameItemButton onClick={changeGameStatus}>PLAY AGAIN</GameItemButton>
    </Container>
  )
}

export default WinorLossorDraw
