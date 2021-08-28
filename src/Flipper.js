import React, { Component } from 'react';
import "./Flipper.css";
import Coin from "./Coin";
import {choice} from "./helpers";

class Flipper extends Component {
    static defaultProps = {
        coins: [
        { imgSrc: "https://github.com/kldscpcdev/coin-flipper-game/blob/master/pngwing.com%20(2).png?raw=true", altText: "heads"},
        { imgSrc: "https://github.com/kldscpcdev/coin-flipper-game/blob/master/pngwing.com%20(1).png?raw=true", altText: "tails"}
        ]
    }
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            totalFlips: 0,//starts at 0 coin flips
            currFace: null,
            heads: 0,
            tails: 0

        }
    }
    flip() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            let newStates = {
                ...st, //unpack existing values in state- makes an object with existing states then updates the ones specified below
                currFace: newCoin,
                totalFlips: st.totalFlips + 1,
                //heads: st.heads + (newCoin.altText === "heads" ? 1 : 0), **ALT WAY TO DO THIS w/o if/else
                //tails: st.tails + (newCoin.altText === "tails" ? 1 : 0), **ALT WAY TO DO THIS
            }
            if(newCoin.altText === "heads"){
                newStates.heads += 1;
            } else {
                newStates.tails += 1;
            }
            return newStates;
        })
    }
    handleClick(e) {
        this.flip();
    }
    render() {
    return (
<div>
    {this.state.currFace && <Coin info={this.state.currFace}/>}
<button onClick={this.handleClick}>FLIP ME</button><p>Out of {this.state.totalFlips} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</p></div>
    )
}
}

export default Flipper;