import React, { useState } from "react";
import {
  Form,
  ButtonGroup,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "./actions.css";
const Actions = () => {
  const updatePage = () => {
    location.reload();
  };

  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="action_letters d-flex justify-content-between">
      <div className="action_choice d-flex">
        <div className="choice_all">
          <Form.Check type="checkbox" id="custom-switch" />
        </div>
        <div className="choice_update ms-3 ">
          <span class="material-symbols-outlined" onClick={updatePage}>
            update
          </span>
        </div>
        <div className="choice_more ms-3">
          <span
            class="material-symbols-outlined"
            onClick={() => setDropdown((dropdown) => !dropdown)}
          >
            more_vert
          </span>
          {dropdown && (
            <div className="drop_more p-2">
              <ButtonGroup vertical>
                <Button variant="outline-dark">Отметить как прочитанное</Button>
                <Button variant="outline-dark">Пометить как важное</Button>
                <Button variant="outline-dark">Добавить пометку</Button>
                <Button variant="outline-dark">
                  Фильтровать похожие письма
                </Button>
                <Button variant="outline-dark">Игнорировать</Button>
                <Button variant="outline-dark">
                  Переслать как прикрепленный файл
                </Button>
              </ButtonGroup>
            </div>
          )}
        </div>
      </div>
      <div className="action_filter d-flex align-items-center">
        <div className="pagination_letter text-center p-2">50 из 1000</div>
        <div className="pagination_skip text-center d-flex p-2 ">
          <span class="material-symbols-outlined">chevron_left</span>
          <span class="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="languages text-center">
          <DropdownButton id="dropdown-basic-button" title="Language ">
            <Dropdown.Item >Русский</Dropdown.Item>
            <Dropdown.Item >English</Dropdown.Item>
            <Dropdown.Item >China</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
};

export default Actions;
