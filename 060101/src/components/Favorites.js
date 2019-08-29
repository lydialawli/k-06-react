import React from 'react'
import '../styles/Favorites.css'


class Favorites extends React.Component {

    render() {

        return <div className="favorites">
            {this.props.card}
        </div>
    }

}


export default Favorites