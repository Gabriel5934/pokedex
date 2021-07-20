import { Typography, Grid } from "@material-ui/core";

function PokemonCard(props) {
  return (
    <div>
      <Grid container justifyContent="center" spacing={6}>
        {[0, 1, 2].map((value) => (
          <Grid key={value} item>
            <div
              style={{
                backgroundColor: "#DCFFE4",
                borderRadius: "12px",
              }}
            >
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png"
                alt="Rayquaza"
                style={{
                  width: "340px",
                }}
              />
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                }}
              >
                Rayquaza #384
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PokemonCard;
