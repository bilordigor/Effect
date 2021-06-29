import React from 'react'
import Head from 'next/head'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Navigation from '../components/Menu/Navigation';
import Background from '../components/HelpComponents/Background';
import Loading from './../components/HelpComponents/Loading';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#2b2b2b',
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    zIndex: '-1',
    //position: 'absolute',
    // height: '100vh',
    // width: '100vw',
    // zIndex: '-1',
    // overflowY: 'auto',
    // overflowX: 'hidden',
  },
  main: {
    zIndex: 999,
    // height: '100vh',
    // width: '100vw',
    //overflowY: 'scroll',
    //overflowX: 'hidden',
  },
  labelMain: {
    cursor: 'default',
    color: theme.main.palette.header.text,
    [theme.breakpoints.up('md')]: {
      fontSize: 48,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 36,
    },
    zIndex: 999,
  },
  labelSecondary: {
    cursor: 'default',
    [theme.breakpoints.up('md')]: {
      fontSize: 32,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
    color: theme.main.palette.header.text,

    zIndex: 999,
  },
  gridroot: {
    width: '100vw',
    minHeight: '100vh',
  },
  gridLabelMain: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  gridAlert: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  }
}));


export default function Home() {
  const classes = useStyles();
  const theme = useTheme();

  const [isLoad, SetIsLoad] = React.useState(true)

  // React.useEffect(() => {
  //   props.store.getData(`${props.store.url}/status/`)
  //     .then((data) => {
  //       //console.log(data)
  //       if (data != undefined) {
  //         props.store.setAlertData(data.type, data.text)
  //       } else {
  //         props.store.setAlertData(0, "Сервер временно недоступен. Приносим свои извинения. Возращайтесь позже")
  //       }
  //     });
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])


  //const alertList = ['error', 'warning', 'info', 'success']

  // setTimeout(() => {
  //   SetIsLoad(false)
  //   console.log("false")
  // }, 5000)

  return (
    <>
      <Head>
        <title>
          Ξ Effect
        </title>
      </Head>
      <div className={classes.root}>
        <Background SetIsLoad={SetIsLoad} src="/wallpapers/hp1.jpg" />
        {isLoad && <Loading />}
        <Grid
          className={classes.gridroot}
          container
          direction="column"
          alignItems="center"
          justify="space-between"
        >
          <Grid item container justify="flex-start" direction="column" alignItems="center">
            <Navigation />
          </Grid>
          <Grid item container direction="column" alignItems="center" className={classes.gridLabelMain}>
            <Typography className={classes.labelMain}>
              Новое слово в образовании
            </Typography>
            <Typography className={classes.labelSecondary}>
              Ξ Effect - платформа, где можно делиться знаниями и получать их так, как вам будет удобнее.
            </Typography>
          </Grid>
          <Grid item container direction="column" alignItems="center" className={classes.gridAlert}>
            {/* {props.store.alertData.text != '' && <Alert severity={alertList[props.store.alertData.type]}>{props.store.alertData.text}</Alert>} */}
          </Grid>
        </Grid>
      </div>
    </>
  )
}
