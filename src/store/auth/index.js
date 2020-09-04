import Axios from 'axios';
import Http from '../../helpers/http';
import { setAuthToken, isAuthenticated, removeAuthToken } from '../../helpers/auth';

const defaultState = {
  user: {},
  feedback: {
    error: false,
    message: '',
  },
  upFeedback: {},
};

const actions = {
    VERIFY: (context, payload) => {
        let error = { error: true };
        Http().get(`/user/registration/?id=${payload.id}`)
        .then((response) => {
          if (response.data.code === 500 || response.data.code === 400) {
            error = { ...error, message: 'Invalid Provided token' };
            context.commit('SET_AUTH_FEEDBACK', error);
          } else {
            context.commit('SET_AUTH_FEEDBACK', { error: false });
          }
        })
        .catch((err) => {
          error = { ...error, ...err };
          context.commit('SET_AUTH_FEEDBACK', error);
        });
    },
    RECOVER: (context, payload) => {
      let error = { error: true };
      Http().get(`/forgot/password/?email=${payload.email}`)
      .then((response) => {
        if (response.data.code === 500 || response.data.code === 400 || response.data.code === 404) {
          error = { ...error, message: response.data.msg };
          context.commit('SET_AUTH_FEEDBACK', error);
        } else {
          context.commit('SET_AUTH_FEEDBACK', { error: false });
        }
      })
      .catch((err) => {
        error = { ...error, ...err };
        context.commit('SET_AUTH_FEEDBACK', error);
      });
    },
    CURRENT_USER: (context, user) => {
      context.commit('SET_CURRENT_USER', user);
    },
    LOGIN: (context, payload) => {
        const { CancelToken } = Axios;
        const source = CancelToken.source();
        let error = { error: true };

        Http().post('/user/login/', payload, {
            cancelToken: source.token,
        })
        .then((response) => {
            if (response.data.code === 400) {
              error = { ...error, message: 'Invalid Credentials' };
              context.commit('SET_AUTH_FEEDBACK', error);
            } else {
              setAuthToken(response.data.access_token);
              context.commit('SET_CURRENT_USER', null);
              context.commit('SET_AUTH_FEEDBACK', { error: false, message: response.data.msg });
            }
        })
        .catch((err) => {
          error = { ...error, ...err };
          context.commit('SET_AUTH_FEEDBACK', error);
        });
    },
    LOGOUT: (context, payload) => {
      removeAuthToken();
      context.commit('SET_CURRENT_USER', null);
      context.commit('SET_AUTH_FEEDBACK', { error: false, message: 'Logout successfully, we hope to see you soon 😊' });
    },
    REGISTER: (context, payload) => {
        const { CancelToken } = Axios;
        const source = CancelToken.source();
        let error = { error: true };
        Http().post('/user/registration/', payload, {
            cancelToken: source.token,
        })
        .then((response) => {
            if (response.data.code === 400) {
              error = { ...error, message: response.data.msg };
              context.commit('SET_AUTH_FEEDBACK', error);
            } else {
               const feedback = {
                  error: false,
                  message: 'You have successfully registered',
                  response,
              };
              context.commit('SET_AUTH_FEEDBACK', feedback);
              context.commit('SET_CURRENT_USER', payload);
            }
        })
        .catch((err) => {
            error = { ...error, ...err };
            context.commit('SET_AUTH_FEEDBACK', error);
        });
    },
    UPDATE_USER: (context, payload) => {
      let error = { error: true };
      Http().post('/user/profile/update/', payload)
      .then((response) => {
          if (response.data.code === 400) {
            error = { ...error, message: response.data.msg };
            context.commit('SET_UPDATE_FEEDBACK', error);
          } else {
            setAuthToken(response.data.access_token);
            context.commit('SET_CURRENT_USER', null);
            context.commit('SET_UPDATE_FEEDBACK', { error: false, message: response.data.msg });
          }
      })
      .catch((err) => {
          error = { ...error, ...err };
          context.commit('SET_UPDATE_FEEDBACK', error);
      });
  },
  CHANGE_PASSWORD: (context, payload) => {
    let error = { error: true };
    Http().post('/change/password/authuser/', payload)
    .then((response) => {
      if (response.data.code === 500 || response.data.code === 400) {
        error = { ...error, message: response.data.msg };
        context.commit('SET_UPDATE_FEEDBACK', error);
      } else {
        context.commit('SET_UPDATE_FEEDBACK', { error: false });
      }
    })
    .catch((err) => {
      error = { ...error, ...err };
      context.commit('SET_UPDATE_FEEDBACK', error);
    });
  },
  RESET_PASSWORD: (context, payload) => {
    let error = { error: true };
    Http().post('/change/password/', payload)
    .then((response) => {
      if (response.data.code === 500 || response.data.code === 400) {
        error = { ...error, message: 'Invalid Provided token' };
        context.commit('SET_AUTH_FEEDBACK', error);
      } else {
        context.commit('SET_AUTH_FEEDBACK', { error: false });
      }
    })
    .catch((err) => {
      error = { ...error, ...err };
      context.commit('SET_AUTH_FEEDBACK', error);
    });
  },
};

const mutations = {
  SET_CURRENT_USER: (state, user) => {
    state.user = user || isAuthenticated();
  },
  SET_AUTH_FEEDBACK: (state, feedback) => {
    state.feedback = feedback;
  },
  SET_UPDATE_FEEDBACK: (state, feedback) => {
    state.upFeedback = feedback;
  },
};

const getters = {
    currentUser: state => state.user,
    authFeedback: state => state.feedback,
    updateFeedback: state => state.upFeedback,
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
