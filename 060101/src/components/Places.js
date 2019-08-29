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


    render() {
        return (
            <div>
                <h1>{this.state.places.length} Places</h1>
                <div class="thumbnails">
                    {
                        this.state.places.map(p => {
                            return (
                                <Thumbnail place={p} />
                            )
                        })
                    }
                </div>
                <Favorites />
            </div>
        )

    }
}

export default Places