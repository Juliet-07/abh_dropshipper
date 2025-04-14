import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link rel="canonical" href="https://dropshipping.abhmarkets.com" />
          <meta property="og:title" content="ABH Markets" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Shop Quality Products at ABH Markets"
          />
          <meta property="og:url" content="https://dropshipping.abhmarkets.com" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/ahossain/image/upload/v1636729752/facebook-page_j7alju.png"
          />
          <meta
            name="keywords"
            content="Shop quality products at ABH Markets"
          />

          <meta
            name="google-site-verification"
            content="4YZ47A3NAt8SonK897v_hlo4CE3w8BLq6Tpqx6EZsA8"
          />
          {/* Facebook Pixel Script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '618387641201446');
              fbq('track', 'PageView');
            `,
            }}
          />
        </Head>
        <body>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=618387641201446&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
