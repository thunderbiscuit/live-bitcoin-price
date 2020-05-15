import React from "react"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
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
