import {Component} from "react";
import './header.scss';

class Header extends Component {
    render() {
        return(
            <div className="header-container">
                <div className="popular-coins-list">
                    <span>1</span>
                    <span>1</span>
                    <span>1</span>
                </div>
                <div className="case">Portfolio</div>
            </div>
        )
    }
}

export default Header;