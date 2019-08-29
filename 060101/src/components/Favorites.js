import React from 'react'
import '../styles/Favorites.css'


class Favorites extends React.Component {

    state = {
        arrayLikedPlaces: this.props.likedPlaces
    }

    render() {
        return <div className="favorites">hello</div>
    }

}


export default Favorites