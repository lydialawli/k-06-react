import React from 'react'
import '../styles/Thumbnail.css'

class Thumbnail extends React.Component {

    // state = {
    //     liked: true,
    //     button: 'Unlike',
    // }

    // changeLiked = () => {
    //     if (this.state.liked) {
    //         this.setState({
    //             liked: false,
    //             button: 'Unlike'
    //         })
    //         this.props.like(this.props.index,true)

    //     } else {
    //         this.setState({
    //             liked: true,
    //             button: 'Like',
    //         })
    //         this.props.like(this.props.index,false)
    //     }

    //     // console.log(this.state.liked)
    // }

    passToParent = () => {
        this.props.like(this.props.index, this.props.button)
    }

    getLike = (Like) => {
        return Like === 'Like' ? 'liked' : 'unliked'
    }

    render() {
        return (
            <div className="thumbnail">
                <h2>{this.props.place.title}</h2>
                <h3>{this.props.place.price}</h3>
                <p>{this.props.place.location}</p>
                <button className={this.getLike(this.props.button)} onClick={this.passToParent}>{this.props.button}</button>
            </div>
        )
    }

}


export default Thumbnail