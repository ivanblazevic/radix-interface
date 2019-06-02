import React from "react";

export default class Header extends React.Component {

    state = {
        isSearching: false
    }
    
    activateSearch = () => {
        this.setState({ isSearching: !this.state.isSearching });
    }

    onSearch(event: any) {
        console.log(event.target.value)
    }

    render() {
        return (
            <header>
                <div className="container">
                    <div className={ this.state.isSearching ? "search-visible" : "search-hidden" }>
                        <span>STATIONS</span>
                        <input type="text" className="form-control form-control-lg" placeholder="Search..." onChange={this.onSearch}/>
                    </div>
                    <i onClick={this.activateSearch} className={ "fas fa-" + (this.state.isSearching ? 'times' : 'search') }></i>
                </div>
            </header>
        );
    }
}
