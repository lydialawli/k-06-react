import React from 'react'
import '../styles/Places.css'
import Favorites from '../components/Favorites.js'
import Thumbnail from '../components/Thumbnail.js'
import Search from '../components/Search.js'

class Places extends React.Component {
    componentWillReceiveProps() {
        let favouritePlaces = this.statefavouritePlaces.filter(e => e.liked)
        this.setState({ favouritePlaces })
    }

    state = {
        places: [
            {
                title: 'Duplex with Garden',
                price: 2000,
                location: 'Marina',
                id: 0,
                liked: false
            },
            {
                title: 'Double Room Shared House',
                price: 5000,
                location: 'Ramblas',
                id: 1,
                liked: false
            },
            {
                title: 'Single Room Shared House',
                price: 300,
                location: 'Ramblas',
                id: 2,
                liked: false
            },
            {
                title: 'Studio Lounge small',
                price: 1000,
                location: 'Barceloneta',
                id: 3,
                liked: false
            },
            {
                title: 'Studio Lounge Big',
                price: 3000,
                location: 'Barceloneta',
                id: 4,
                liked: false
            },
            {
                title: 'Single room private House',
                price: 400,
                location: 'Eixample',
                id: 5,
                liked: false
            },
        ],
        favouritePlaces: []
    }



    like = (id) => {
        let places = this.state.places
        let element = places.find(e => e.id === id)
        let favouritePlaces = this.state.favouritePlaces

        element.liked = !element.liked

        if (element.liked) {
            if (!favouritePlaces.find(e => e.id === id))
                favouritePlaces.push(element)
        }
        else {
            favouritePlaces = favouritePlaces.filter(e => e.id !== id)
        }

        this.setState({ places, favouritePlaces })
        console.log('added fav', favouritePlaces)
    }

    filterPlaces = (text) => {
        let places = this.state.places.filter(e =>
            e.title.includes(text) )
        

        this.setState({ places })
        console.log('parent',text)
    }


    render() {
        return (
            <div>
                <Search textValue={this.filterPlaces} />
                <h1>{this.state.places.length} Places</h1>
                <div className="allPlacesShown">
                    {this.state.places.map((p, i) => {
                        return (
                            <Thumbnail key={i} place={p} index={i} like={this.like} />
                        )
                    })}
                </div>
                <h1>Favorites</h1>
                <Favorites places={this.state.favouritePlaces} like={this.like} />

            </div>
        )

    }
}

export default Places