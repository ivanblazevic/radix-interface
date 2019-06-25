import React from "react";

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

    render() {
        return (
            <div className="right footer-menu">
                <i onClick={this.props.openMenu} className="fas fa-ellipsis-v"></i>
            </div>
        );
    }
}

export default Menu;