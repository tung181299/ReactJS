import React, { Component } from 'react';
import PlayGame from './PlayGame';
import './OneTwoThree.css';
import { connect } from 'react-redux';
import {
    actOneTwoThree,
    actPlayGame,
} from '../store/actions/oneTwoThreeActions';
class OneTwoThree extends Component {
    render() {
        const { player, computer, oneTwoThree, playGame } = this.props;
        return (
            <div className='bgCover' style={{
                backgroundImage: `url("../images/bgGame.png")`
            }}>
                <div className='player' style={{
                    backgroundImage: `url("../images/player.png")`
                }}>
                    <div className="chooseOption">
                        <div className="rps">
                            <img src={`./images/${player}.png`} alt="" className='chooseRps' />

                        </div>
                        <div className="chooseOption__style"></div>
                    </div>
                    <button className='btnPlayer btn btn-light mr-2' onClick={() => oneTwoThree('bua')}><img src={"./images/bua.png"} alt=""/></button>
                    <button className='btnPlayer btn btn-light mr-2' onClick={() => oneTwoThree('bao')}><img src={"./images/bao.png"} alt=""/></button>
                    <button className='btnPlayer btn btn-light mr-2' onClick={() => oneTwoThree('keo')}><img src={"./images/keo.png"} alt=""/></button>
                </div>
                <div className="computer" style={{
                    backgroundImage: `url("../images/playerComputer.png")`
                }}>
                    <div className="chooseOption">
                        <div className="rps">
                            <img src={`images/${computer}.png`} alt="" className='chooseRps' />

                        </div>
                        <div className="chooseOption__style"></div>
                    </div>
                </div>

                <div className="playGame pt-5">
                    <PlayGame />
                    <button className="mt-4 btn btn-success" onClick={() => playGame()}>PLAY GAME</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    player: state.oneTwoThreeReducers.player,
    computer: state.oneTwoThreeReducers.computer,
});

const mapDispatchToProps = (dispatch) => ({
    oneTwoThree: (rps) => {
        dispatch(actOneTwoThree(rps));
    },

    playGame: () => {
        dispatch(actPlayGame());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(OneTwoThree);