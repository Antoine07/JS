// store 
export const initialeState = {
    total: 0,
    message: '',
    precision: 100,
}

// reducer logique métier
export const reducer = (state, action) => {
    let num1, num2;

    switch (action.type) {
        case 'MESSAGE':
            const { message } = action.payload
            return {
                ...state,
                message
            }

        case 'RESET':

            return { ...state, total: 0, message: '' }

        case '+':
            num1 = action.payload.num1
            num2 = action.payload.num2

            return {
                ...state,
                total: Math.floor((parseFloat(num1) + parseFloat(num2)) * state.precision) / state.precision,
                message: ''
            }

        case 'x':
            // je renomme les constantes first et second qui sont déjà utilisées plus haut
            num1 = action.payload.num1
            num2 = action.payload.num2

            return {
                ...state,
                total: Math.floor((parseFloat(num1) * parseFloat(num2)) * state.precision) / state.precision,
                message: ''
            }

        default:
            return state;
    }
}