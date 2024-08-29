import {
  GamesMainContainer,
  GameItemName,
  GameImage,
  GameButton,
} from './styledComponents'

const Games = props => {
  const {optionDetails, onClickSetUserChoice} = props
  const {id, imageUrl, name} = optionDetails

  const onClickUserChoice = () => {
    onClickSetUserChoice(id)
  }

  return (
    <GamesMainContainer>
      <GameItemName>
        <GameButton onClick={onClickUserChoice} data-testid={name}>
          <GameImage src={imageUrl} alt={id} />
        </GameButton>
      </GameItemName>
    </GamesMainContainer>
  )
}

export default Games
