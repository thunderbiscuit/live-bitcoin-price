import React from "react"
import { Link } from "gatsby"

import "../styles/styles.css"

class Doge extends React.Component {
  queryAPI() {
    console.log("fetching latest Kraken USD price...")
    fetch("https://api.kraken.com/0/public/Ticker?pair=XDGUSD")
      .then(response => response.json())
      .then(data => {
        const price = data.result.XDGUSD.c[0]
        document.getElementById("current-price").innerText = "$ " + price
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
      <div className={"flex-column"}>
        <figure>
          <img src="/images/doge.png" alt="doge" />
        </figure>
        <p
          id={"current-price"}
          className={"btc-ticker"}
          style={{ marginTop: "0em" }}
        ></p>
        <p className={"subtitle"} style={{ marginTop: "-2em" }}>
          Well... you asked for it.
        </p>
        <Link to="/" className={"subtitle"}>
          Now take me home.
        </Link>
      </div>
    )
  }
}

export default Doge
