import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`
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
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginRight: 0
    }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em'
    }
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '5em',
    borderRadius: 5
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  }
}));

const Contact = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const [message, setMessage] = useState('');

  //   const emailRegex = [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/]
  //   const phoneRegex= [/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/]

  const onChange = e => {
    let valid;
    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );
        if (!valid) {
          setEmailHelper('*Invalid email');
        } else {
          setEmailHelper('');
        }
        break;

      case 'phone':
        setPhone(e.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );
        if (!valid) {
          setPhoneHelper('*Invalid Phone Number');
        } else {
          setPhoneHelper('');
        }
        break;
      default:
        break;
    }
  };

  return (
    <Grid item container direction='row'>
      {/* ----form---- */}
      <Grid
        item
        container
        direction='column'
        justify='center'
        alignItems='center'
        lg={4}
        xl={3}
        style={{
          marginBottom: matchesMD ? '5em' : 0,
          marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0
        }}
      >
        <Grid item>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='h2'
              style={{ lineHeight: 1 }}
            >
              Contact Us
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              style={{ color: theme.palette.common.blue }}
            >
              We're waiting.
            </Typography>
          </Grid>
          <Grid item container style={{ marginTop: '2em' }}>
            <Grid item>
              <img
                src={phoneIcon}
                alt='phone'
                style={{ marginRight: '0.5em' }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
              >
                <a style={{textDecoration: "none", color: 'inherit'}} href='tel:5555555555'>(555) 555-5555</a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item container style={{ marginBottom: '2em' }}>
            <Grid item>
              <img
                src={emailIcon}
                alt='phone'
                style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
              >
                <a style={{textDecoration: "none", color: 'inherit'}} href='mailto:JoeDirt@example.com'>JoeDirt@example.com</a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item container direction='column' style={{ maxWidth: '20em' }}>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                fullWidth
                label='Name'
                id='name'
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                fullWidth
                label='Email'
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id='email'
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                fullWidth
                label='Phone'
                id='phone'
                value={phone}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              value={message}
              id='message'
              onChange={e => setMessage(e.target.value)}
              multiline
              rows={10}
              className={classes.message}
              InputProps={{ disableUnderline: true }}
              style={{ maxWidth: '20em' }}
            />
          </Grid>
          <Grid item container justify='center' style={{ marginTop: '2em' }}>
            <Button
              disabled={
                name.length === 0 ||
                message.length === 0 ||
                phoneHelper.length !== 0 ||
                emailHelper.length !== 0
              }
              variant='contained'
              className={classes.sendButton}
            >
              Send Message
              <img
                src={airplane}
                alt='paper airplane'
                style={{ marginLeft: '1em' }}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* -----call to action----- */}
      <Grid
        item
        container
        alignItems='center'
        justify={matchesMD ? 'center' : undefined}
        className={classes.background}
        direction={matchesMD ? 'column' : 'row'}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : '3em',
            textAlign: matchesMD ? 'center' : 'inherit'
          }}
        >
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h2' align={matchesMD ? 'center' : undefined}>
                Simple Software. <br />
                Revolutionary Results.
              </Typography>
              <Typography variant='subtitle2' style={{ fontSize: '1.5em' }}>
                Take advantage of the 21st Century
              </Typography>
              <Grid container justify={matchesMD ? 'center' : undefined} item>
                <Button
                  component={Link}
                  to='/revolution'
                  variant='outlined'
                  className={classes.learnButton}
                  onClick={() => props.setValue(2)}
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
            onClick={() => props.setValue(5)}
          >
            {' '}
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Contact;
