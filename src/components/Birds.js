import React from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'

class Birds extends React.Component {
    constructor() {
      super()
      this.vantaRef = React.createRef()
    }
    componentDidMount() {
      this.vantaEffect = BIRDS({
        el: this.vantaRef.current
      })
    }
    componentWillUnmount() {
      if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
      return <div ref={this.vantaRef}>
        <h1>hello</h1>
      </div>
    }
}

export default Birds;