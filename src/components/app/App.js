import {Component} from "react";

import Header from "../header/Header";
import SearchSort from "../searchSort/SearchSort";
import CryptoTable from "../cryptoTable/CryptoTable";

class App extends Component {
    render() {
        return(
            <div className="app">
                <Header/>
                <SearchSort/>
                <CryptoTable/>
            </div>
        )
    }
}

export default App;