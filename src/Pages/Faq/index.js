import React from "react";
import { RiAddCircleLine, RiSubtractLine } from "react-icons/ri";

import { Container } from "./styles";

function Faq() {
  const [showResp, setShowResp] = React.useState(false);

  return (
    <Container>
      <ul>
        <li>
          <div className="li_mainDiv">
            <div onClick={() => setShowResp((prev) => (prev === 1 ? false : 1))}>
              <div className="add_remove_icon">
                {showResp === 1 ? <RiSubtractLine /> : <RiAddCircleLine />}
              </div>

              <h3>Esse troço ae é pago?</h3>
            </div>
            {showResp === 1 && <p>É</p>}
          </div>
        </li>
        <li>
          <div className="li_mainDiv">
            <div onClick={() => setShowResp((prev) => (prev === 2 ? false : 2))}>
              <div className="add_remove_icon">
                {showResp === 2 ? <RiSubtractLine /> : <RiAddCircleLine />}
              </div>

              <h3>Custa quanto?</h3>
            </div>
            {showResp === 2 && <p>R$ 1,90</p>}
          </div>
        </li>
        <li>
          <div className="li_mainDiv">
            <div onClick={() => setShowResp((prev) => (prev === 3 ? false : 3))}>
              <div className="add_remove_icon">
                {showResp === 3 ? <RiSubtractLine /> : <RiAddCircleLine />}
              </div>

              <h3>E faz o q?</h3>
            </div>
            {showResp === 3 && <p>Toca música</p>}
          </div>
        </li>
      </ul>
    </Container>
  );
}

export default Faq;
