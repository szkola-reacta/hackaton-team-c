import React from 'react';

class FormSearch extends React.Component {
    state = {
        searching:"",
    }
    sendSearching = (e) => {
        e.preventDefault();
        alert(`Wpisałeś ${this.state.searching} to super bo mamy to !`);
        this.setState({searching:""})
    }
    handleSearching = (e) =>{
        this.setState({searching:e.target.value})
    }
    render() {
        return (
            <form onSubmit={this.sendSearching} className="form-inline my-2 my-lg-0">
                <input onChange={this.handleSearching} className="form-control" type="search" type="text" placeholder="szukaj ubrań" value={this.state.searching}/>
                <button className="btn btn-dark my-2" type="submit"> Szukaj</button>
            </form>
        );
    }
}

export default FormSearch;