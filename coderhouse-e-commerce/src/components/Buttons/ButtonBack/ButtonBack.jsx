import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./ButtonBack.css";

const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className="back-btn" onClick={() => navigate(-1)}>
        <ArrowBackIosIcon></ArrowBackIosIcon>
        Voltar
      </button>
    </div>
  );
};

export default ButtonBack;
