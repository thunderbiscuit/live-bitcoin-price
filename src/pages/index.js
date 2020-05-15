import React from "react"

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
        document.getElementById("current-price").innerText = "$ " + pricerounded
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
        <p id={"current-price"} className={"btc-ticker"}></p>
      </Layout>
    )
  }
}

export default LandingPage
