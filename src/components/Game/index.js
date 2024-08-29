import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import {Component} from 'react'
import Games from '../Games'
import WinorLossorDraw from '../WinorLossorDraw'

import {
  MainContainer,
  Header,
  HeaderTitles,
  ScorePara,
  ButtonContainer,
  RulesButton,
  PopupContainer,
  RulesImage,
  TriggerButton,
  GameOptionsList,
  GameViewContainer,
  Score,
  Heading,
} from './styledComponents'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  win: 'YOU WON',
  lost: 'YOU LOSE',
  draw: 'IT IS DRAW',
}

class Game extends Component {
  state = {
    score: 0,
    gameStatus: gameStatusConstants.inProgress,
    userChoice: '',
    robotChoice: '',
    displayResults: this.props.choicesList,
    count: 0,
  }

  onClickSetUserChoice = val => {
    const {choicesList} = this.props
    const opponentChoiceIndex = Math.floor(Math.random() * 3)
    const opponentChoice = choicesList[opponentChoiceIndex]

    let userChoiceUrl = ''
    if (val === 'PAPER') {
      userChoiceUrl =
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png'
    } else if (val === 'ROCK') {
      userChoiceUrl =
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png'
    } else {
      userChoiceUrl =
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png'
    }

    this.setState({
      userChoice: userChoiceUrl,
      robotChoice: opponentChoice.imageUrl,
    })

    if (
      (val === 'PAPER' && opponentChoice.id === 'ROCK') ||
      (val === 'ROCK' && opponentChoice.id === 'SCISSORS') ||
      (val === 'SCISSORS' && opponentChoice.id === 'PAPER')
    ) {
      this.setState(prevState => ({
        count: prevState.count + 1,
        gameStatus: gameStatusConstants.win,
      }))
    } else if (val === opponentChoice.id) {
      this.setState({
        gameStatus: gameStatusConstants.draw,
      })
    } else {
      this.setState(prevState => ({
        count: prevState.count - 1,
        gameStatus: gameStatusConstants.lost,
      }))
    }
  }

  renderGameInProgress = () => {
    const {displayResults} = this.state
    return (
      <GameOptionsList>
        {displayResults.map(eachOption => (
          <Games
            key={eachOption.id}
            optionDetails={eachOption}
            onClickSetUserChoice={this.onClickSetUserChoice}
          />
        ))}
      </GameOptionsList>
    )
  }

  playAgain = () => {
    this.setState({
      gameStatus: gameStatusConstants.inProgress,
      userChoice: '',
      robotChoice: '',
    })
  }

  renderGameWon = () => {
    const {userChoice, robotChoice, gameStatus} = this.state
    return (
      <GameViewContainer>
        <WinorLossorDraw
          userChoice={userChoice}
          robotChoice={robotChoice}
          gameStatus={gameStatus}
          playAgain={this.playAgain}
        />
      </GameViewContainer>
    )
  }

  renderGameLost = () => {
    const {userChoice, robotChoice, gameStatus} = this.state
    return (
      <GameViewContainer>
        <WinorLossorDraw
          userChoice={userChoice}
          robotChoice={robotChoice}
          gameStatus={gameStatus}
          playAgain={this.playAgain}
        />
      </GameViewContainer>
    )
  }

  renderGameDraw = () => {
    const {userChoice, robotChoice, gameStatus} = this.state
    return (
      <GameViewContainer>
        <WinorLossorDraw
          userChoice={userChoice}
          robotChoice={robotChoice}
          gameStatus={gameStatus}
          playAgain={this.playAgain}
        />
      </GameViewContainer>
    )
  }

  renderGame = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderGameInProgress()
      case gameStatusConstants.win:
        return this.renderGameWon()
      case gameStatusConstants.lost:
        return this.renderGameLost()
      case gameStatusConstants.draw:
        return this.renderGameDraw()
      default:
        return null
    }
  }

  render() {
    const {count} = this.state
    return (
      <MainContainer>
        <Header>
          <HeaderTitles>
            <Heading>Rock Paper Scissors</Heading>
          </HeaderTitles>
          <ScorePara>
            <p>Score</p>
            <Score>{count}</Score>
          </ScorePara>
        </Header>
        <GameViewContainer>{this.renderGame()}</GameViewContainer>
        <ButtonContainer>
          <PopupContainer>
            <Popup
              modal
              trigger={<RulesButton type="button">Rules</RulesButton>}
            >
              {close => (
                <div>
                  <TriggerButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </TriggerButton>
                  <div>
                    <RulesImage
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                    />
                  </div>
                </div>
              )}
            </Popup>
          </PopupContainer>
        </ButtonContainer>
      </MainContainer>
    )
  }
}

export default Game
