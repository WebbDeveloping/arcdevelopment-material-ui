import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';

import analytics from '../assets/analytics.svg';
import seo from '../assets/seo.svg';
import outreach from '../assets/outreach.svg';
import ecommerce from '../assets/ecommerce.svg';

import CallToAction from './ui/CallToAction';

const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: '40em'
  },
  arrowContainer: {
    marginTop: '0.5em'
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em'
    }
  },
  paragraphContainer: {
    maxWidth: '30em'
  }
}));

const Websites = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction='column'>
      <Grid
        item
        container
        direction='row'
        justify={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
      >
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              style={{ marginRight: '1em', marginLeft: '-3.5em' }}
              component={Link}
              to='/mobileapps'
              onClick={() => props.setSelectedIndex(2)}
            >
              <img src={backArrow} alt='back to mobile apps page' />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='h2'>
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Having a website is a necessity in todays business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you are the best at it
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              laudantium illum autem, in voluptas reprehenderit expedita
              molestias error eius sequi temporibus earum? Excepturi a
              voluptatum quidem voluptates doloribus fuga placeat.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to='/services'
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src={forwardArrow} alt='go to services page' />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      {/* -----analytics----- */}
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems='center'
        className={classes.rowContainer}
        style={{ marginTop: '15em' }}
      >
        <Grid item>
          <Grid container direction='column'></Grid>
        </Grid>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography
                align={matchesSM ? 'center' : undefined}
                variant='h4'
                gutterBottom
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                style={{ marginLeft: '-2.75em' }}
                alt='graph with magifyglass'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography variant='body1' align={matchesSM ? 'center' : undefined}>
            Knowledge is power, and data is 21st century gold. Analyzing this
            data can reveal hidden patters and trends in your business,
            empowering you to make smarter decisions with measurable effects
          </Typography>
        </Grid>
      </Grid>
      {/* -----e commerce----- */}
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems='center'
        justify='flex-end'
        className={classes.rowContainer}
        style={{ marginTop: '15em', marginBottom: '15em' }}
      >
        <Grid item>
          <Grid container direction='column'></Grid>
        </Grid>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt='world outline made of dollar signs' />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.paragraphContainer}
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
        >
          <Typography
            variant='body1'
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            Its no secret that people like to shop online.
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            In 2017 over $2.3 trillion was spent in e-commerce, and its time for
            your slice of that pie
          </Typography>
        </Grid>
      </Grid>
      {/* -----outreach----- */}
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems='center'
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction='column'></Grid>
        </Grid>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography
                align={matchesSM ? 'center' : undefined}
                variant='h4'
                gutterBottom
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src={outreach} alt='megaphone' />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.paragraphContainer}
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
        >
          <Typography variant='body1' align={matchesSM ? 'center' : undefined}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem omnis quia consequuntur cupiditate cumque velit,
            obcaecati voluptate quae illo temporibus doloremque minima, itaque
            dolore natus. Officia voluptates eius laudantium distinctio.
          </Typography>
        </Grid>
      </Grid>
      {/* -----SEO----- */}
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems='center'
        justify='flex-end'
        className={classes.rowContainer}
        style={{ marginTop: '15em', marginBottom: '15em' }}
      >
        <Grid item>
          <Grid container direction='column'></Grid>
        </Grid>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                Search Engine <br />
                Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt='website standing on winners podium' />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography variant='body1' paragraph>
            How often have you ever been to the second page of Google Results?
          </Typography>
          <Typography variant='body1' paragraph>
            If you are like us, probably never.
          </Typography>
          <Typography variant='body1' paragraph>
            Customers dont go there either, so we make sure your website is
            designed to end up on top.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};
export default Websites;
