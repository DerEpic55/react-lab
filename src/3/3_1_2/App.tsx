// 3_1_2 Profile editor 
/*
    В проекте приведена форма, реализованная на чистом JavaScript.

    Эта форма переключается между двумя режимами: в режиме редактирования вы видите вводимые данные, а в режиме просмотра - только результат. Метка кнопки меняется между "Редактировать" и "Сохранить" в зависимости от того, в каком режиме вы находитесь. Когда вы изменяете вводимые данные, приветственное сообщение внизу обновляется в режиме реального времени.

    Ваша задача - реализовать это на React. Для вашего удобства разметка уже была преобразована в JSX, но вам нужно будет сделать так, чтобы она показывала и скрывала входы, как это делает оригинал.

    Убедитесь, что она также обновляет текст внизу!
*/



import { useState } from "react";

export default function EditProfile() {
  const [isEdit, SetIsEdit] = useState(false);
  const [firstName, SetFirstName] = useState("Jane");
  const [lastName, SetLastName] = useState("Jacobs");

  const handleEdit = (e : any) => {
    e.preventDefault();
    SetIsEdit(!isEdit);
  };

  return (
    <form onSubmit={handleEdit}>
      <label>
        First name:
        {isEdit ? (
          <input
            value={firstName}
            onChange={(e) => SetFirstName(e.target.value)}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last name:
        {isEdit ? (
          <input
            value={lastName}
            onChange={(e) => SetLastName(e.target.value)}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit">{isEdit ? "Save" : "Edit"} Profile</button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}