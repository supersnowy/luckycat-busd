import Grid from "@mui/material/Grid";

import { config } from "../../config";
import esIcon from "../assets/ESIcon.png";
import tgIcon from "../assets/TGIcon.png";
import twIcon from "../assets/TWIcon.png";
import disIcon from "../assets/TinyDiscord.png";

export default function Footer() {
  return (
    <Grid container justifyContent="center" spacing={2} marginTop={4}>
      <Grid item>
        <a href={config.scanLink} target="__blank">
          <img src={esIcon} alt="" width={48} height={48} />
        </a>
      </Grid>
      <Grid item>
        <a href="https://t.me/LuckyCatBUSD" target="__blank">
          <img src={tgIcon} alt="" width={48} height={48} />
        </a>
      </Grid>
      <Grid item>
        <a href="https://twitter.com/LuckyCatBUSD" target="__blank">
          <img src={twIcon} alt="" width={48} height={48} />
        </a>
      </Grid>
      <Grid item>
        <a href="https://discord.gg/Q4SSpzFCH2" target="__blank">
          <img src={disIcon} alt="" width={48} height={48} />
        </a>
      </Grid>
    </Grid>
  );
}
