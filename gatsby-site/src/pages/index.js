import React from "react"

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
    link: ""
 }

 generateLink = event => {
   const data = {
     "to": this.state.to.toString(),
     "cc": this.state.cc.toString(),
     "bcc": this.state.bcc.toString(),
     "subject": this.state.subject,
     "body": this.state.body,
     "email": this.state.email
   }
   try {
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
        // TODO: Probably add API Key or somethign to the headers for CORS Securtiy
      },
      mode: 'cors'
    }).then(
      (result) => {
        result.json().then(data => {
          console.log(data)
          this.state.link = data.body
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

 onAddInput = event => {
   const target = event.target
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

  render() {
    return (
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
            {this.state.to}
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
            {this.state.cc}
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
            {this.state.bcc}
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
              <label>
                Your Email (to send the link for safe keeping):
                <input 
                  type="text" 
                  name={EMAIL}
                  value={this.state.email}
                  onChange={this.onSetupInput}></input>
              </label>
            </div>
            <button 
              type="button"
              onClick={this.generateLink}>Get your link!</button>
          </form>
          {this.state.link}
        </div>
    )
  }
  
}

