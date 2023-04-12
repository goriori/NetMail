import React, {useState} from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const MoreVert = () => {
    const [visibility, setVisibility] = useState(false);
    return(
        <div className="more_actions position-relative">
          <span className="material-symbols-outlined ms-2 p-1" onClick={()=> setVisibility(!visibility)}>more_vert</span>
          {visibility && (
            <div className="action_items p-2 bg-secondary rounded position-absolute ">
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
    )
}
export default MoreVert