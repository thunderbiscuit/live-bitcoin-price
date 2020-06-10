import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import "../styles/styles.css"

class LandingPage extends React.Component {
  queryAPI() {
    console.log("fetching latest Kraken USD price...")
    fetch("https://api.kraken.com/0/public/Ticker?pair=XXBTZUSD")
      .then((response) => response.json())
      .then((data) => {
        const price = data.result.XXBTZUSD.c[0]
        const pricerounded = Math.floor(price)
        console.log("latest price: ", pricerounded)
        // document.getElementById("current-price").innerText = "$ " + pricerounded
        if (document.getElementById("current-price") !== null) {
          document.getElementById("current-price").innerText = "$ " + pricerounded
        } else {
          console.log("Data fetched but nowhere to insert it")
        }
      })
  }

  componentDidMount() {
    // initial API query
    this.queryAPI()

    // query API every 5 seconds
    setInterval(() => {
      this.queryAPI()
    }, 5000)
  }

  render() {
    return (
      <Layout>
        <div className="about-link slide-in-left">
          <Link to="/about/">
            <img src="/images/settings-outline.svg" alt="about page" />
          </Link>
        </div>
        <p id={"current-price"} className={"btc-ticker"}></p>
      </Layout>
    )
  }
}

export default LandingPage
