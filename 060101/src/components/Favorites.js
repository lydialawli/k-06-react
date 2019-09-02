import React from 'react'
import '../styles/Favorites.css'
import Thumbnail from '../components/Thumbnail.js'


class Favorites extends React.Component {
    state  = {
        places: this.props.places
    }

    componentWillReceiveProps(props){
        this.setState({
            places: props.places
        })
    }

    render() {

        return (
            <div className="favorites">
                {this.state.places.map((p, i) => {
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