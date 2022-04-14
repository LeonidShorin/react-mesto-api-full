import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner === currentUser._id;
  const isLiked = props.card.likes.some(i => (i === currentUser._id));


  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleConfirmDelete() {
    props.onCardDelete(props.card);
  }

  return (
    (<div className="element">
      <img className="element__photo" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <div className="element__description">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-block">
          <button type="button" onClick={props.onCardLike} className={`element__like-button ${isLiked && 'element__like-button_active'}`}>
            { }
          </button>
          <span className="element__likes-num">{props.card.likes.length}</span>
        </div>
      </div>
      <button type="button" onClick={handleConfirmDelete} className={isOwn? 'element__delete-button' : 'element__delete-button_hide'}>
        { }
      </button>
    </div>)
  )
}

export default Card;