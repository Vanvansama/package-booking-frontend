import { api } from '@/request/api'

const action = {
  getPackage ({ commit }) {
    api.get()
      .then((response) => {
        commit('setPackage', { list: response.data })
      }).catch(error => console.log(error))
  },
  addPackage (context, data) {
    api.add(data)
      .then((response) => {
        if (response.status === 200) {
          context.dispatch('getPackage')
        }
      }).catch(error => console.log(error))
  },
  updatePackage (context, data) {
    api.update(data)
      .then((response) => {
        if (response.status === 200) {
          context.dispatch('getPackage')
        }
      }).catch(error => console.log(error))
  },
  bookingPackage (context, data) {
    api.book(data)
      .then((response) => {
        console.log(response)
      }).catch(error => console.log(error))
  },
  filterPackage (context, data) {
    if (data === undefined) {
      context.dispatch('getPackage')
    }
    api.filter(data)
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          context.commit('setPackage', { list: response.data })
        }
      }).catch(error => console.log(error))
  }
}

export default action;