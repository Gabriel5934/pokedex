// Stylesheets
import '../index.css'

// MaterialUI
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  banner: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '300px',
  },
  banner_image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    filter: 'brightness(25%)',
  },
  banner_title: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Pokemon',
    fontSize: '96px',
    color: '#f7d421',
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: '#2e5ba4',
  },
})

function Banner(props) {
  const classes = useStyles()

  return (
    <div className={classes.banner}>
      <img
        className={classes.banner_image}
        alt="Gif Pokémon"
        src="https://media.giphy.com/media/mMvxVzlCFabUWnuyBA/source.gif"
      />
      <h1 className={classes.banner_title}>Pokédex</h1>
    </div>
  )
}

export default Banner
