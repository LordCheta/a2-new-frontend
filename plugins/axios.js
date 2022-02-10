export default function ({ $axios, store }) {
  if(store.state.merchantUserDetails) {
    $axios.setToken(store.state.merchantUserDetails.token, 'Bearer')
  }
}
