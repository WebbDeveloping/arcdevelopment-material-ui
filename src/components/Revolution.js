import React from 'react';
import CallToAction from './ui/CallToAction';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import technologyAanimation from '../animations/technologyAnimation/data.json';
import vision from '../assets/vision.svg';
import consultation from '../assets/consultationIcon.svg';
import mockup from '../assets/mockupIcon.svg';
import review from '../assets/reviewIcon.svg';
import design from '../assets/designIcon.svg';
import build from '../assets/buildIcon.svg';
import launch from '../assets/launchIcon.svg';
import maintain from '../assets/maintainIcon.svg';
import iterate from '../assets/iterateIcon.svg';

const useStyles = makeStyles(theme => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em'
    }
  }
}));

const Revolution = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAanimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Grid item container direction='column'>
      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography
          align={matchesMD ? 'center' : undefined}
          variant='h2'
          style={{ fontFamily: 'Pacifico' }}
        >
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems='center'
        className={classes.rowContainer}
        style={{ marginTop: '5em' }}
      >
        <Grid item lg>
          <img
            src={vision}
            alt='vision through binoculars'
            style={{
              maxWidth: matchesSM ? '300px' : '40em',
              marginRight: matchesMD ? 0 : '5em',
              marginBottom: matchesMD ? '5em' : 0
            }}
          />
        </Grid>
        <Grid item container direction='column' style={{ maxWidth: '40em' }} lg>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : 'right'}
              variant='h4'
              gutterBottom
            >
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : 'right'}
              variant='body1'
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              beatae illum est deleniti adipisci repudiandae libero ipsum vel
              dicta perspiciatis inventore modi aliquam excepturi quo culpa,
              nobis molestias deserunt ratione.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : 'right'}
              variant='body1'
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              recusandae, eius iure eum ipsam fuga mollitia, consequatur esse
              iusto corporis neque itaque non adipisci totam quis? Distinctio
              illum voluptate quam!
            </Typography>
            <Typography
              align={matchesMD ? 'center' : 'right'}
              variant='body1'
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
              ipsum temporibus officiis nobis enim repellat a sequi voluptate
              dolor unde aut eos iure ullam veritatis blanditiis. Recusandae,
              nihil. Rerum, vitae.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : 'right'}
              variant='body1'
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem inventore ab, porro ullam, optio voluptate quod
              mollitia eius ut tempore expedita, in iste placeat est cum
              cupiditate a minus! Odit.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : 'right'}
              variant='body1'
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iure
              qui pariatur nostrum architecto, iusto aliquam porro.
              Exercitationem nulla quibusdam sapiente sunt enim! Reprehenderit
              at numquam porro culpa, nobis libero.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* -----Technology section----- */}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems='center'
        className={classes.rowContainer}
        style={{ merginTop: '10em', marginBottom: '10em' }}
      >
        <Grid item container direction='column' style={{ maxWidth: '40em' }} lg>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
            >
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              beatae illum est deleniti adipisci repudiandae libero ipsum vel
              dicta perspiciatis inventore modi aliquam excepturi quo culpa,
              nobis molestias deserunt ratione.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              recusandae, eius iure eum ipsam fuga mollitia, consequatur esse
              iusto corporis neque itaque non adipisci totam quis? Distinctio
              illum voluptate quam!
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
              ipsum temporibus officiis nobis enim repellat a sequi voluptate
              dolor unde aut eos iure ullam veritatis blanditiis. Recusandae,
              nihil. Rerum, vitae.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem inventore ab, porro ullam, optio voluptate quod
              mollitia eius ut tempore expedita, in iste placeat est cum
              cupiditate a minus! Odit.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iure
              qui pariatur nostrum architecto, iusto aliquam porro.
              Exercitationem nulla quibusdam sapiente sunt enim! Reprehenderit
              at numquam porro culpa, nobis libero.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iure
              qui pariatur nostrum architecto, iusto aliquam porro.
              Exercitationem nulla quibusdam sapiente sunt enim! Reprehenderit
              at numquam porro culpa, nobis libero.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iure
              qui pariatur nostrum architecto, iusto aliquam porro.
              Exercitationem nulla quibusdam sapiente sunt enim! Reprehenderit
              at numquam porro culpa, nobis libero.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify={matchesMD ? 'center' : 'flex-end'} lg>
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: '40em', margin: 0 }}
          />
        </Grid>
      </Grid>
      {/* -----Process section----- */}
      <Grid
        item
        container
        direction='row'
        justify='center'
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant='h4' gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#b3b3b3', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          alignItems={matchesMD ? 'center' : undefined}
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src={consultation}
            alt='handshake'
            width='100%'
            style={{ maxWidth: 700 }}
          />
        </Grid>
      </Grid>
      {/* -----mockup----- */}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#ff7373', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          lg
          alignItems={matchesMD ? 'center' : undefined}
        >
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src={mockup}
            alt='basic website design outline'
            width='100%'
            style={{ maxWidth: 1000 }}
          />
        </Grid>
      </Grid>
      {/* -----review ----- */}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#39b54a', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          lg
          alignItems={matchesMD ? 'center' : undefined}
        >
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src={review} alt='magnify glass' width='100%' />
        </Grid>
      </Grid>
      {/* -----Design ----- */}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#a67c52', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          lg
          alignItems={matchesMD ? 'center' : undefined}
        >
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src={design}
            alt='handshake'
            style={{ maxWidth: 1000 }}
            width='100%'
          />
        </Grid>
      </Grid>
      {/* -----Review ----- */}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#39b54a', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          lg
          alignItems={matchesMD ? 'center' : undefined}
        >
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src={review} alt='handshake' width='100%' />
        </Grid>
      </Grid>
      {/* -----Build ----- */}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#fbb03b', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          lg
          alignItems={matchesMD ? 'center' : undefined}
        >
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          {/* <img
            src={build}
            alt='handshake'
            width='100%'
            style={{ maxWidth: matchesMD ? 700 : 1000 }}
          /> */}
        </Grid>
      </Grid>
      {/* -----Launch ----- */}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#c1272d', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          lg
          alignItems={matchesMD ? 'center' : undefined}
        >
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          {/* <img
            src={launch}
            alt='handshake'
            style={{ maxWidth: 200 }}
            width='100%'
          /> */}
        </Grid>
      </Grid>
      {/* -----maintaine ----- */}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#8e45ce', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          lg
          alignItems={matchesMD ? 'center' : undefined}
        >
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img
            src={maintain}
            alt='handshake'
            style={{ maxWidth: 500 }}
            width='100%'
          />
        </Grid>
      </Grid>
      {/* -----Iterate ----- */}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        style={{ backgroundColor: '#29abe2', height: '90em' }}
      >
        <Grid
          item
          container
          direction='column'
          lg
          alignItems={matchesMD ? 'center' : undefined}
        >
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h4'
              gutterBottom
              style={{ color: '#000', marginTop: '5em' }}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: '#fff', maxWidth: '20em' }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              soluta voluptas distinctio vero, nisi itaque corrupti dolorum qui
              eos, fuga odit maxime possimus quam doloremque, impedit
              reprehenderit vitae assumenda quisquam.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src={iterate} alt='falling dominos' width='100%' />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Revolution;
