import React from "react"

export default function Input(props) {
    // props: label, inputName, buttonName, value
    return (
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
                  name="to"
                  value={this.state.currentTo}
                  onClick={this.onAddInput}>+</button>
                {this.state.currentTo}
              </label>
        </div>
    )
}