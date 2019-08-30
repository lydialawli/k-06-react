import React from 'react'
import '../styles/Search.css'



class Search extends React.Component {

    state = {
        places: this.props.array,
        filtered: this.props.array
    }

    filterPlaces = (text) => {

        let filtered = this.state.places.filter(e =>
            e.title.toUpperCase().includes(text.toUpperCase()))


        this.setState({ filtered })
        this.props.onChanged(this.state.filtered)
    }

    handleChange = (event) => {
        let textValue = event.target.value
        this.filterPlaces(textValue)
    }

    render() {
        return <input className={'input'} type={'text'} onChange={this.handleChange} placeholder={'Search'}
        ></input>
    }


}


export default Search