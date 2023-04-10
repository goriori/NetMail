import React, {useState, useEffect} from "react";
import Navbar from "../components/navbar/navbar";
import Panel from "../components/panel/panel";
import LettterFooter from "../components/letter_footer/letter.footer";
import Mail from "../components/mail/mail";

const Snoozed = () => {
  const [activeAll, setActiveAll] = useState(false);
    const onActiveAll = () => {
      setActiveAll(!activeAll);
    };
  
    useEffect(() => {
      console.log("change");
    }, [activeAll]);
  
  const mail = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
  ];

  return (
    <div className="snoozed p-5">
      <div className="content">
        <div className="navigate">
          <Navbar />
        </div>
        <div className="box_mails p-5 ms-5">
          <Panel activeAll={activeAll} onActiveAll={onActiveAll} />
          <div className="letters">
          {mail.map((i) => {
            return <Mail key={i} activeAll={activeAll} />;
          })}
          <LettterFooter/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snoozed;
