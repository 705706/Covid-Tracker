import {Card, CardContent, Typography, Grid} from '@mui/material/';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards=( {data: {cases,recovered,deaths,active}})=>{
  console.log(cases);

  if(!cases){
    return 'Loading....';
  }
  
  return(
   <div className={styles.container}>
    <Grid container spacing={3} justify="center">
      <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.active)}>
        <CardContent>
          <Typography color="textSecondary"  gutterBottom>Infected</Typography>
          <Typography variant="h5"  gutterBottom><CountUp start={0} end={cases} duration={2.5} separator=','/></Typography>
          <Typography coir="textSecondary">{active}</Typography>
          <Typography variant="body2">Number of active cases of COVID-19 </Typography>
        </CardContent>
      </Grid>

      <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
        <CardContent>
          <Typography color="textSecondary"  gutterBottom>Recovered</Typography>
          <Typography variant="h5"  gutterBottom><CountUp start={0} end={recovered} duration={2.5} separator=','/></Typography>
          <Typography coir="textSecondary">REAL DATE</Typography>
          <Typography variant="body2">Number of recovries from COVID-19 </Typography>
        </CardContent>
      </Grid>

      <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
        <CardContent>
          <Typography color="textSecondary"  gutterBottom>Deaths</Typography>
          <Typography variant="h5"  gutterBottom><CountUp start={0} end={deaths} duration={2.5} separator=','/></Typography>
          <Typography coir="textSecondary">REAL DATE</Typography>
          <Typography variant="body2">Number of deaths caused by COVID-19 </Typography>
        </CardContent>
      </Grid>
    </Grid>
   </div>
  )
}
export default Cards;