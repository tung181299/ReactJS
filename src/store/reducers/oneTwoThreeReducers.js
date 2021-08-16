import * as oneTwoThreeConstants from '../constants/oneTwoThreeConstants';
const initialState = {
    player: 'bua',
    win: 0,
    loose: 0,
    draw:0,
    computer: 'bua',
}

export default (state = initialState, {
    type,
    payload
}) => {
    switch (type) {

        case oneTwoThreeConstants.ONE_TWO_THREE:
            return {
                ...state, player: payload
            };

        case oneTwoThreeConstants.PLAY_GAME:
            const randomNum = Math.floor(Math.random() * 3) + 1; 
            if (randomNum === 1) {
                state.computer = 'bua';
            } else if (randomNum === 2) {
                state.computer = 'bao';
            } else {
                state.computer = 'keo';
            }
            // Kiểm tra số bàn
            if ((state.player === 'bua' && state.computer === 'keo') 
            || (state.player === 'bao' && state.computer === 'bua') 
            || (state.player === 'keo' && state.computer === 'bao')) 
            {
                state.win += 1;
            }
            else if((state.player === state.computer)){
                state.draw += 1;
            }
            else{state.loose+=1}
            

            return {
                ...state
            };

        default:
            return state;
    }
}