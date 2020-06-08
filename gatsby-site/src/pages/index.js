import React from "react"
import Input from "../components/input"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div style={{
    maxWidth: '750px',
    margin: `auto`
  }}>
    <h1 style={{
      textAlign: 'center'
    }}>
      Email4Change
    </h1>
    <p style={{
      textAlign: 'center',
      maxWidth: 'auto'
    }}>
      What's the best way to get your elected officials to change something? Tell them yourself.
    </p>
    <h2>
      Construct an email:
    </h2>
    <form>
      <div>
        <label>
          Email Recepient(s):
          <input type="text" name="to"></input>
          <button>+</button>
        </label>
      </div>
      <div>
        <label>
          CC Recepient(s):
          <input type="text" name="cc"></input>
          <button>+</button>
        </label>
      </div>
      <div>
        <label>
          BCC Recepient(s):
          <input type="text" name="bcc"></input>
          <button>+</button>
        </label>
      </div>
      <div>
        <label>
          Email Recepient(s):
          <input type="text" name="recepients"></input>
          <button>+</button>
        </label>
      </div>
      <div>
        <label>
          Subject:
          <input type="text" name="subject"></input>
        </label>
      </div>
      <div>
        <label>
          Body:
          <input type="text" name="body"></input>
        </label>
      </div>
      <div>
        <label>
          Your Email (to send the link for safe keeping):
          <input type="text" name="email"></input>
        </label>
      </div>
      <button type="submit">Get your link!</button>
    </form>
  </div>
)

export default IndexPage
