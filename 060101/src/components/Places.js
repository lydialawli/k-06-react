import React from 'react'
import '../styles/Places.css'
import Favorites from '../components/Favorites.js'
import Thumbnail from '../components/Thumbnail.js'

class Places extends React.Component {
    state = {
        places: [
            {
                title: 'Duplex with Garden',
                price: 2.000,
                location: 'Marina',
            },
            {
                title: 'Double Room Shared House',
                price: 500,
                location: 'Ramblas',
            },
            {
                title: 'Single Room Shared House',
                price: 300,
                location: 'Ramblas',
            },
            {
                title: 'Studio Lounge small',
                price: 1.000,
                location: 'Barceloneta',
            },
            {
                title: 'Studio Lounge Big',
                price: 3.000,
                location: 'Barceloneta',
            },
            {
                title: 'Single room private House',
                price: 200,
                location: 'Eixample',
            },
        ]
    }

    getListPlaces = () => {
        return (
            this.state.places.map((p, i) => {
                return (
                    <Thumbnail key={i} place={p} />
                )
            })
        )
    }

    getLikedPlaces = () => {
        return this.state.places
    }

  

    render() {
        return (
            <div>
                <h1>{this.state.places.length} Places</h1>
                <div className="thumbnails">
                    {this.getListPlaces()}
                </div>
                <h1>Favorites</h1>
                <Favorites
                likedPlaces={this.getLikedPlaces()}></Favorites>
            
            </div>
        )

    }
}

export default Places