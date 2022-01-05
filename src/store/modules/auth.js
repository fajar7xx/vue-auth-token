import axios from 'axios'

const state = {
  user: null
}

const mutations = {
  SET_USER_DATA (state, userData) {
    state.user = userData
    // store userdata to localStorage
    localStorage.setItem('user', JSON.stringify(userData))

    // set axios header and add token
    axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
  },
  CLEAR_USER_DATA (state) {
    // state.user = null
    // localStorage.removeItem('user')
    // axios.defaults.headers.common['Authorization'] = null

    // refactory
    localStorage.removeItem('user')
    location.reload()
  }
}

const actions = {
//   register ({ commit }, creadentials) {
//     return axios
//       .post('//localhost:3000/register', creadentials)
//       .then(({ data }) => {
//         console.log('user data is : ', data)
//         commit('SET_USER_DATA', data)
//       })
//   }

  //   convert to async
  async register ({ commit }, userData) {
    const { data } = await axios.post('//localhost:3000/register', userData)
    console.log('user data is: ', data)
    commit('SET_USER_DATA', data)
  },
  async login ({ commit }, userData) {
    const { data } = await axios.post('//localhost:3000/login', userData)
    console.log('user login is: ', data)
    commit('SET_USER_DATA', data)
  },
  logout ({ commit }) {
    commit('CLEAR_USER_DATA')
  }
}

const getters = {
  loggedIn (state) {
    //   it means state user null return false
    // if user has any data return true
    return !!state.user
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
