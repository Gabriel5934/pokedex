import Button from '@material-ui/core/Button'

function LoadMoreBtn(props) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={props.onClick}
      disabled={props.endOflist}
    >
      CARREGAR MAIS
    </Button>
  )
}

export default LoadMoreBtn
