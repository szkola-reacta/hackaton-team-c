import React from 'react';

const FormSearch = () => {
    const sendSearching = (e) => {
        e.preventDefault();
        alert(`Wpisałeś ${e.target.value} to super bo mamy to !`);
    }
    return (
        <>
            <form onSubmit={sendSearching} className="form-inline my-2 my-lg-0">
                <input className="form-control" type="search" type="text" placeholder="szukaj ubrań"/>
                <button className="btn btn-dark my-2" type="submit"> Szukaj</button>
            </form>
        </>
    );
}

export default FormSearch;