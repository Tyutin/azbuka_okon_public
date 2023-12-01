export const state = () => ({
  callbackPopupIsOpen: false,
  callbackMode: 'callback',
  usluga: { title: 'Бесплатный вызов замерщика', subtitle: '' }
})

export const mutations = {
  openCallbackPopup (state, usluga) {
    state.callbackPopupIsOpen = true
    state.callbackMode = 'callback'
    state.usluga = usluga || {
      title: 'Бесплатный вызов замерщика',
      subtitle: ''
    }
  },
  openSuccessPopup (state) {
    state.callbackPopupIsOpen = true
    state.callbackMode = 'success'
  },
  openErrorPopup (state) {
    state.callbackPopupIsOpen = true
    state.callbackMode = 'error'
  },
  closeAllPopup (state) {
    state.callbackPopupIsOpen = false
    state.callbackMode = 'callback'
    state.usluga = { title: 'Бесплатный вызов замерщика', subtitle: '' }
  }
}
