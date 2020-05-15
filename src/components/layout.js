import React from "react"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Live Bitcoin Price</title>
        <meta name="description" content="The simplest bitcoin price ticker on the internets!" />
        <meta property="og:title" content="Bitcoin Price Ticker" />
        <meta property="og:image" content="https://live-bitcoin-price/images/socialmedia.png" />
        <meta property="og:url" content="https://live-bitcoin-price.com/" />
        <meta
          property="og:description"
          content="The simplest bitcoin price ticker on the internets!"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://live-bitcoin-price.com/" />
        <meta name="twitter:title" content="Bitcoin Price Ticker" />
        <meta
          name="twitter:description"
          content="The simplest bitcoin price ticker on the internets!"
        />
        <meta name="twitter:image" content="https://live-bitcoin-price/images/socialmedia.png" />
        <script
          async
          defer
          data-domain="live-bitcoin-price.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Helmet>
      <div className={"main"}>{children}</div>
    </>
  )
}

export default Layout
