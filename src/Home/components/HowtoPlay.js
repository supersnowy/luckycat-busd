import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";

const CardWrapper = styled(Card)({
  background: "rgb(255 252 248)",
  marginBottom: 24,
});

const nutritionFacts = [
  {
    label: "Feed your cats, six times a week.",
    
  },
  {
    label: "Pet your cats, one time a week.",
    
  },
];

export default function HowtoPlay() {
  return (
    <CardWrapper>
      <CardContent>
        <Typography variant="h5" borderBottom="6px solid" paddingBottom={1}>
          How to Play
        </Typography>
        <Box paddingTop={2}>
          {nutritionFacts.map((f) => (
            <Grid container key={f.label} justifyContent="space-between">
              <Typography variant="body1" gutterBottom>
                 {f.label}
            </Typography>
            </Grid>
          ))}
          <Typography>
            If you pet your cats too much you will stop earning!
          </Typography>
        </Box>
      </CardContent>
    </CardWrapper>
  );
}
