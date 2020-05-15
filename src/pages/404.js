import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import "../styles/styles.css"

function FourOFour() {
  return (
    <Layout>
      <div className={"flex-column"}>
        <h1 className={"btc-ticker"}>404.</h1>
        <h3 className={"subtitle"}>
          <span className="fade-in fade-0">How... </span>
          <span className="fade-in fade-1">how did you get here? </span>
          <span className="fade-in fade-2">This is a 1-page website!</span>
          <br />
          <span className="fade-in fade-3">
            How could you <em>possibly</em> get so lost?
          </span>
        </h3>
        <Link to="/" className={"subtitle"}>
          Take me home
        </Link>
        <Link to="/easter-egg" className={"sub-subtitle"}>
          Take me... somewhere else.
        </Link>
      </div>
    </Layout>
  )
}

export default FourOFour
