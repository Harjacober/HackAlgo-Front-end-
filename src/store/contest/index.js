import Axios from 'axios';
import Http from '../../helpers/http';

const defaultState = {
  registerContestFeedback: {
    error: false,
    message: '',
  },
  contest: {
    error: true,
    contest: {},
  },
  timeUp: false,
};

const actions = {
  CONTEST_TIMEUP: (context, value) => {
    context.commit('SET_CONTEST_TIMEUP', value);
  },
  CONTEST: (context, payload) => {
    if (!payload) {
      return context.commit('SET_CONTEST', {
        error: true,
        contest: {},
      });
    }
    Http.post('/enter/contest/', {
        contesttype: 'TYPEA',
        contestid: payload.slug,
      })
      .then((response) => {
        if (response.data.code === 400) {
          context.commit('SET_CONTEST', { error: true });
        } else {
          const contest = response.data.data;
          const res = {
            error: false,
            contest,
          };
          context.commit('SET_CONTEST', res);
        }
      })
      .catch(() => {
        context.commit('SET_CONTEST', { error: true });
      });
    return null;
  },
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
  SET_CONTEST: (state, contest) => {
    state.contest = contest;
  },
  SET_CONTEST_TIMEUP: (state, value) => {
    state.timeUp = value;
  },
};

const getters = {
    registerContestFeedback: state => state.registerContestFeedback,
    currentContest: state => state.contest,
    contestTimeUp: state => state.timeUp,
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
