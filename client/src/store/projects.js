import router from '../router';
import HTTP from '../http';

export default {
    namespaced: true,
    state: {
        projects: [],
        newProjectTitle: null,
    },
    actions: {
        createProject({ commit, state }) {
            return HTTP().post('/projects', {
                title: state.newProjectTitle,
            }).then(({ data }) => {
                commit('appendProject', data);
                commit('setNewProjectTitle', null); // reset project name
            });
        },
    },
    getters: {
    },
    mutations: {
        setNewProjectTitle(state, name) {
            state.newProjectTitle = name;
        },
        appendProject(state, project) {
            state.projects.push(project);
        },
    },
}