import { Component } from "react";
import './searchSort.scss';

class SearchSort extends Component {
    render() {
        return(
            <div className="searchSort-container">
                <input
                    type="text"
                    className="input-search"
                    placeholder="Search coin..."
                />
                <div className="sort-elem">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
            </div>
        )
    }
}

export default SearchSort;

