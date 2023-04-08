import React, { useState } from "react";
import { Form, ButtonGroup, Button } from "react-bootstrap";
import "./choise.css";

const Choise = ({ activeAll, onActiveAll }) => {
  console.log(activeAll);

  const [dropdown, setDropdown] = useState(false);

  const updatePage = () => {
    location.reload();
  };

  let drop_ifno = (
    <div className="drop_more p-2">
      <ButtonGroup vertical>
        <Button variant="outline-dark">Отметить как прочитанное</Button>
        <Button variant="outline-dark">Пометить как важное</Button>
        <Button variant="outline-dark">Добавить пометку</Button>
        <Button variant="outline-dark">Фильтровать похожие письма</Button>
        <Button variant="outline-dark">Игнорировать</Button>
        <Button variant="outline-dark">Переслать как прикрепленный файл</Button>
      </ButtonGroup>
    </div>
  );

  activeAll === false
    ? (drop_ifno = <div className="drop_more p-2">Нужно выбрать</div>)
    : drop_ifno;


    
  return (
    <div className="action_choice d-flex">
      <div className="choice_all">
        <Form.Check
          type="checkbox"
          id="custom-switch"
          value={activeAll}
          onClick={onActiveAll}
        />
      </div>
      <div className="choice_update ms-3 ">
        <span className="material-symbols-outlined" onClick={updatePage}>
          update
        </span>
      </div>
      <div className="choice_more ms-3">
        <span
          className="material-symbols-outlined"
          onClick={() => setDropdown((dropdown) => !dropdown)}
        >
          more_vert
        </span>
        {dropdown === true ? drop_ifno : false}
      </div>
    </div>
  );
};

export default Choise;
