import Axios from 'axios';
import Http from '../../helpers/http';

const defaultState = {
  registerContestFeedback: {
    error: false,
    message: '',
  },
};

const actions = {
  REGISTER_FOR_CONTEST: (context, payload) => {
        const { CancelToken } = Axios;
        const source = CancelToken.source();
        let error = { error: true };

        Http.post('/register/contest/', payload, {
            cancelToken: source.token,
        })
        .then((response) => {
          if (response.data.code === 500 || response.data.code === 400) {
            error = { ...error, message: response.data.msg || 'Something went wrong' };
            context.commit('SET_REGISTER_FOR_CONTEST_FEEDBACK', error);
          } else {
            context.commit('SET_REGISTER_FOR_CONTEST_FEEDBACK', { error: false });
          }
        })
        .catch((err) => {
          error = { ...error, ...err };
          context.commit('SET_REGISTER_FOR_CONTEST_FEEDBACK', error);
        });
    },
};

const mutations = {
  SET_REGISTER_FOR_CONTEST_FEEDBACK: (state, feedback) => {
    state.registerContestFeedback = feedback;
  },
};

const getters = {
    registerContestFeedback: state => state.registerContestFeedback,
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
