import React from "react";
import { connect } from "react-redux";
import { SearchState } from "../../redux/search/reducers";
import { AppState } from "../../redux";
import { actionSearch, actionActivateSearch } from "../../redux/search/actions";
import PlayerService from "../../services/player";
import styles from './settings.module.css';

class Settings extends React.Component<any, any>  {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any, state: SearchState) {
        super(props, state);

        this.state = {
            ip: localStorage.getItem("ip") || "",
            oldIp: localStorage.getItem("ip") || ""
        }
    }

    onIPChange = (event: any) => {
        this.setState({ ip: event.target.value });

        const ip = event.target.value;
        localStorage.setItem('ip', ip);
    }

    ipHasChanged() {
        return this.state.oldIp !== this.state.ip;
    }

    update() {
        PlayerService.update();
    }

    render() {
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

        return (
            <div className={styles.settings + " " + showHideClassName}>

                <div>
                    Radix v{this.props.info.version}
                </div>
                <div>
                    Volume: {this.props.info.volume}
                </div>
                <div>
                    Playing: {this.props.info.title}
                    <div><i>{this.props.info.url}</i></div>
                </div>

                <br/>

                <label htmlFor="ip">IP Address:</label>
                <input id="ip" placeholder="http://radix.local" type="text" value={this.state.ip} onChange={this.onIPChange}/>

                { this.ipHasChanged() && 
                    <span>Restart for changes to take effect</span>
                }

                <br/>
                <br/>
                
                <div>
                    <button onClick={this.update}>Update</button>
                </div>

                <div className={styles.close} onClick={this.props.handleClose}>close</div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        searchState: state.search,
        info: state.player.info
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        search: (query: string) => dispatch(actionSearch(query)),
        activateSearch: (isActivated: boolean) => dispatch(actionActivateSearch(isActivated))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);