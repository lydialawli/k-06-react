import React from 'react'

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
                                <div class="thumbnail">
                                <h2>{p.title}</h2>
                                <h3>{p.price}</h3>
                                <p>{p.location}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )

    }
}

export default Places