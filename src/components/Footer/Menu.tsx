import React from "react";
import BottomModal from './BottomModal/BottomModal';

class Menu extends React.Component<any>  {
    state = {
        modalIsOpen: false,
        menuIsOpen: false,
        title: "",
        url: ""
    }

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props);
    }

    addToFavorites = () => {
        this.props.addToFavorites();
    }

    removeFromFavorites = () => {
        this.props.removeFromFavorites();
    }    

    openMenu = () => {
        this.props.onClick();
        this.setState({ menuIsOpen: true });
    }

    closeMenu = () => {
        this.setState({ menuIsOpen: false });
    }

    render() {
        return (
            <div className="right footer-menu">
                <i onClick={this.openMenu} className="fas fa-ellipsis-v"></i>
                <BottomModal 
                    isOpen={this.state.menuIsOpen}
                    closeMenu={this.closeMenu}
                    addToFavorites={this.addToFavorites}
                    removeFromFavorites={this.removeFromFavorites} />
            </div>
        );
    }
}

export default Menu;