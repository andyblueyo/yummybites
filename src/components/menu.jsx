import React from "react";
import {Button, Card, CardText, Cell, Grid, CardTitle} from 'react-mdl';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {current: ""}
    }

    /* MAKE THIS WORK!!!!!!*/
    getMenuItems(type) {
        fetch("./data/yb-menu.js")
            .then(response => response.json())
            .then(data => this.setState({
                current: type,
                menu: data
            }));
    }

    componentdidMount() {
        fetch("./data/yb-menu.js")
            .then(response => response.json())
            .then(data => this.setState({
                current: Teriyaki,
                menu: data
            }));
    }

    render() {
        var menuItems;
        if (this.state.teriyaki) {
            menuItems = this.state.teriyaki.items.map(item => 
                <Cell key = {item.id} col={6} style={{margin:'7.5px'}}>
                    <Card className="card" shadow={0} style={{width: '100%', height: '100px', margin: '10px', position: "relative"}}>
                        <div className="itemIMG">
                            <img src={item.imgURL} style={{left: "0", position: "absolute", height: "100%", width: "200px"}}/>
                        </div>
                        <CardTitle style={{marginLeft: "200px", textAlign: "center"}}>{item.name}</CardTitle>
                        <CardText style={{marginLeft: "200px", paddingTop: "0px", flex: "auto", width: "auto"}}>
                            <p>{item.description}</p>
                            <p>Price: ${item.price}</p>
                        </CardText>
                    </Card> 
                </Cell>
            );
        }
        console.log(menuItems);
        return (
            <div className="container">
                <h1 style={{textAlign: "center"}}>{this.state.current} Menu</h1>
                    <Grid className="grid">
                        {menuItems}
                    </Grid>
            </div>
        );
    }
}

