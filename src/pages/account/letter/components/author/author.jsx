import React from "react";
import './author.css'
const Author = () => {
  return (
    <div className="information_author_letter d-flex align-items-center mb-3 ">
      <div className="avatar_author rounded-circle bg-dark "></div>
      <div className="other_information d-flex ms-3 align-items-center">
        <strong className="name_author ">hh.ru</strong>
        <strong className="address_author ms-2">noreply@hh.ru</strong>
        <div className="cancel_subscribe ms-2 ">Отказаться от подписки</div>
      </div>
    </div>
  );
};

export default Author
