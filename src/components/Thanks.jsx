import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill/>,
  neutral: <BsFillEmojiNeutralFill/>,
  satisfied: <BsFillEmojiSmileFill/>,
  very_satisfied: <BsFillEmojiHeartEyesFill/>,
}

export const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Falta Pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto para a sua próxima compra
      </p>
      <p>
        para concluir sua própria avaliação clique no botão de Enviar abaixo
      </p>
      <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>
      <p className="review-data">
        <span>Satisfação com o produto: </span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span className="comment">Comentário: </span>
        <p className="comment-area">{data.comment}</p>
      </p>
    </div>
  );
};
