import React, { Component } from "react";
import './Search.css'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = { search: '' }
    }
    render() {
        return (
            <form>
                <label htmlFor='search' ></label>
                <input type="text" placeholder="Search Activity" id="search" value={this.state.search} />
            </form>
        )
    }
}



export default Search