export const initialState = {
    letters: [],
    message: ''
}

export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_LETTER':
            const { letter } = action.payload;

            if (state.letters.includes(letter)) {

                return {
                    ...state,
                    message: `Cette lettre (${letter}) existe déjà`
                }
            }

            return {
                ...state,
                letters: [...state.letters, letter],
                message: ''
            }

        case 'SHUFFLE':
            const shuffleLetters = [...state.letters].sort(() => Math.random() - 0.5);
            return {
                ...state,
                letters: shuffleLetters
            }

        default:
            return state;
    }
}