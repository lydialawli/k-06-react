import React from 'react'
import '../styles/Favorites.css'
import Thumbnail from '../components/Thumbnail.js'


class Favorites extends React.Component {

    render() {

        return (
            <div className="favorites">
                {this.props.places.map((p, i) => {
                    return (
                        <Thumbnail key={i} place={p} index={i} like={() => this.props.like(p.id)} />
                    )
                })
                }
            </div>
        )
    }

}


export default Favorites