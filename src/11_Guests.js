import React, { Component } from 'react'

export default class Guest extends Component {
    render() {
        return (
            <div>
                <h1>Hello Guest</h1>
                <button type="button" onClick={this.props.clickData}>Login</button>
                <button type="button">Sign Up</button>
            </div>
        )
    }
}
