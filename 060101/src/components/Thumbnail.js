import React from 'react'
import '../styles/Thumbnail.css'

class Thumbnail extends React.Component {
   

    passToParent = () => {
        this.props.like( this.props.place.id)
    }

    getLike = (liked) => {
        return !liked ? 'liked' : 'unliked'
    }

    getButtonText = (liked) => {
        return !liked ? 'Like' : 'Unlike'
    }


    render() {
        return (
            <div className="thumbnail">
                <h2>{this.props.place.title}</h2>
                <h3>{this.props.place.price}</h3>
                <p>{this.props.place.location}</p>
                <button className={this.getLike(this.props.place.liked)} onClick={this.passToParent}>
                    {this.getButtonText(this.props.place.liked)}
                </button>
            </div>
        )
    }

}


export default Thumbnail