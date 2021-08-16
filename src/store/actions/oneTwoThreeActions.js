import * as oneTwoThreeConstants from '../constants/oneTwoThreeConstants';

export const actOneTwoThree = (rps) => ({
    type: oneTwoThreeConstants.ONE_TWO_THREE,
    payload: rps,
});

export const actPlayGame = () => ({
    type: oneTwoThreeConstants.PLAY_GAME,
})