import Button from '@material-ui/core/Button'

function LoadMoreBtn(props) {
  return (
    <Button variant="contained" color="primary" onClick={props.loadMore}>
      CARREGAR MAIS
    </Button>
  )
}

export default LoadMoreBtn
