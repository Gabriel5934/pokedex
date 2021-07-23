// React
import { Link } from 'react-router-dom'

// Components
import LoadMoreBtn from './LoadMoreBtn'

// MaterialUI
import { Typography, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  dark: {
    backgroundColor: '#1f1b24 !important',
    color: '#fff',
  },
  darker: {
    backgroundColor: '#121212 !important',
    color: '#fff',
  },
  pokemon_name: {
    textAlign: 'center',
  },
  gutterBottom: {
    padding: '24px 0 24px 0',
  },
  text_center: {
    textAlign: 'center',
  },
  no_decoration: {
    textDecoration: 'none',
  },
  pokemon_image: {
    width: '340px',
  },
}))

function PokemonCard(props) {
  const classes = useStyles()

  return (
    <div
      className={
        props.theme === 'dark'
          ? [classes.gutterBottom, classes.darker, classes.text_center].join(
              ' '
            )
          : [classes.gutterBottom, classes.text_center].join(' ')
      }
    >
      {props.noResults && <Typography>Sem resultados</Typography>}
      <Grid
        container
        justifyContent="center"
        spacing={6}
        className={classes.gutterBottom}
      >
        {props.pokemons.map((pokemon) => {
          if (parseInt(pokemon.number) < 899) {
            return (
              <Grid key={pokemon.name} item>
                <Link
                  to={`../pokemon/${pokemon.name.toLowerCase()}`}
                  className={classes.no_decoration}
                >
                  <Paper
                    elevation={3}
                    className={props.theme === 'dark' ? classes.dark : null}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.number}.png`}
                      alt={pokemon.name}
                      className={classes.pokemon_image}
                    />
                    <Typography
                      variant="h6"
                      className={
                        props.theme === 'dark'
                          ? [classes.dark, classes.pokemon_name].join(' ')
                          : classes.pokemon_name
                      }
                    >
                      {`${pokemon.name} #${pokemon.number}`}
                    </Typography>
                  </Paper>
                </Link>
              </Grid>
            )
          } else {
            return ''
          }
        })}
      </Grid>
      {props.button && (
        <LoadMoreBtn loadMore={props.loadMore} endOflist={props.endOflist} />
      )}
    </div>
  )
}

export default PokemonCard
