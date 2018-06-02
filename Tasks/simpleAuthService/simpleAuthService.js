import axios from 'axios';
import { changeRoute } from './Utils';
import store from '../store/store';

const baseUrl = process.env.API;
const errorStatuses = {
  authStatus: '403',
};

function getToken() {
  return (store.getters.getToken ? store.getters.getToken : localStorage.getItem('token'));
}

export const HTTPApi = ({ method, url, data }) => {
  const token = getToken();
  const request = axios.create({
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  return request[method](baseUrl + url, data)
    .catch(error => {
      if (error.status === errorStatuses.authStatus) {
        changeRoute('auth');
      }

      return Promise.reject(error);
    });
};


// change route is:
import { router } from '../main';
import routes from '../router/routes';

export const changeRoute = function(url) {
  router.push({ name: url });
};

// The example where it is using (vue.js, vuex)
getDomains({ commit, state }) {
    const requestObj = {
      method: 'get',
      url: 'domains/',
      data: null,
    };

    HTTPApi(requestObj)
      .then((response) => {
        if (response.data) {
          const domains = response.data;
          commit('setDomains', domains);
        }
      });
  },
