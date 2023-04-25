import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText={"Сохранить"}
    >
      <input
        className="form__input form__input_avatar_link"
        type="url"
        name="avatar"
        id="avatar"
        minLength={2}
        required
        placeholder="Ссылка на картинку"
      />
      <span className="form__input-error avatar-error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;