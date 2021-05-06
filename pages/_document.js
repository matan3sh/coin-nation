import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta itemprop='name' content='CoinNations.com' />
          <meta
            itemprop='description'
            content='This Is The New Coin Nations Economy. We’re bringing creators, crypto natives and new coin possibilies together to move the future forward.'
          />
          <meta itemProp='image' content='/static/images/metadata_img.png' />

          <meta property='og:url' content='https://coinnations.com' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='CoinNations.com' />
          <meta
            property='og:description'
            content='Coin Nations We’re showcasing the best crypto companies, leaders on one Coin Nations Global Summit'
          />
          <meta property='og:image' content='/static/images/metadata_img.png' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content='CoinNations.com' />
          <meta
            name='twitter:description'
            content='Coin Nations Trading digital assets is changing the way the world thinks about money and finance. Join the best 2021 Coin Nations Summit to take part of the new world economy.'
          />
          <meta
            name='twitter:image'
            content='/static/images/metadata_img.png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
