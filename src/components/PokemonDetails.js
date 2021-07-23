// React
import { Link } from 'react-router-dom'

// MaterialUI
import { Typography, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
  base: {
    backgroundColor: '#f5f5f5',
    margin: '16px 200px 16px 200px',
  },
  base_small: {
    backgroundColor: '#f5f5f5',
    margin: '16px',
  },
  pokemon_name: {
    textAlign: 'center',
    backgroundColor: '#2e5ba4',
    color: '#fff',
    padding: '5px 0 5px 0',
  },
  pokemon_info: {
    color: '#fff',
  },
  dark: {
    backgroundColor: '#1f1b24 !important',
    color: '#fff',
  },
  inner_paper: {
    margin: '16px',
  },
  grid_item: {
    width: '50%',
  },
  grid_item_small: {
    width: '70%',
  },
}))

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function PokemonDetails(props) {
  const pokemonData = props.pokemonData
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:1330px)')

  return (
    <div style={{ height: '100%' }}>
      {pokemonData !== undefined && (
        <div
          className={matches ? classes.base_small : classes.base}
          style={{ backgroundColor: 'transparent' }}
        >
          <Paper className={props.theme === 'dark' && classes.dark}>
            <Grid
              container
              justifyContent="center"
              spacing={2}
              alignItems={'center'}
              direction={matches ? 'column' : 'row'}
            >
              <Grid
                item
                className={
                  matches ? classes.grid_item_small : classes.grid_item
                }
                xs
              >
                <Paper
                  className={classes.inner_paper}
                  style={{
                    backgroundImage: 'url(https://i.imgur.com/Edg2E1y.jpg)',
                  }}
                >
                  <img
                    style={{ width: '100%' }}
                    src={pokemonData.sprite}
                    alt={capitalize(pokemonData.name)}
                  />
                  <Typography variant="h4" className={classes.pokemon_name}>
                    {capitalize(pokemonData.name)}
                  </Typography>
                </Paper>
              </Grid>
              <Grid
                item
                className={
                  matches ? classes.grid_item_small : classes.grid_item
                }
                xs
              >
                <Paper
                  className={classes.inner_paper}
                  style={{
                    padding: '16px',
                    backgroundColor: '#2E5BA4',
                  }}
                >
                  <Typography variant="h4" className={classes.pokemon_info}>
                    Peso:{' '}
                    {pokemonData.weight !== 1
                      ? `${pokemonData.weight} quilos`
                      : `${pokemonData.weight} quilo`}
                  </Typography>
                  <Typography variant="h4" className={classes.pokemon_info}>
                    Tamanho:{' '}
                    {pokemonData.size !== 1
                      ? `${pokemonData.size} metros`
                      : `${pokemonData.size} metro`}
                  </Typography>
                  <Typography variant="h4" className={classes.pokemon_info}>
                    Tipos:{' '}
                    {pokemonData.types.map((type, pos) => {
                      if (pos !== pokemonData.types.length - 1) {
                        return (
                          <span>
                            <Link to={`/tipo/${type}`}>{capitalize(type)}</Link>
                            ,{' '}
                          </span>
                        )
                      } else {
                        return (
                          <Link to={`/tipo/${type}`}>{capitalize(type)}</Link>
                        )
                      }
                    })}
                  </Typography>
                  <Typography variant="h4" className={classes.pokemon_info}>
                    Habilidades:{' '}
                    {pokemonData.abilities.map((ability, pos) => {
                      if (pos !== pokemonData.abilities.length - 1) {
                        return `${capitalize(ability)}, `
                      } else {
                        return capitalize(ability)
                      }
                    })}
                  </Typography>
                  <Typography variant="h4" className={classes.pokemon_info}>
                    Velocidade:{' '}
                    {pokemonData.stats.find((i) => i.name === 'speed').value}
                  </Typography>
                  <Typography variant="h4" className={classes.pokemon_info}>
                    Defesa:{' '}
                    {pokemonData.stats.find((i) => i.name === 'defense').value}
                  </Typography>
                  <Typography variant="h4" className={classes.pokemon_info}>
                    Ataque:{' '}
                    {pokemonData.stats.find((i) => i.name === 'attack').value}
                  </Typography>
                  <Typography variant="h4" className={classes.pokemon_info}>
                    HP: {pokemonData.stats.find((i) => i.name === 'hp').value}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </div>
      )}
    </div>
  )
}

export default PokemonDetails
