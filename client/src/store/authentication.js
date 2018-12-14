import router from '../router';
import HTTP from '../http';

export default {
    namespaced: true,
    state: {
        registerEmail: null,
        registerPassword: null,
        registerError: null,
        loginEmail: null,
        loginPassword: null,
        loginError: null,
        token: null,
    },
    actions: {
        register({ commit, state }) {
            commit('setRegisterError', null);
            return HTTP().post('/auth/register', {
                email: state.registerEmail,
                password: state.registerPassword,
            }).then(({ data }) => {
                commit('setToken', data.token); // sets token in state
                router.push('/');
            }).catch(() => {
                commit('setRegisterError', 'An error occured during registration!');
            });
        },
        login({ commit, state }) {
            commit('setLoginError', null);
            return HTTP().post('/auth/login', {
                email: state.loginEmail,
                password: state.loginPassword,
            }).then(({ data }) => {
                commit('setToken', data.token);
                router.push('/');
            }).catch(() => {
                commit('setLoginError', 'An error occured during login!');
            });
        },
        logout({ commit }) {
            commit('setToken', null);
            router.push('/login');
        },
    },
    getters: {
        isLoggedIn(state) {
            return !!state.token;
        },
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setRegisterError(state, error) {
            state.registerError = error;
        },
        setRegisterEmail(state, email) {
            state.registerEmail = email;
        },
        setRegisterPassword(state, password) {
            state.registerPassword = password;
        },
        setLoginError(state, error) {
            state.loginError = error;
        },
        setLoginEmail(state, email) {
            state.loginEmail = email;
        },
        setLoginPassword(state, password) {
            state.loginPassword = password;
        },
    },
}