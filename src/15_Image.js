import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        if(this.props.balike === 'noImage'){
            throw new Error('Image not found')
        }
        return <img src={this.props.balike} alt='my pic' width='300px' height='200px'/>
    }
}
