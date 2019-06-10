import React from "react";
import { AppState } from "../../redux";
import { actionSearch, actionActivateSearch } from "../../redux/search/actions";
import { connect } from "react-redux";
import { SearchState } from "../../redux/search/reducers";
import './Header.css';

class Header extends React.Component<any, any>  {

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any, state: SearchState) {
        super(props, state);
    }

    state = {
        isSearching: false
    }
    
    activateSearch = () => {
        this.setState({ isSearching: !this.state.isSearching });
        this.props.activateSearch(!this.state.isSearching);
    }

    onSearch = (event: any) => {
        this.props.search(event.target.value);
    }

    render() {
        return (
            <header>
                <div className="header-background-container">
                    <div className="header-background"></div>
                </div>
                <div className="container">
                    <div className={ this.state.isSearching ? "search-visible" : "search-hidden" }>
                        <span>STATIONS</span>
                        <input type="text" className="form-control form-control-lg" placeholder="Search..." onChange={this.onSearch}/>
                    </div>
                    {/* <i onClick={this.activateSearch} className={ "fas fa-" + (this.state.isSearching ? 'times' : 'search') }></i> */}
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        searchState: state.search
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        search: (query: string) => dispatch(actionSearch(query)),
        activateSearch: (isActivated: boolean) => dispatch(actionActivateSearch(isActivated))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);