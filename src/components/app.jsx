import React from "react";
import "../css/main.css";


import {Link, IndexLink} from "react-router";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
            
                <nav>
                    <ul>
                        <li>
                            <IndexLink to="/" activeClassName="active">
                                Home
                            </IndexLink>
                        </li>
                        <li>
                            <Link to="/menu" activeClassName="active">
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery" activeClassName="active">
                                gallery
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" activeClassName="active">
                                cart
                            </Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    <img src="../../src/img/placeholder.jpg" alt="picture"/>
                    <hr/>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

