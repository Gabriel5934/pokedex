import Button from '@material-ui/core/Button'

function LoadMoreBtn(props) {
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={props.endOflist}
      onClick={props.loadMore}
    >
      CARREGAR MAIS
    </Button>
  )
}

export default LoadMoreBtn
