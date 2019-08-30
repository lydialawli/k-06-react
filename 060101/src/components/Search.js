import React from 'react'
import '../styles/Search.css'



class Search extends React.Component {
  
    handleChange = (event) => {
        this.props.textValue(event.target.value)
    }

    render() {
        return <input  className={'input'} type={'text'} onChange={this.handleChange}
        ></input>
    }


}


export default Search