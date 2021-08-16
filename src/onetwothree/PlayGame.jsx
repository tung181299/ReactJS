import React, { Component } from 'react';
import { connect } from "react-redux";

class PlayGame extends Component {
    render() {
        const {win, loose,draw} = this.props;

        return (
            <div>
                <div className="pt-2">
                    <h1 className='text-warning'>I'm Iron man, i love you 3000!!</h1>
                    <h2 className="text-success">
                        WIN : 
                        <span className="text-warning"> {win}</span>
                    </h2>
                    <h2 className="text-success">
                        LOOSE : 
                        <span className="text-warning"> {loose}</span>
                    </h2>
                    <h2 className="text-success">
                        DRAW : 
                        <span className="text-warning"> {draw}</span>
                    </h2>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    win: state.oneTwoThreeReducers.win,
    loose: state.oneTwoThreeReducers.loose,
    draw: state.oneTwoThreeReducers.draw,
});

export default connect(mapStateToProps)(PlayGame);