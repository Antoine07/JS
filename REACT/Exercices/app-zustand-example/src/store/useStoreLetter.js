import { create } from "zustand";

const useStoreLetter = create((set, get) => ({
    // État initial
    letters: [],
    message: 'Hello Zustand ajoute une lettre',
    // Actions pour manipuler l'état
    addLetter: (letter) =>{
        const { message } = get()
        console.log(message)

        set((state) => ({ letters: [...state.letters, letter], message: 'je suis vide' }))
    },
    clearLetter: () => set({ letters: [] }),
}));

export default useStoreLetter;