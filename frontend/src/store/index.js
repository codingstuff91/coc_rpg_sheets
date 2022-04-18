import { createStore } from "vuex";
import CharacterService from "../services/CharacterService";

export default createStore({
    state: {
        characters: [],
        character: {},
    },
    mutations: {
        SET_CHARACTERS(state, characters) {
            state.characters = characters;
        },
        SET_CHARACTER_DETAILS(state, character) {
            state.character = character;
        },
    },
    actions: {
        getCharactersList({ commit }) {
            CharacterService.getCharacters().then(({ data }) => {
                commit("SET_CHARACTERS", data);
            });
        },
        getCharacter({ commit }, character_id) {
            CharacterService.getCharacter(character_id.character_id).then(
                ({ data }) => {
                    commit("SET_CHARACTER_DETAILS", data);
                }
            );
        },
    },
    modules: {},
});
