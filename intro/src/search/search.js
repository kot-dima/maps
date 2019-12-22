import React from "react";

class Search extends React.Component{
    render(){
        return(
            <form className='container d-flex justify-content-center' onSubmit={this.props.searchTerminals}>
                <input type="text" name="cityUA" placeholder="City"></input>
                <button className="b">Search</button>
            </form>
        )
    }
}