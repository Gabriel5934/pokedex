// React
import { Link } from 'react-router-dom'

// Components
import LoadMoreBtn from './LoadMoreBtn'

// Stylesheets
import classes from './styles/PokemonCard.module.css'

// MaterialUI
import { Typography, Grid, Paper } from '@material-ui/core'

function PokemonCard(props) {
  return (
    <div className={[classes.text_center, classes.gutterBottom].join(' ')}>
      <Grid
        container
        justifyContent="center"
        spacing={6}
        className={classes.gutterBottom}
      >
        {props.pokemons.map((pokemon) => {
          if (
            parseInt(
              pokemon.number ||
                pokemon.pokemon.url
                  .split('/')
                  .filter((i) => i !== '')
                  .pop()
            ) < 899
          ) {
            return (
              <Grid key={pokemon.name || pokemon.pokemon.name} item>
                <Link
                  to={`../pokemon/${
                    pokemon.name.toLowerCase() ||
                    pokemon.pokemon.name.toLowerCase().replace(' ', '-')
                  }`}
                  className={classes.no_decoration}
                >
                  <Paper
                    elevation={3}
                    className={
                      props.theme === 'dark' ? classes.dark : classes.light
                    }
                  >
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                        pokemon.number ||
                        pokemon.pokemon.url
                          .split('/')
                          .filter((i) => i !== '')
                          .pop()
                      }.png`}
                      alt={pokemon.name || pokemon.pokemon.name}
                      style={{
                        width: '340px',
                      }}
                    />
                    <Typography
                      variant="h6"
                      className={
                        props.theme === 'dark'
                          ? [classes.dark, classes.pokemon_name].join(' ')
                          : [classes.light, classes.pokemon_name].join(' ')
                      }
                    >
                      {`${pokemon.name || pokemon.pokemon.name} #${
                        pokemon.number ||
                        pokemon.pokemon.url
                          .split('/')
                          .filter((i) => i !== '')
                          .pop()
                      }`}
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
