import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import lightbulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg';
import roots from '../assets/root.svg';

import documentsAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data.json';
import automationAnimation from '../animations/automationAnimation/data.json';
import uxAnimation from '../animations/uxAnimation/data'

const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: '40em'
  },
  arrowContainer: {
    marginTop: '0.5em'
  },
  mainContainer: {
    padding: '2em 5em 10em 5em'
  },
  itemContainer: {
    maxWidth: '40em'
  }
}));

const CustomSoftware = props => {
  const classes = useStyles();

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item container direction='row'>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
            component={Link}
            to='/services'
            onClick={() => props.setSelectedIndex(0)}
          >
            <img src={backArrow} alt='back to services page' />
          </IconButton>
        </Grid>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography variant='h2'>Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              Whether we're replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              laudantium illum autem, in voluptas reprehenderit expedita
              molestias error eius sequi temporibus earum? Excepturi a
              voluptatum quidem voluptates doloribus fuga placeat.
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              fugit ea odit qui? Possimus aspernatur quae rerum error placeat
              sunt, inventore voluptatum, ex eum repellendus vero ratione
              dolores porro quis!
            </Typography>
            <Typography variant='body1' paragraph>
              We create exactly what you want, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            component={Link}
            to='/mobileapps'
            onClick={() => props.setSelectedIndex(2)}
          >
            <img src={forwardArrow} alt='forward button' />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction='row'
        justify='center'
        style={{ marginTop: '15em', marginBottom: '20em' }}
      >
        <Grid
          item
          container
          direction='column'
          md
          alignItems='center'
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant='h4'>Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt='lightbulb image' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          md
          alignItems='center'
          style={{ maxWidth: '40em' }}
        >
      
          <Grid item>
            <Typography variant='h4'>Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt='stopwatch image' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          md
          alignItems='center'
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant='h4'>Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt='cash image' />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction='row' justify='space-around'>
        <Grid item container className={classes.itemContainer} md>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4'>Digital Documents & data</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Reduce Erros. Reduce Waste. Reduce Costs
              </Typography>
              <Typography variant='body1' paragraph>
                Billions are spent annually on the purchasing, pringing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography variant='body1' paragraph>
                By utilizing digital forms and docuemnts you can remove these
                obsolete expenses, acceleerate your communication, and help the
                Earth
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>

        <Grid item container className={classes.itemContainer} md>
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' align='right'>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' align='right' paragraph>
                Whether you are a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliablity.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction='row' style={{marginTop: '20em', marginBottom: '20em'}}>
        <Grid item container direction='column' alignItems='center'>
          <Grid item>
            <img src={roots} alt='tree' height='450em' width='450em' />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant='h4' align='center' gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography variant='body1' align='center' paragraph>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant='body1' align='center' paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction='row' justify='space-around'>
        <Grid item container className={classes.itemContainer} md>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4'>Automation</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Why waste time when you dont have to?
              </Typography>
              <Typography variant='body1' paragraph>
                We can help you identify processes with time or event based
                actions which can now easily be automated
              </Typography>
              <Typography variant='body1' paragraph>
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>

        <Grid item container className={classes.itemContainer} md>
          <Grid item md>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' align='right'>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' align='right' paragraph>
                A good design that isnt usable isnt a good design
              </Typography>
              <Typography variant='body1' align='right' paragraph>
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography variant='body1' align='right' paragraph>
                By prioritizing users and the real ways they interact with
                technology we're able to develop unique, personable experiences
                that solve probelms rather than creating new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default CustomSoftware;
