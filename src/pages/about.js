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
          </div>
          <div class="tile is-child is-6 px-4 info-box-1">
            <h3 className="card-titles">Download and Modify!</h3>
            <hr />
            <p>
              The code for this website is{" "}
              <a href="https://github.com/thunderBiscuit/live-bitcoin-price" target="_blank" rel="noreferrer">open source</a>, and I
              maintain a simpler version of it (with <em>just</em> the ticker, without the about page and the 404) in a 74 lines GitHub gist{" "}
              <a href="https://gist.github.com/thunderbiscuit/9ad42ae41972f08f0d362c23909879ed" target="_blank" rel="noreferrer">here</a>. You can download the html file there and run it locally so you don't need to ping this website. An example use case for this would be a Raspberry Pi with a screen displaying the price.
            </p>
            <br />
            <p>
              Feel free to download and modify/adjust to your needs, and if you do end up building
              something cool let me know on twitter!
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
                Twitter
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/thunderBiscuit"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                GitHub
              </a>
              , and I have a small blog <a href="https://thunderbiscuit.com/">here</a>.
            </p>
            <br />
            <p>I spend most of my free time thinking about and working on the bitcoin project.</p>
          </div>
          <div class="tile is-child is-6 px-4 info-box-3">
            <h3 className="card-titles info-1">Learn Bitcoin</h3>
            <hr />
            <p>
              New to bitcoin? There are many resources out there to help you learn, but here are two I like: <a href="https://www.upfolio.com/ultimate-bitcoin-guide" target="_blank" rel="noreferrer">Bitcoin Explained</a> and <a href="https://bitcoin-intro.com/" target="_blank" rel="noreferrer">bitcoin-intro.com</a>.
            </p>
            <br />
            <p>
              When you first heard about emails, you probably didn't spend too much time digging into the SMTP protocol before sending your first message. Don't make that mistake with bitcoin! Specifically, note the first two principles of <a href="https://bitcoin-intro.com/" target="_blank" rel="noreferrer">bitcoin-intro.com</a>:
            </p>
            <ol style={{ marginTop: "0.5rem", paddingLeft: "0.9rem" }}>
              <li><em>Starting simply and improving is better than than not starting at all.</em></li>
              <li><em>It’s more engaging to use tools before reading detailed explanations.</em></li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
