import "./Home.css";
import ItemListContainer from "../../components/ItemDetailContainer/ItemDetailContainer.jsx";
import photoHome from "../../assets/image/photoHome.jpeg";
import ButtonHome from "../../components/Buttons/ButtonHome/ButtonHome.jsx";
import { Link } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemListContainer/ItemListContainer.jsx";

function Home() {
  return (
    <>
      <div className="container">
        <section className="home">
          <div className="info">
            <h1>E aí, tranquilo?</h1>
            <p>
              Sabia que a nossa nova coleção <br></br>
              <b>Streetwear</b> tá na área?
            </p>
            <Link to="/colection">
              <ButtonHome text="Conferir" />
            </Link>
          </div>

          <div className="photo-info">
            <img src={photoHome} alt="" />
            <div className="border-img"></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
