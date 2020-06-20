import React from "react"
import ListButton from "../components/list_button"
import IntroPage from "../components/intro"
import LinkModal from "../components/link"
import ToolTip from "../components/tooltip"
import {toggle} from "../components/link"
import { Link } from "gatsby"
import styles from "../components/custom.module.css"

const TO = "to"
const CC = "cc"
const BCC= "bcc"
const SUBJECT = "subject"
const BODY = "body"
const EMAIL = "email"
const API_URL = "https://dutuq6mkaf.execute-api.us-east-2.amazonaws.com/PROD"

export default class IndexPage extends React.Component {
  

  state = {
    currentTo: "",
    currentCC: "",
    currentBCC: "",
    to: [],
    cc: [],
    bcc: [],
    subject: "",
    body: "",
    email: "",
    link: "",
    linkViewStyle: styles.dismiss,
    customEmail: false
  }

  toggleCustomEmail = (event) => {
    let newVal = !this.state.customEmail
    this.setState({
       customEmail: newVal
    })
  }

  showLinkView = (style) => {
    this.setState({
      linkViewStyle: style
    })
  }

  generateLink = event => {
    const data = {
      "to": this.state.to.toString(),
      "cc": this.state.cc.toString(),
      "bcc": this.state.bcc.toString(),
      "subject": this.state.subject,
      "body": this.state.body,
      "email": this.state.email,
      "customEmail": this.state.customEmail
    }

    try {
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
          // TODO: Probably add API Key or somethign to the headers for CORS Securtiy, Netlify has tools for Env Vars to store it there
        },
        mode: 'cors'
      }).then(
        (result) => {
          result.json().then(data => {
            console.log(data)
            this.setState({
              link: data.body,
            })
            this.showLinkView(styles.outterModal)
          })
        }
      )
    } catch (err) {
      alert(`Error Generating Link from Server: Code ${err.code}`)
    }
  }

  onSetupInput = event => {
    const target = event.target
    const value = target.value
    const inputName = target.name

    this.setState({
      [inputName]: value
    })
  }

  

  removeElement = event => {
    console.log(event.target)
    console.log(event.target.value)
    const target = event.target
    const index = target.value
    const inputName = target.name


      switch (inputName) {
        case TO:
          this.state.to.splice(index, 1)
          this.setState({
            [inputName]: this.state.to
          })
          break;
        case CC:
          this.state.cc.splice(index, 1)
          this.setState({
            [inputName]: this.state.cc
          })
          break;
        case BCC:
          this.state.bcc.splice(index, 1)
          this.setState({
            [inputName]: this.state.bcc
          })
          break;
        default:
          break;
      }
  }

  onAddInput = event => {
    const target = event.target
    console.log(target)
    const value = target.value
    const inputName = target.name
    var newValue = []

    // TODO: Check validity of email?

    switch (inputName) {
        case TO:
          newValue = this.state.to.concat(value)
          break;
        case CC:
          newValue = this.state.cc.concat(value)
          break;
        case BCC:
          newValue = this.state.bcc.concat(value)
          break;
        default:
          break;
    }


    this.setState({
      [inputName]: newValue
    })

    
  }
  

  // TODO: Add cookies to keep track if the user has agreed to the terms and conditions and to keep track of the data they put in the input fields
  // Keeping track of the input fields is to make sure the info is still populated when they check the "how does this work link"
  render() {
    return (
      <div
        id="main">
        <IntroPage></IntroPage>
        <div style={{
          maxWidth: '750px',
          margin: `auto`,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column'
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
                <input 
                  type="text" 
                  name="currentTo"
                  value={this.state.currentTo}
                  onChange={this.onSetupInput}
                  ></input>
                <button
                  type="reset"
                  name={TO}
                  value={this.state.currentTo}
                  onClick={this.onAddInput}>+</button>
              </label>
            </div>
            <ListButton list={this.state.to} removeElement={this.removeElement} name={TO}></ListButton>
            <div>
              <label>
                CC Recepient(s):
                <input 
                  type="text" 
                  name="currentCC"
                  value={this.state.currentCC}
                  onChange={this.onSetupInput}></input>
                <button
                  type="button"
                  name={CC}
                  value={this.state.currentCC}
                  onClick={this.onAddInput}>+</button>
              </label>
            </div>
            <ListButton list={this.state.cc} removeElement={this.removeElement} name={CC}></ListButton>
            <div>
              <label>
                BCC Recepient(s):
                <input 
                  type="text" 
                  name="currentBCC"
                  value={this.state.currentBCC}
                  onChange={this.onSetupInput}></input>
                <button
                  type="reset"
                  name={BCC}
                  value={this.state.currentBCC}
                  onClick={this.onAddInput}>+</button>
              </label>
            </div>
            <ListButton list={this.state.bcc} removeElement={this.removeElement} name={BCC}></ListButton>
            <div>
              <label>
                Subject:
                <input 
                  type="text" 
                  name={SUBJECT}
                  value={this.state.subject}
                  onChange={this.onSetupInput}></input>
              </label>
            </div>
            <div>
              <label>
                Body:
                <input 
                  type="text" 
                  name={BODY}
                  value={this.state.body}
                  onChange={this.onSetupInput}></input>
              </label>
            </div>
            <div>
              <label style={{
                display: 'flex',
                flexDirection: 'row'
              }}>
                
                Your Email:
                <input 
                  type="text" 
                  name={EMAIL}
                  value={this.state.email}
                  onChange={this.onSetupInput}></input>
                <ToolTip text="We want your email to send you a copy of your generated link. We do NOT save your email!">
                  {/* TODO: Replace with info png */}
                  <label>info</label>
                </ToolTip>
              </label>
            </div>
            <div>
              <label style={{
                display: 'flex',
                flexDirection: 'row'
              }}>
                Do you want to enable customizable emails?
                {/* TODO: Capture input from checkbox to send to the lambda to determine what link to generate. */}
                <input type="checkbox" onChange={this.toggleCustomEmail}></input>
                <ToolTip text="This will help particpants create custom emails to send. Check the 'How do custom emails work?' link to learn more!">
                    {/* TODO: Replace with info png */}
                    <label>info</label>
                </ToolTip>
              </label>
            </div>
            <div>
              <Link to="/howCustomEmailsWork/">How do custom emails work?</Link>
            </div>
            <button 
              type="button"
              onClick={this.generateLink}>Get your link!</button>
          </form>
        <LinkModal style={this.state.linkViewStyle} toggle={this.showLinkView} link={this.state.link}></LinkModal>
        </div>
      </div>
    )
  }
  
}

