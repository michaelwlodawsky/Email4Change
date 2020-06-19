import React from 'react'

export default class customEmail extends React.Component {
    getEmail = () => {
        let params = new URLSearchParams(window.location.search)
        console.log(params.get('emailKey'))

        //TODO: Get Email info from S3 and create fields based on the input parameters
    }

    render() {
        return (
            <div>
                <h1>Test</h1>
                <button onClick={this.getEmail}>test</button>
            </div>
        )
    }
}