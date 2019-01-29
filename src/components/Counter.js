import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import styled from 'styled-components';

const FullDiv = styled.div`
        width: 80%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        button {
            width: 60%;
            margin: 10px;
            padding: 10px;
            border: 2px solid black;
            border-radius: 5px;
            background-color: rgb(245,245,245);

            &:hover{
                background-color: darkred;
            }

        }
    `;

class Counter extends Component {
    incrementIfOdd = () => {
        if(this.props.count % 2 !== 0 ){
            this.props.increment();
        }
    };

    incrementAsync = () => {
        setTimeout(() => {
            this.props.increment()
        }, 1000)
    };

    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        return (
            <FullDiv>
                Clicked: {this.props.count} times
                <button onClick={(count) => this.props.increment(count) }>
                    +
                </button>
                <button onClick={(count) => this.props.decrement(count) }>
                    -
                </button>
                 {/* Uncomment these button tags if you got
                around to implementing the extra credit functions */}
                 <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                <button onClick={this.incrementAsync}>
                    Increment async
                </button> 
            </FullDiv>
        );
    }
}

// The mapStateToProps function specifies which portion of the 
// state tree this component needs to receive. In this case, 
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { increment, decrement })(Counter);
