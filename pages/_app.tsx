import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux, { AppProps } from 'next-redux-wrapper';
import configureStore from '../src/store/configureStore';

import 'moment/locale/ko';
import '../styles/styles.css';

class MyApp extends App<AppProps> {
  render() {
    // tslint:disable-next-line:no-console
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
    // tslint:disable-next-line:no-console
    console.log(`NEXT_BUILD_ENV: ${process.env.NEXT_BUILD_ENV}`);
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Head>
          <title>셀프소개팅</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(MyApp);
