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
                like: false,
            },
            {
                title: 'Double Room Shared House',
                price: 500,
                location: 'Ramblas',
                like: false,
            },
            {
                title: 'Single Room Shared House',
                price: 300,
                location: 'Ramblas',
                like: false,
            },
            {
                title: 'Studio Lounge small',
                price: 1.000,
                location: 'Barceloneta',
                like: false,
            },
            {
                title: 'Studio Lounge Big',
                price: 3.000,
                location: 'Barceloneta',
                like: false,
            },
            {
                title: 'Single room private House',
                price: 200,
                location: 'Eixample',
                like: false,
            },
        ],
    }

    filterNavs = () => {
        return this.state.places.filter(e => e.like)
    }


    getLikedPlaces = () => {
        return this.state.places
    }

    like = (ind, like) => {
        let newArray = this.state.places.map((e,i)=>{
            if(i===ind){
                e.like = like
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
                            <Thumbnail key={i} place={p} index={i} like={this.like}/>
                        )
                    })}
                </div>
                <h1>Favorites</h1>
                <Favorites card={this.filterNavs().map((p, i) => {
                    return (
                        <Thumbnail key={i} place={p} index={i} like={this.like} />
                    )
                })}>

                </Favorites>

            </div>
        )

    }
}

export default Places