import React, { useRef, useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./Home.module.css";
import "react-image-gallery/styles/css/image-gallery.css";

// ASSETS
import CasaAmarela from "../../Assets/logo_casa_amarela.svg?react";
import CasaAmarelaEstatistica from "../../Assets/casa_amarela_estatistica.svg?react";
import Barrinha from "../../Assets/barrinha.svg?react";
import LogoLabelRed from "../../Assets/logo_label_red.svg?react";
import LogoLabelGreen from "../../Assets/logo_label_green.svg?react";
import PalmTrees from "../../Assets/palm_trees.svg?react";
import LogoLabelOrange from "../../Assets/logo_label_orange.svg?react";

// COMPONENTS
import Header from "../Utils/Header";
import TextContent from "../Utils/TextContent";
import Title from "../Utils/Title";
import ImageGallery from "react-image-gallery";
import Label from "../Utils/Label";
import Hyperlink from "../Utils/Hyperlink";
import SpeechBalloon from "../Utils/SpeechBalloon";
import Footer from "../Utils/Footer";
import Button from "../Utils/Button";

const Home = () => {
  const renderVideo = (item) => {
    return (
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="480px"
          src={item.embedUrl}
          frameBorder="0"
          allowFullScreen
          title="ex"
        />
      </div>
    );
  };
  const videos = [
    {
      embedUrl:
        "https://youtube.com/embed/rsJefiaWU9U?autoplay=1&showinfo=0&controls=0",
      renderItem: renderVideo.bind(this),
    },
    {
      embedUrl:
        "https://youtube.com/embed/ivmkDTmAPeA?autoplay=1&showinfo=0&controls=0",
      renderItem: renderVideo.bind(this),
    },
    {
      embedUrl:
        "https://youtube.com/embed/kCstTSYhfkI?autoplay=1&showinfo=0&controls=0",
      renderItem: renderVideo.bind(this),
    },
    {
      embedUrl:
        "https://youtube.com/embed/4oRnVKAd8RU?autoplay=1&showinfo=0&controls=0",
      renderItem: renderVideo.bind(this),
    },
  ];

  const [hovered, setHovered] = React.useState(null);
  const handleMouseEnter = (label) => {
    setHovered(label);
  };

  const handleTouchEnterCurtain = () => {
    const leftCurtain = document.querySelector(`.${styles.leftCurtainMobile}`);
    const rightCurtain = document.querySelector(
      `.${styles.rightCurtainMobile}`,
    );
    const content = document.querySelector(`.${styles.curtainContentMobile}`);
    if (leftCurtain && rightCurtain && content) {
      leftCurtain.style.transform = "translateX(-100%)";
      rightCurtain.style.transform = "translateX(100%)";
      content.classList.add(styles.visible);

      setTimeout(() => {
        leftCurtain.style.transform = "translateX(0)";
        rightCurtain.style.transform = "translateX(0)";
        content.classList.remove(styles.visible);
      }, 5000);
    }
  };

  const handleMouseEnterCurtain = () => {
    const leftCurtain = document.querySelector(`.${styles.leftCurtain}`);
    const rightCurtain = document.querySelector(`.${styles.rightCurtain}`);
    const content = document.querySelector(`.${styles.curtainContent}`);
    if (leftCurtain && rightCurtain && content) {
      leftCurtain.style.transform = "translateX(-100%)";
      rightCurtain.style.transform = "translateX(100%)";
      content.classList.add(styles.visible);
    }
  };
  const handleMouseLeaveCurtain = () => {
    const leftCurtain = document.querySelector(`.${styles.leftCurtain}`);
    const rightCurtain = document.querySelector(`.${styles.rightCurtain}`);
    const content = document.querySelector(`.${styles.curtainContent}`);
    if (leftCurtain && rightCurtain && content) {
      leftCurtain.style.transform = "translateX(0)";
      rightCurtain.style.transform = "translateX(0)";
      content.classList.remove(styles.visible);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("rsJefiaWU9U");

  const openModalWithVideo = (videoUrl, nome) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
    setHovered(nome);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo("");
  };

  const gallery = [
    "src/Assets/galeria/1.jpg",

    "src/Assets/galeria/2.jpg",

    "src/Assets/galeria/3.jpg",
  ];

  const images = gallery.map((img) => ({
    original: img,
    thumbnail: img,
  }));
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <div>
      <div className={styles.background} />
      <Header
        buttonColor="yellow"
        mobileButton="transparent30"
        logo={CasaAmarela}
      />
      <Parallax pages={9} className={styles.desktop}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <img
            src="src/Assets/home_1.png"
            className={`${styles.desktop} ${styles.homeImg}`}
            alt="Quarto"
          />
          <img
            className={`${styles.mobile} ${styles.homeImg}`}
            src="src/Assets/home_1_mobile.png"
            alt="Quarto"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ ...alignCenter, justifyContent: "start", width: "100%" }}
        >
          <div className={`${styles.casaAmarelaImg}`}>
            <ImageGallery
              items={images}
              showThumbnails={false}
              showPlayButton={false}
              showFullscreenButton={false}
              autoPlay={false}
            />
            <Barrinha className={styles.casaAmarelaBarrinha} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 2 }}
          style={{ ...alignCenter, justifyContent: "end", width: "100%" }}
        >
          <div className={`${styles.casaAmarelaInfo}`}>
            <Title label="CASA AMARELA" type="yellow" />
            <TextContent
              size="medium"
              type="black"
              content="A Casa Amarela é um projeto que conecta turismo, comunidade e sustentabilidade em Barrinha, PI. Nosso objetivo é contribuir para o desenvolvimento da região, promovendo educação, cultura e iniciativas que impulsionem a economia local de forma colaborativa e consciente."
              maxCharacters="maxCharacters30"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ ...alignCenter, justifyContent: "start", width: "100%" }}
        >
          <div className={`${styles.casaAmarelaEstatisticas}`}>
            <img src="src/Assets/destaques_home.png" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "center", width: "100%" }}
        >
          <div className={`${styles.hospitality}`}>
            <div className={styles.hospitalityInfo}>
              <div className={styles.hospitalityTitle}>
                <div>
                  <Label
                    label="Hospitality"
                    type="redReverse"
                    border="squareRound"
                    icon={LogoLabelRed}
                  />
                </div>

                <Title label="Live and experience" type="redAccent3" />
              </div>
              <TextContent
                type="redAccent2"
                content="A Casa Amarela oferece casas na costa do Piauí, criando experiências aconchegantes e autênticas. Valorizamos o turismo sustentável e comunitário, com atividades personalizadas para cada visitante. Aqui, você pode aproveitar paisagens incríveis, vivências únicas e se conectar de verdade com a cultura e as pessoas da região."
                maxCharacters="maxCharacters30"
              />
              <Hyperlink
                color="redAccent3"
                label="Saiba mais sobre nossas hospedagens"
                href="/Hospitality"
              />
            </div>
            <div className={styles.hospitalityRoom}>
              <img
                src="src/Assets/hospitality_room.png"
                alt="Hospitality Room"
              />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.99}
          speed={1}
          style={{ ...alignCenter, justifyContent: "center", width: "100%" }}
        >
          <div className={styles.housesMap}>
            <img
              className={`${styles.housesMap} ${styles.desktop}`}
              src="src/Assets/hospitality_map.png"
              alt="Mapa de estadias"
            />
            <img
              className={styles.mobile}
              src="src/Assets/houses_mobile.jpeg"
              alt="Mapa de estadias"
            />
            <div className={styles.casaRio}>
              <SpeechBalloon
                label="Casa Rio"
                state={hovered === "Casa Rio" ? "selected" : "unselected"}
                onClick={() => openModalWithVideo("rsJefiaWU9U", "Casa Rio")}
                onMouseEnter={() => handleMouseEnter("Casa Rio")}
              />
            </div>
            <div className={styles.casaCaju}>
              <SpeechBalloon
                label="Casa Caju"
                state={hovered === "Casa Caju" ? "selected" : "unselected"}
                onClick={() => openModalWithVideo("kCstTSYhfkI", "Casa Caju")}
                onMouseEnter={() => handleMouseEnter("Casa Caju")}
              />
            </div>
            <div className={styles.casaSal}>
              <SpeechBalloon
                label="Casa Sal"
                state={hovered === "Casa Sal" ? "selected" : "unselected"}
                onClick={() => openModalWithVideo("ivmkDTmAPeA", "Casa Sal")}
                onMouseEnter={() => handleMouseEnter("Casa Sal")}
              />
            </div>
            <div className={styles.casaCamua}>
              <SpeechBalloon
                label="Casa Camuá"
                state={hovered === "Casa Camuá" ? "selected" : "unselected"}
                onClick={() => openModalWithVideo("Vt1YT_ahGTY", "Casa Camuá")}
                onMouseEnter={() => handleMouseEnter("Casa Camuá")}
              />
            </div>
            <div className={styles.casaBaete}>
              <SpeechBalloon
                label="Casa Baeté"
                state={hovered === "Casa Baeté" ? "selected" : "unselected"}
                onClick={() => openModalWithVideo("4oRnVKAd8RU", "Casa Baeté")}
                onMouseEnter={() => handleMouseEnter("Casa Baeté")}
              />
            </div>
            <div className={styles.casaDecker}>
              <SpeechBalloon
                label="Casa Decker"
                state={hovered === "Casa Decker" ? "selected" : "unselected"}
                onMouseEnter={() => handleMouseEnter("Casa Decker")}
              />
            </div>
            <div className={styles.casaDharma}>
              <SpeechBalloon
                label="Casa Dharma"
                state={hovered === "Casa Dharma" ? "selected" : "unselected"}
                onMouseEnter={() => handleMouseEnter("Casa Dharma")}
              />
            </div>
            <div className={styles.casaBruxa}>
              <SpeechBalloon
                label="Casa da Bruxa"
                state={hovered === "Casa da Bruxa" ? "selected" : "unselected"}
                onMouseEnter={() => handleMouseEnter("Casa da Bruxa")}
              />
            </div>
            <div className={styles.cardReserva}>
              <div className={`${styles.desktop}`}>
                {currentVideo && currentVideo !== "" && (
                  <iframe
                    width="315"
                    height="560"
                    src={`https://youtube.com/embed/${currentVideo}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                )}
              </div>
              <div className={`${styles.cardReservaMobile} ${styles.mobile}`}>
                <ImageGallery items={videos} showIndex showPlayButton />
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 4.5, end: 5 }}
          style={{ ...alignCenter, justifyContent: "end", width: "100%" }}
        >
          <div className={styles.piawoodInfo}>
            <div className={styles.hospitalityTitle}>
              <Label
                label="Piawood"
                type="blue"
                icon={LogoLabelGreen}
                border="squareRound"
              />
            </div>
            <TextContent
              type="black"
              content="Piawood é o hub cultural da Casa Amarela, dedicado ao fomento da cultura e talentos locais na região de Barrinha, PI. Atuando como curador e plataforma de crescimento, Piawood promove eventos que integram música, artes visuais, gastronomia e esporte, gerando impacto na cena cultural da região. Além disso, a produtora Yellow Film cria conteúdos audiovisuais que documentam e divulgam essas experiências, conectando a riqueza cultural local a um público mais amplo."
              maxCharacters="maxCharacters30"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4.5} speed={1}>
          <div className={`${styles.piawoodImg} ${styles.desktop}`}>
            <PalmTrees />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={1}>
          <div className={`${styles.piawoodEstatisticas} ${styles.desktop}`}>
            <img
              src="src/Assets/piawood_estatistica.png"
              alt="Estatísticas Piawood"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6} speed={1}>
          <div id="events" className={`${styles.events}`}>
            <div className={styles.eventsInfo}>
              <Title label="Live and" type="green" />
              <Title label="experience" type="green" />
              <div>
                <Button label="Ver eventos" type="green" />
              </div>
            </div>
            <div className={styles.eventsImg}>
              <img src="src/Assets/events_img.png" alt="Estatísticas Piawood" />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6.99} speed={1}>
          <div
            className={styles.yellowFilme}
            onMouseEnter={handleMouseEnterCurtain}
            onMouseLeave={handleMouseLeaveCurtain}
          >
            <div className={styles.curtainContainer}>
              <div className={`${styles.curtain} ${styles.leftCurtain}`}></div>
              <div className={`${styles.curtain} ${styles.rightCurtain}`}></div>
              <div className={styles.curtainContent}>
                <div className={styles.yellowFilmeImg}>
                  <img src="src/Assets/logo_sea.png" alt="Logo Sea" />
                </div>
                <div className={styles.hospitalityInfo}>
                  <div className={styles.hospitalityTitle}>
                    <div>
                      <Label
                        label="Yellow Film"
                        type="orange"
                        icon={LogoLabelOrange}
                        border="squareRound"
                      />
                    </div>
                  </div>
                  <TextContent
                    type="blackBrown"
                    content="A Yellow Filme é uma produtora audiovisual dedicada a promover a Casa Amarela e todas as atividades do hub cultural Piawood. Além disso, a Yellow Filme oferece serviços especializados de audiovisual para marcas e empresas que desejam produções realizadas em coproduções."
                    maxCharacters="maxCharacters30"
                  />
                  <Hyperlink
                    color="orange"
                    label="Saiba mais sobre a Yellow Film"
                    href="/YellowFilm"
                    arrowColor="arrowOrange"
                  />
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={7} speed={2}>
          <div className={styles.videoContainer}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Hjq-ZzT1tjw?si=7ACuc3MS861aW3Uc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={7.9}
          speed={0}
          style={{
            ...alignCenter,
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Footer labelColor="yellowWhite" />
        </ParallaxLayer>
      </Parallax>
      <Parallax pages={6} className={styles.mobile}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <img
            src="src/Assets/home_1_mobile.png"
            className={`${styles.homeImg}`}
            alt="Quarto"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.99}
          speed={1}
          style={{
            ...alignCenter,
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div className={`${styles.casaAmarelaInfo}`}>
            <Title label="CASA AMARELA" type="yellow" />
            <TextContent
              size="medium"
              type="black"
              content="A Casa Amarela é um projeto que conecta turismo, comunidade e sustentabilidade em Barrinha, PI. Nosso objetivo é contribuir para o desenvolvimento da região, promovendo educação, cultura e iniciativas que impulsionem a economia local de forma colaborativa e consciente."
              maxCharacters="maxCharacters30"
            />
          </div>
          <div className={`${styles.casaAmarelaImg}`}>
            <ImageGallery
              items={images}
              showThumbnails={false}
              showPlayButton={false}
              showFullscreenButton={false}
              autoPlay={false}
            />
            <Barrinha className={styles.casaAmarelaBarrinha} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={3}
          style={{ ...alignCenter, justifyContent: "center", width: "100%" }}
        >
          <div className={styles.casaAmarelaEstatisticas}>
            <CasaAmarelaEstatistica />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.99}
          speed={1}
          style={{ ...alignCenter, justifyContent: "center", width: "100%" }}
        >
          <div className={`${styles.hospitality}`}>
            <div className={styles.hospitalityInfo}>
              <div className={styles.hospitalityTitle}>
                <div>
                  <Label
                    label="Hospitality"
                    type="redReverse"
                    border="squareRound"
                    icon={LogoLabelRed}
                  />
                </div>
                <Title label="Live and experience" type="redAccent3" />
              </div>
              <TextContent
                type="redAccent2"
                content="A Casa Amarela oferece casas na costa do Piauí, criando experiências aconchegantes e autênticas. Valorizamos o turismo sustentável e comunitário, com atividades personalizadas para cada visitante. Aqui, você pode aproveitar paisagens incríveis, vivências únicas e se conectar de verdade com a cultura e as pessoas da região."
                maxCharacters="maxCharacters30"
              />
              <Hyperlink
                color="redAccent3"
                label="Saiba mais sobre nossas hospedagens"
                href="/Hospitality"
              />
            </div>
            <div className={styles.hospitalityRoom}>
              <img
                src="src/Assets/hospitality_room.png"
                alt="Hospitality Room"
              />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={3}
          style={{
            ...alignCenter,
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <div className={styles.housesMap}>
            <img src="src/Assets/houses_mobile.jpeg" alt="Mapa de estadias" />
          </div>
          <div className={styles.housesCard}>
            <ImageGallery items={videos} showIndex showPlayButton />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.99}
          speed={1}
          style={{
            ...alignCenter,
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <div className={styles.piawoodInfo}>
            <div className={styles.hospitalityTitle}>
              <Label
                label="Piawood"
                type="blue"
                icon={LogoLabelGreen}
                border="squareRound"
              />
            </div>
            <TextContent
              type="black"
              content="Piawood é o hub cultural da Casa Amarela, dedicado ao fomento da cultura e talentos locais na região de Barrinha, PI. Atuando como curador e plataforma de crescimento, Piawood promove eventos que integram música, artes visuais, gastronomia e esporte, gerando impacto na cena cultural da região. Além disso, a produtora Yellow Film cria conteúdos audiovisuais que documentam e divulgam essas experiências, conectando a riqueza cultural local a um público mais amplo."
              maxCharacters="maxCharacters30"
            />
          </div>
          <div className={`${styles.piawoodImg}`}>
            <img src="src/Assets/palm_trees.png" alt="Palm Trees" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={3}>
          <div className={`${styles.piawoodEstatisticas}`}>
            <img
              src="src/Assets/piawood_estatistica.png"
              alt="Estatísticas Piawood"
            />
          </div>
          <div id="events" className={`${styles.events}`}>
            <div className={styles.eventsInfo}>
              <Title label="Live and" type="green" />
              <Title label="experience" type="green" />
              <div>
                <Button label="Ver eventos" type="green" />
              </div>
            </div>
            <div className={`${styles.eventsImg}`}>
              <img src="src/Assets/events_img.png" alt="Eventos" />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.9} speed={1}>
          <div
            className={styles.yellowFilme}
            onTouchStart={handleTouchEnterCurtain}
          >
            <div className={styles.curtainContainer}>
              <div
                className={`${styles.curtain} ${styles.leftCurtainMobile}`}
              ></div>
              <div
                className={`${styles.curtain} ${styles.rightCurtainMobile}`}
              ></div>
              <div className={styles.curtainContentMobile}>
                <div className={styles.yellowFilmeImg}>
                  <img src="src/Assets/logo_sea.png" alt="Logo Sea" />
                </div>
                <div className={styles.hospitalityInfo}>
                  <div className={styles.hospitalityTitle}>
                    <div>
                      <Label
                        label="Yellow Film"
                        type="orange"
                        icon={LogoLabelOrange}
                        border="squareRound"
                      />
                    </div>
                  </div>
                  <TextContent
                    type="blackBrown"
                    content="A Yellow Filme é uma produtora audiovisual dedicada a promover a Casa Amarela e todas as atividades do hub cultural Piawood. Além disso, a Yellow Filme oferece serviços especializados de audiovisual para marcas e empresas que desejam produções realizadas em coproduções."
                    maxCharacters="maxCharacters30"
                  />
                  <Hyperlink
                    color="orange"
                    label="Saiba mais sobre a Yellow Film"
                    href="/YellowFilm"
                    arrowColor="arrowOrange"
                  />
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={3}>
          <div className={styles.videoContainer}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Hjq-ZzT1tjw?si=7ACuc3MS861aW3Uc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.9}
          speed={0}
          style={{
            ...alignCenter,
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Footer labelColor="yellowWhite" />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
export default Home;
