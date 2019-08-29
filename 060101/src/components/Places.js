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
        return <h1>Hello World</h1>
    }
}

export default Places