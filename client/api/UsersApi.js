
class UsersApi {
  static getAllUsers() {
    return fetch('/api/documents').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateUser(user) {
    const request = new Request(`api/users/${user.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({user: user})
    });


    return fetchUser(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createUser(user) {
    const request = new Request('/api/users/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({cat: user})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteUser(user) {
    const request = new Request(`/api/users/${user.id}`, {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default UsersApi;
