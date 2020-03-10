import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import history from '../assets/history.svg';
import profile from '../assets/founder.jpg';
import yearbook from '../assets/yearbook.svg';
import puppy from '../assets/puppy.svg';
import CallToAction from './ui/CallToAction';

const useStyles = makeStyles(theme => ({
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em'
    }
  },
  avatar: {
    height: '25em',
    width: '25em',
    [theme.breakpoints.down('sm')]: { 
        height: '20em',
        width: '20em',
        maxHeight: '300px',
        maxWidth: '300px'
    }

  }
}));

const About = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid item container direction='column'>
      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography align={matchesMD ? 'center' : undefined} variant='h2'>About Us</Typography>
      </Grid>
      <Grid
        item
        container
        justify='center'
        className={classes.rowContainer}
        style={{ marginTop: '3em' }}
      >
        <Typography
          variant='h4'
          align='center'
          className={classes.missionStatement}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus autem
          esse veniam fugit doloremque nisi blanditiis eveniet tempora ducimus.
          Fugiat beatae eius magnam eum quisquam distinctio ut aspernatur dolore
          tenetur!
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: '10em', marginBottom: '10em' }}
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justify='space-around'
      >
        <Grid item>
          <Grid
            item
            container
            direction='column'
            lg
            style={{ maxWidth: '35em' }}
          >
            <Grid item>
              <Typography
                alignItems={matchesMD ? 'center' : undefined}
                variant='h4'
                gutterBottom
              >
                Histroy
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                alignItems={matchesMD ? 'center' : undefined}
                style={{ fontWeight: 700, fontStyle: 'italic' }}
              >
                We're the new kid on the block
              </Typography>
              <Typography
                variant='body1'
                paragraph
                alignItems={matchesMD ? 'center' : undefined}
              >
                Founded in 2019, we're ready to get our hands on the worlds
                business problems.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                alignItems={matchesMD ? 'center' : undefined}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                eligendi, odit illum cum laborum consequatur. Accusamus tenetur
                eos, quibusdam at velit voluptates eveniet quae labore! Quaerat,
                ipsa. Enim, sit esse.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                alignItems={matchesMD ? 'center' : undefined}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                minima doloremque atque laboriosam, dignissimos sapiente, libero
                aliquam vero error eum cupiditate maxime porro dicta. Fugiat
                cupiditate sapiente eius in voluptas?
              </Typography>
              <Typography
                variant='body1'
                paragraph
                alignItems={matchesMD ? 'center' : undefined}
              >
                All this change can be a lot to keep up with, and thats where we
                come in
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify='center' lg>
            <img
              src={history}
              alt='pen sitting on top of book'
              style={{ maxHeight: matchesMD ? 200 : '22em' }}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* -----TeamSection----- */}
      <Grid
        item
        container
        alignItems='center'
        direction='column'
        className={classes.rowContainer}
        style={{ marginBottom: '15em' }}
      >
        <Grid item>
          <Typography align='center' variant='h4' gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' paragraph align='center'>
            Joe Dirt, CEO
          </Typography>
          <Typography variant='body1' paragraph align='center'>
            I started coding in 2018
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt='founder' src={profile} className={classes.avatar} />
        </Grid>
        <Grid item container justify={matchesMD ? 'center' : undefined}>
        <Hidden lgUp>
            <Grid item lg style={{ maxWidth: '45em', padding: '1.25em' }}>
              <Typography variant='body1' align='center' paragraph>
                I taught myself basic coding from a library book in the third
                grade, and ever since then my passion has solely been set on
                learning= learning comouters, learning mathematics and
                philosophy, study design, always alwasy learning.
              </Typography>
              <Typography variant='body1' align='center' paragraph>
                Now I am ready to apply everything i have learned and to help
                others with the intuition I have developed
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction='column'
            lg
            alignItems={matchesMD ? 'center' : undefined}
            style={{marginBottom: matchesMD ? '2.5em' : 0}}
          >
            <Grid item>
              <img src={yearbook} alt='yearbook page'  style={{ maxHeight: matchesMD ? 300 : undefined }} />
            </Grid>
            <Grid item>
              <Typography variant='caption'>
                a page from Sophmore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: '45em', padding: '1.25em' }}>
              <Typography variant='body1' align='center' paragraph>
                I taught myself basic coding from a library book in the third
                grade, and ever since then my passion has solely been set on
                learning= learning comouters, learning mathematics and
                philosophy, study design, always alwasy learning.
              </Typography>
              <Typography variant='body1' align='center' paragraph>
                Now I am ready to apply everything i have learned and to help
                others with the intuition I have developed
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction='column'
            lg
            alignItems={matchesMD ? 'center' : 'flex-end'}
          >
            <Grid item>
              <img src={puppy} alt='cute puppy' style={{ maxHeight: matchesMD ? 300 : undefined }} />
            </Grid>
            <Grid item>
              <Typography variant='caption'>
                my minature dapple duchshund, Sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};
export default About;
