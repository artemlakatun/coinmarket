import { Component } from "react";
import './cryptoTable.scss';

class CryptoTable extends Component {
    render() {
        return(
            <div className="crypto-table-container">
                <table className="crypto-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Символ монеты</th>
                            <th>Название</th>
                            <th>Логотип монеты</th>
                            <th>Цена в USD</th>
                            <th>Рыночная капитализация в USD</th>
                            <th>Изменение цены за 24 часа</th>
                        </tr>
                    </thead>
                </table>
                <div className="button-container">
                    <button className="button">load more</button>
                </div>
            </div>
        )
    }
}

export default CryptoTable;