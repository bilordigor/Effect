import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './../styles/globals.css'

export default function MyApp(props) {
    const { Component, pageProps } = props;

    const dark = true

    const theme = createMuiTheme({
        palette: {
          mode: dark ? 'dark' : 'light'
        },
        main: {
          palette: {
            main: {
              main: dark ? '#3f50b5' : '#3f50b5',
              background: dark ? '#121212' : '#fafafa',
            },
            header: {
              main: dark ? '#373737' : '#3f50b5',
              secondary: dark ? '#3f50b5' : '#3f50b5',
              text: dark ? '#e0e0e0' : '#424242',
              icon: dark ? '#e0e0e0' : '#424242',
              background: dark ? '#373737' : '#3f50b5',
              border: dark ? '#9e9e9e' : '#e0e0e0',
            },
            navbar: {
              main: dark ? '#323232' : '#eeeeee',
              secondary: dark ? '#3f50b5' : '#3f50b5',
              text: dark ? '#e0e0e0' : '#424242',
              icon: dark ? '#e0e0e0' : '#424242',
              iconMenu: dark ? '#e0e0e0' : '#e0e0e0',
              background: dark ? '#323232' : '#eeeeee',
              border: dark ? '#9e9e9e' : '#e0e0e0',
            },
            content: {
              main: dark ? '#2c2c2c' : '#f5f5f5',
              secondary: dark ? '#3f50b5' : '#3f50b5',
              text: dark ? '#e0e0e0' : '#424242',
              reverseText: dark ? '#424242' : '#e0e0e0',
              icon: dark ? '#e0e0e0' : '#424242',
              background: dark ? '#2c2c2c' : '#eeeeee',
              border: dark ? '#9e9e9e' : '#e0e0e0',
            },
            buttons: {
              main: dark ? '#212121' : '#f5f5f5',
              secondary: dark ? '#3f50b5' : '#3f50b5',
              text: dark ? '#e0e0e0' : '#424242',
              icon: dark ? '#e0e0e0' : '#424242',
              background: dark ? '#212121' : '#9e9e9e',
            },
            textaria: {
              main: dark ? '#212121' : '#f5f5f5',
              text: dark ? '#e0e0e0' : '#424242',
              icon: dark ? '#e0e0e0' : '#424242',
              secondary: dark ? '#3f50b5' : '#3f50b5',
              background: dark ? '#36393f' : '##bdbdbd',
            },
            help: {
              red: dark ? '#b71c1c' : '#e57373',
              redbackground: dark ? 'rgb(183, 28, 28, .2)' : 'rgb(183, 28, 28, .2)',
              redbutton: dark ? 'rgb(183, 28, 28, .8)' : 'rgb(183, 28, 28, .8)',
              green: dark ? '#357a38' : '#4caf50',
            }
          }
        }
    
      });

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>
                    Ξ Effect
                </title>
                <meta name="Keywords" content="Образованиие, Эффект, Кси Эффект, Xi Effect, Effect" />
                <meta name="viewport" content="width=device-width, initial-scale=0.7, maximum-scale=3.2" />
                <meta name="yandex-verification" content="5fa082e60959bf8b" />
                <meta
                    name="description"
                    content="Всё, что нужно для вашего Образования."
                />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#603cba" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};