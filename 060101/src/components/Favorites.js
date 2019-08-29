import React from 'react'
import '../styles/Favorites.css'
import Thumbnail from '../components/Thumbnail.js'


class Favorites extends React.Component {



    render() {

        return <div className="favorites">
            {console.log(this.props.likedPlaces)}
        </div>
    }

}


export default Favorites