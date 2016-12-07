import React from "react";
import {Button, Card, CardText, Cell, Grid, CardTitle} from 'react-mdl';
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {teriyaki: TERIYAKI, korean: KOREAN, chinese: CHINESE}
    }

    render() {
        var teriyakiItems;
        var koreanItems;
        var chineseItems;
        if (this.state.teriyaki) {
            teriyakiItems = this.state.teriyaki.map(item => 
                <Cell key = {item.id} col={6} style={{margin:'7.5px'}}>
                    <Card className="card" shadow={0} style={{width: '100%', height: '100px', margin: '10px', position: "relative"}}>
                        <div className="itemIMG">
                            <img className="item-pic" src={item.imgURL} style={{left: "0", position: "absolute", height: "100%"}}/>
                        </div>
                        <CardTitle className="card-title" style={{padding: "0px"}}>
                            <h4 className="item-title">{item.name}</h4>
                        </CardTitle>
                        <CardText style={{flex: "auto", width: "auto"}}className="card-text">
                            <p>{item.description}<br/><span>Price: ${item.price}</span></p>
         
                        </CardText>
                    </Card> 
                </Cell>
            );
            koreanItems = this.state.korean.map(item => 
                <Cell key = {item.id} col={6} style={{margin:'7.5px'}}>
                    <Card className="card" shadow={0} style={{width: '100%', height: '100px', margin: '10px', position: "relative"}}>
                        <div className="itemIMG">
                            <img src={item.imgURL} style={{left: "0", position: "absolute", height: "100%"}}/>
                        </div>
                        <CardTitle style={{padding: "0px"}}className="card-title">
                            <h4 className="item-title">{item.name}</h4>    
                        </CardTitle>
                        <CardText className="card-text" style={{flex: "auto", width: "auto"}}>
                            <p>{item.description}<br/><span>Price: ${item.price}</span></p>
                        </CardText>
                    </Card> 
                </Cell>
            );    

            chineseItems = this.state.chinese.map(item => 
                <Cell key = {item.id} col={6} style={{margin:'7.5px'}}>
                    <Card className="card" shadow={0} style={{width: '100%', height: '100px', margin: '10px', position: "relative"}}>
                        <div className="itemIMG">
                            <img src={item.imgURL} style={{left: "0", position: "absolute", height: "100%"}}/>
                        </div>
                        <CardTitle style={{padding: "0px"}}className="card-title">
                            <h4 className="item-title">{item.name}</h4>
                        </CardTitle>
                        <CardText className="card-text" style={{flex: "auto", width: "auto"}}className="card-text">
                            <p>{item.description}<br/><span>Price: ${item.price}</span></p>
                        </CardText>
                    </Card> 
                </Cell>
            );   
        }
        return (
            <div className="container">
                <h2 style={{textAlign: "center"}}>Teriyaki</h2>
                    <Grid className="grid">
                        {teriyakiItems}
                    </Grid>
                <h2 style={{textAlign: "center"}}>Korean Food</h2>
                    <Grid>
                        {koreanItems}
                    </Grid>
                <h2 style={{textAlign: "center"}}>Chinese & Wok</h2>
                    <Grid>
                        {chineseItems}
                    </Grid>
            </div>
        );
    }
}

