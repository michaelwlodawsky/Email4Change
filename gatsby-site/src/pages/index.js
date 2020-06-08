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
        <Input id="recepients" label="Email Recepient(s):"/>
        <button>+</button>
      </div>
      <div>
        <Input id="cc" label="CC Recepient(s):"/>
        <button>+</button>
      </div>
      <div>
        <Input id="bcc" label="BCC Recepient(s):"/>
        <button>+</button>
      </div>
      <div>
        <Input id="subject" label="Subject:"/>
      </div>
      <div>
        <Input id="body" label="Message Body:"/>
      </div>
      <div>
        <Input id="email" label="Your email (to send the link for safe keeping):"/>
      </div>
      <button type="submit">Get your link!</button>
    </form>
  </div>
)

export default IndexPage
