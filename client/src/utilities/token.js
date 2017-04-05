export function getToken() {
  return window.localStorage.getItem('id_token');
}

export function removeAuthToken() {
  window.localStorage.removeItem('id_token');
}