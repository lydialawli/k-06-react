import React from 'react'


class Thumbnail extends React.Component {

    state = {
        place: this.props.place,
    }

    render() {
        return (
            <div class="thumbnail">
                <h2>{this.props.place.title}</h2>
                <h3>{this.props.place.price}</h3>
                <p>{this.props.place.location}</p>
            </div>
        )
    }

}


export default Thumbnail