import React from 'react'
import '../styles/Places.css'
import Favorites from '../components/Favorites.js'
import Thumbnail from '../components/Thumbnail.js'

class Places extends React.Component {
    state = {
        places: [
            {
                title: 'Duplex with Garden',
                price: 2000,
                location: 'Marina',
                button: 'Like'
            },
            {
                title: 'Double Room Shared House',
                price: 5000,
                location: 'Ramblas',
                button: 'Like'
            },
            {
                title: 'Single Room Shared House',
                price: 300,
                location: 'Ramblas',
                button: 'Like'
            },
            {
                title: 'Studio Lounge small',
                price: 1000,
                location: 'Barceloneta',
                button: 'Like'
            },
            {
                title: 'Studio Lounge Big',
                price: 3000,
                location: 'Barceloneta',
                button: 'Like'
            },
            {
                title: 'Single room private House',
                price: 400,
                location: 'Eixample',
                button: 'Like'
            },
        ],
    }

    filterNavs = () => {
        let likedPlaces = this.state.places.filter(e => e.button ==='Unlike')
        
        return likedPlaces.map(e => {
            return {
                title: e.title,
                price: e.price,
                location: e.location,
                like: true,
                button: 'Unlike'
            }
        })
    }


    // getLikedPlaces = () => {
    //     return this.state.places
    // }

    like = (ind, like) => {
        let newArray = this.state.places.map((e,i)=>{
            if(i===ind){
                // e.like = like
                like==='Like' ?  e.button='Unlike' : e.button='Like' 
            } 
            return e
        })

        this.setState({
            places: newArray
        })
    }


    render() {
        return (
            <div>
                <h1>{this.state.places.length} Places</h1>
                <div className="allPlacesShown">
                    {this.state.places.map((p, i) => {
                        return (
                            <Thumbnail key={i} place={p} index={i}  like={this.like} button={p.button}/>
                        )
                    })}
                </div>
                <h1>Favorites</h1>
                <Favorites card={this.filterNavs().map((p, i) => {
                    return (
                        <Thumbnail key={i} place={p} index={i}  like={this.like}  button={p.button}/>
                    )
                })}>

                </Favorites>

            </div>
        )

    }
}

export default Places