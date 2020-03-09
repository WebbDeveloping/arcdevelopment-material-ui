import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/Styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em'
    }
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit'
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0
    }
  }
}));

const CallToAction = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid
      direction={matchesSM ? 'column' : 'row'}
      container
      className={classes.background}
      alignItems='center'
      justify={matchesSM ? 'center' : 'space-between'}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          textAlign: matchesSM ? 'center' : 'inherit'
        }}
      >
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2'>
              Simple Software. <br />
              Revolutionary Results.
            </Typography>
            <Typography variant='subtitle2' style={{ fontSize: '1.5em' }}>
              Take advantage of the 21st Century
            </Typography>
            <Grid container justify={matchesSM ? 'center' : undefined} item>
              <Button
                component={Link}
                to='/revolution'
                variant='outlined'
                className={classes.learnButton}
                onClick={()=>props.setValue(2)}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                &rarr;
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to='/estimate'
          variant='container'
          className={classes.estimateButton}
          onClick={()=>props.setValue(5)}
        >
          {' '}
          Free Estimate
        </Button>
      </Grid>
      {/* <div className={classes.background} /> */}
    </Grid>
  );
};
export default CallToAction;
