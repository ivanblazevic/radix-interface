import React from "react";
import { Store } from "redux";

export default class Header extends React.Component<any> {

    private store: Store;

    constructor(props: any){
        super(props);
        this.store = this.props.store;
    }

    state = {
        isSearching: false
    }
    
    activateSearch = () => {
        console.log(this.store);
       // store.dispatch({type:"UPDATE_VARIABLE", payload: true })
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
