import React from 'react'
import ToolTip from '../components/tooltip'

export default class CustomEmailDescription extends React.Component {
    render() {
        return (
            <div style={{
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: 'auto',
                maxWidth: '700px'
            }}>
                <h1>How custom emails work for Email4Change</h1>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <label>1. You must include {"<"}zip{">"} and {"<"}name{">"} in the body of the email.</label>
                    <ToolTip text="This is to prevent officials from blocking mass emails to spam that contain all the same body.
                                    The more of these you include the harder it is for officials to block these messages!">
                                        {/* TODO: Replace with info png */}
                                        <label>info</label>
                    </ToolTip>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <label>2. Your subject will be ignored when creating the generated link.</label>
                    <ToolTip text="This is to prevent officials from blocking mass emails to spam that all have the same subject line.
                                    This means whoever receives this link will be creating their own email subject before sending!">
                                        {/* TODO: Replace with info png */}
                                        <label>info</label>
                    </ToolTip>
                </div>
            </div>
        )
    }
}