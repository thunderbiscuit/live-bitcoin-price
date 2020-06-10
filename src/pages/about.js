import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import "../styles/styles.css"

function About() {
  return (
    <Layout>
      <div class="about-link main-page-link slide-in-left">
        <Link to="/">
          <img src="/images/circle-right.svg" alt="ticker page" />
        </Link>
      </div>
      <div class="container" style={{ marginTop: "2rem" }}>
        <div class="tile is-ancestor">
          <div class="tile is-child is-6 px-4 info-box-0">
            <h3 className="card-titles">About</h3>
            <hr />
            <p>
              This price ticker queries the Kraken API for the price of the latest trade on the
              bitcoin/USD pair every 5 seconds.
            </p>
            <br />
            <p>
              I initially made this project in order to help someone who needed a simple web-based
              price ticker, and liked it so much I decided to register the domain.
            </p>
          </div>
          <div class="tile is-child is-6 px-4 info-box-1">
            <h3 className="card-titles">Download and Modify!</h3>
            <hr />
            <p>
              The code for this website is{" "}
              <a href="https://github.com/thunderBiscuit/live-bitcoin-price">open source</a>, and I
              maintain a simpler version of it (without the about page and the 404) in a github repo{" "}
              <a href="https://github.com/thunderBiscuit/live-btc-price">here</a>. You can download
              the html file{" "}
              <a href="/live-btc-price.txt" download>
                right here
              </a>{" "}
              if you want, and run it locally so you don't need to ping this website. Just rename
              the file from .txt to .html and double-click.
            </p>
            <p>
              Feel free to download and modify/adjust it to your needs, and if you do end up
              building something cool let me know on twitter!
            </p>
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-child is-6 px-4 info-box-2">
            <h3 className="card-titles info-1">Me</h3>
            <hr />
            <p>
              I'm thunderbiscuit. You can find me on{" "}
              <a
                href="https://twitter.com/thunderB__"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                twitter
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/thunderBiscuit"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                github
              </a>
              , and I have a small blog <a href="https://thunderbiscuit.com/">here</a>.
            </p>
            <br />
            <p>I spend most of my free time thinking about and working on the bitcoin project.</p>
          </div>
          <div class="tile is-child is-6 px-4 info-box-3">
            <h3 className="card-titles">Learn about Bitcoin</h3>
            <hr />
            <p>Learn about bitcoin.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
