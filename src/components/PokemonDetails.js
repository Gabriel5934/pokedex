// React
import { Link } from 'react-router-dom'

// MaterialUI
import { Typography, Grid, Paper } from '@material-ui/core'

// Stylesheets
import classes from './styles/PokemonDetails.module.css'

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function PokemonDetails(props) {
  const pokemonData = props.pokemonData
  console.log(pokemonData)

  return (
    <div>
      {pokemonData !== undefined && (
        <div
          className={classes.base}
          style={{ backgroundColor: 'transparent' }}
        >
          <Paper className={props.theme === 'dark' && classes.dark}>
            <Grid
              container
              justifyContent="center"
              spacing={2}
              alignItems={'center'}
            >
              <Grid item style={{ width: '50%' }}>
                <Paper
                  style={{
                    margin: '16px',
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
              <Grid item style={{ width: '50%' }}>
                <Paper
                  style={{
                    padding: '16px',
                    margin: '16px',
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
                            <Link>{capitalize(type)}</Link>,{' '}
                          </span>
                        )
                      } else {
                        return <Link>{capitalize(type)}</Link>
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
