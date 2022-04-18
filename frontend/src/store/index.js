import { createStore } from "vuex";
import CharacterService from "../services/CharacterService";

export default createStore({
  state: {
    characters : []
  },
  mutations: {
    SET_CHARACTERS(state, characters){
      state.characters = characters
    }
  },
  actions: {
    getCharactersList({ commit }){
      CharacterService.getCharacters()
      .then(({data})=>{
        commit('SET_CHARACTERS', data)
      })
    }
  },
  modules: {},
});
