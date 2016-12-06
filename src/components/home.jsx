import React from "react";


export default class extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return(
            <div className="container">
                <div className="address">
                    <h2>University District</h2>
                    <p>4131 University Way NE, Seattle, WA 98105</p>
                    <p>Weekdays: 1030AM-0900PM </p>
                    <p>Weekends: 1130AM-0900PM</p>
                </div>
                <div className="mapping">
                
                </div>     
            </div>
        );
    }
}
