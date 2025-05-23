import "./Home.css";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer.jsx";
import photoHome from "../../assets/image/photoHome.jpeg";
import ButtonHome from "../../components/ButtonHome/ButtonHome.jsx";

function Home() {
  return (
    <>
      <div className="container-homepage">
        <section className="home">
          <div className="info">
            <h1>Coleções</h1>
            <p>
              Sabia que a nossa nova coleção <br></br>
              <b>Streetwear</b> tá na área?
            </p>
            <ButtonHome text="Conferir" />
          </div>

          <div className="photo-info">
            <img src={photoHome} alt="" />
            <div className="border-img"></div>
          </div>
        </section>

        <section id="streetwear" className="item-list">
          <ItemListContainer message="Bem-vindo!" />
        </section>
      </div>
    </>
  );
}

export default Home;
