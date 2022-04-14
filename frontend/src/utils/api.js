class Api {
  constructor({baseURL}) {
    this._URL = baseURL;
  }

  _handleError(res, errorText) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`${errorText}. Статус ошибки: ${res.status}`);
  }

  getUserInfo(jwt) {
    return fetch(this._URL + '/users/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
    }})
      .then((res) => {
        return this._handleError(res, 'Ошибка, не удалось загрузить данные пользователя');
      });
  }


  getInitialCards(jwt) {
    return fetch(this._URL + '/cards', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`}
    })
      .then(res => {
        return this._handleError(res, 'Ошибка, не удалось загрузить карточки')
      });
  }

  editProfile({name, description}, jwt) {
    return fetch(this._URL + '/users/me', {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`},
      body: JSON.stringify({
        name: name, about: description
      })
    })
      .then(res => {
        return this._handleError(res, 'Ошибка, не удалось обновить профиль пользователя')
      });
  }

  updateUserAvatar(avatarLink, jwt) {
    return fetch(this._URL + '/users/me/avatar', {
      method: "PATCH",
      headers: {'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`},
      body: JSON.stringify({
        avatar: avatarLink
      })
    })
      .then(res => {
        return this._handleError(res, 'Ошибка, не удалось обновить аватар пользователя')
      });
  }

  addCard({name, link}, jwt) {
    return fetch(this._URL + '/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      },
      body: JSON.stringify({
        name: name, link: link
      })
    })
      .then(res => {
        return this._handleError(res, 'Ошибка, не удалось добавить карточку')
      });
  }

  deleteCard(cardId, jwt) {
    return fetch(this._URL + '/cards/' + cardId, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`},
    })
      .then(res => {
        return this._handleError(res, 'Ошибка, не удалось удалить карточку')
      });
  }

  addLike(cardId, jwt) {
    return fetch(this._URL + '/cards/' + cardId + '/likes/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      },
    })
      .then(res => {
        return this._handleError(res, 'Ошибка, не удалось поставить лайк карточке')
      });
  }

  removeLike(cardId, jwt) {
    return fetch(this._URL + '/cards/' + cardId + '/likes/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
    })
      .then(res => {
        return this._handleError(res, 'Ошибка, не удалось удалить лайк карточки')
      });
  }
}

export const api = new Api({
  baseURL: 'https://api.mestobyleonid.nomoredomains.work',
});