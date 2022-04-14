import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card.js';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content page__content">
      <section className="profile">
        <div className="profile__avatar-block" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}>{ }</button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}>{ }</button>
      </section>
      <section className="elements">
        {props.cards.map(item => (<Card key={item._id} card={item} onCardClick={props.onCardClick} onCardLike={() => props.onCardLike(item)}
          onCardDelete={() => props.onCardDelete(item)} />))}
      </section>
    </main>
  )
}

export default Main;