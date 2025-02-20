import React, { useRef, useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./Home.module.css";
import Header from "../Utils/Header";
import Divider from "../Utils/Divider";
import Barrinha from "../../Assets/barrinha.svg?react";
import CasaAmarelaEstatistica from "../../Assets/casa_amarela_estatistica.svg?react";
import HospitalityRoom from "../../Assets/hospitality_room.svg?react";
import PalmTrees from "../../Assets/palm_trees.svg?react";
import EventsImg from "../../Assets/events_img.svg?react";
import LogoSea from "../../Assets/logo_sea.svg?react";
import LogoLabelRed from "../../Assets/logo_label_red.svg?react";
import LogoLabelGreen from "../../Assets/logo_label_green.svg?react";
import LogoLabelOrange from "../../Assets/logo_label_orange.svg?react";
import CardButtonRight from "../../Assets/right_arrow_card.svg?react";
import CardButtonLeft from "../../Assets/left_arrow_card.svg?react";
import TextContent from "../Utils/TextContent";
import Carousel from "../Utils/Carousel";
import Title from "../Utils/Title";
import Label from "../Utils/Label";
import Hyperlink from "../Utils/Hyperlink";
import SpeechBalloon from "../Utils/SpeechBalloon";
import Card from "../Utils/Card";
import Button from "../Utils/Button";
import Footer from "../Utils/Footer";
import CasaAmarela from "../../Assets/logo_casa_amarela.svg?react";
import Modal from "../Utils/Modal";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const Home2 = () => {
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

  const handleMouseLeave = () => {
    setHovered("Casa Caju");
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("rsJefiaWU9U");

  const openModalWithVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo("");
  };

  const sectionRefs = useRef([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [
    isCasaAmarelaEstatisticasVisible,
    setIsCasaAmarelaEstatisticasVisible,
  ] = useState(false);
  const [isPiawoodEstatisticasVisible, setIsPiawoodEstatisticasVisible] =
    useState(false);
  const [startY, setStartY] = useState(null);
  const [casaAmarelaSwipeStep, setCasaAmarelaSwipeStep] = useState(0);

  const handleScroll = (event) => {
    const currentSection = sectionRefs.current[currentSectionIndex];
    if (currentSection) {
      const { scrollTop, scrollHeight, clientHeight } = currentSection;
      if (
        (event.deltaY > 0 && scrollTop + clientHeight < scrollHeight) ||
        (event.deltaY < 0 && scrollTop > 0)
      ) {
        currentSection.scrollTop += event.deltaY;
      } else {
        if (
          event.deltaY > 0 &&
          scrollTop + clientHeight >= scrollHeight &&
          currentSectionIndex < sectionRefs.current.length - 1
        ) {
          setCurrentSectionIndex(currentSectionIndex + 1);
          scrollToSection(currentSectionIndex + 1);
        } else if (
          event.deltaY < 0 &&
          scrollTop === 0 &&
          currentSectionIndex > 0
        ) {
          setCurrentSectionIndex(currentSectionIndex - 1);
          scrollToSection(currentSectionIndex - 1);
        }
      }
    }
  };

  const handleCasaAmarelaScroll = (event) => {
    const scrollTop = event.target.scrollTop;
    setIsCasaAmarelaEstatisticasVisible(scrollTop > 2);
  };

  const handlePiawoodScroll = (event) => {
    const scrollTop = event.target.scrollTop;
    if (scrollTop > 5) {
      setIsPiawoodEstatisticasVisible(true);
    } else if (scrollTop === 0) {
      setIsPiawoodEstatisticasVisible(false);
    }
  };

  const scrollToSection = (index) => {
    sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCasaAmarelaStep = (step) => {
    if (step === 0) {
      scrollToSection(currentSectionIndex);
    } else if (step === 1) {
      sectionRefs.current[currentSectionIndex]
        .querySelector(`.${styles.casaAmarelaImg}`)
        .scrollIntoView({ behavior: "smooth" });
    } else if (step === 2) {
      sectionRefs.current[currentSectionIndex]
        .querySelector(`.${styles.casaAmarelaEstatisticas}`)
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  const swipeHandlers = useSwipeable({
    onSwiped: (eventData) => {
      const { dir } = eventData;
      if (currentSectionIndex === 1) {
        if (dir === "Up" && casaAmarelaSwipeStep < 2) {
          setCasaAmarelaSwipeStep(casaAmarelaSwipeStep + 1);
          scrollToCasaAmarelaStep(casaAmarelaSwipeStep + 1);
        } else if (dir === "Down" && casaAmarelaSwipeStep > 0) {
          setCasaAmarelaSwipeStep(casaAmarelaSwipeStep - 1);
          scrollToCasaAmarelaStep(casaAmarelaSwipeStep - 1);
        }
      } else {
        if (
          dir === "Up" &&
          currentSectionIndex < sectionRefs.current.length - 1
        ) {
          setCurrentSectionIndex(currentSectionIndex + 1);
          scrollToSection(currentSectionIndex + 1);
        } else if (dir === "Down" && currentSectionIndex > 0) {
          setCurrentSectionIndex(currentSectionIndex - 1);
          scrollToSection(currentSectionIndex - 1);
        }
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  useEffect(() => {
    const handleTouchStart = (event) => {
      const startY = event.touches[0].clientY;
      setStartY(startY);
    };
    const handleTouchMove = (event) => {
      const endY = event.changedTouches[0].clientY;
      const deltaY = startY - endY;
      const swipeThreshold = 80;
      if (deltaY > swipeThreshold) {
        if (currentSectionIndex < sectionRefs.current.length - 1) {
          setCurrentSectionIndex(currentSectionIndex + 1);
          scrollToSection(currentSectionIndex + 1);
        }
      } else if (deltaY < -swipeThreshold) {
        if (currentSectionIndex > 0) {
          setCurrentSectionIndex(currentSectionIndex - 1);
          scrollToSection(currentSectionIndex - 1);
        }
      }
    };
    const handleTouchEnd = () => {
      setStartY(null);
    };
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSectionIndex]);

  useEffect(() => {
    const yellowFilmeSection = document.querySelector(`.${styles.yellowFilme}`);
    const leftCurtain = document.querySelector(`.${styles.leftCurtain}`);
    const rightCurtain = document.querySelector(`.${styles.rightCurtain}`);
    const content = document.querySelector(`.${styles.curtainContent}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ensure curtains are closed initially
            leftCurtain.style.transform = `translateX(0)`;
            rightCurtain.style.transform = `translateX(0)`;
            content.classList.remove(styles.visible);

            // Start the animation to open the curtains
            setTimeout(() => {
              leftCurtain.style.transform = `translateX(-100%)`;
              rightCurtain.style.transform = `translateX(100%)`;
              content.classList.add(styles.visible);
            }, 100); // Delay to ensure the initial state is applied
          } else {
            leftCurtain.style.transform = `translateX(0)`;
            rightCurtain.style.transform = `translateX(0)`;
            content.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (yellowFilmeSection) {
      observer.observe(yellowFilmeSection);
    }

    const handleTouchStart = (event) => {
      setStartY(event.touches[0].clientY);
    };
    const handleTouchEnd = (event) => {
      const endY = event.changedTouches[0].clientY;
      const deltaY = startY - endY;
      const swipeThreshold = 50;
      if (deltaY > swipeThreshold) {
        if (currentSectionIndex < sectionRefs.current.length - 1) {
          setCurrentSectionIndex(currentSectionIndex + 1);
          scrollToSection(currentSectionIndex + 1);
        }
      } else if (deltaY < -swipeThreshold) {
        if (currentSectionIndex > 0) {
          setCurrentSectionIndex(currentSectionIndex - 1);
          scrollToSection(currentSectionIndex - 1);
        }
      }
    };
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      if (yellowFilmeSection) {
        observer.unobserve(yellowFilmeSection);
      }

      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [startY, currentSectionIndex]);

  return (
    <div
      {...swipeHandlers}
      onWheel={handleScroll}
      className={`${styles.home} container`}
    >
      <Header
        buttonColor="yellow"
        className={styles.header}
        mobileButton="transparent30"
        logo={CasaAmarela}
      />
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        id="imagemHeader"
        className={`${styles.container} ${styles.section}`}
      >
        <img
          src="src/Assets/home_1.png"
          className={styles.desktop}
          alt="Quarto"
        />
        <img
          className={styles.mobile}
          src="src/Assets/home_1_mobile.png"
          alt="Quarto"
        />
      </section>
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className={`${styles.container} ${styles.section} ${styles.casaAmarelaSection}`}
        onScroll={handleCasaAmarelaScroll}
      >
        <div
          className={styles.desktop}
          style={{ height: "50%", width: "100%" }}
        ></div>
        <div
          className={`${styles.desktop} ${styles.casaAmarelaEstatisticas} ${
            isCasaAmarelaEstatisticasVisible ? styles.visible : ""
          }`}
        >
          <img src="src/Assets/destaques_home.png" style={{ height: "50%" }} />
        </div>
        <div
          className={`${styles.casaAmarelaImg} ${styles.desktop} ${
            isCasaAmarelaEstatisticasVisible ? styles.hidden : ""
          }`}
        >
          <div className={styles.casaAmarelaDiv}>
            <ImageGallery
              items={images}
              showThumbnails={false}
              showPlayButton={false}
              showFullscreenButton={false}
              autoPlay={false}
            />
            <Barrinha className={styles.casaAmarelaBarrinha} />
            {/* <Carousel /> */}
          </div>
        </div>
        <div
          className={`${styles.mobile} ${styles.casaAmarelaEstatisticasMobile}`}
        >
          <CasaAmarelaEstatistica />
        </div>
        <div className={`${styles.casaAmarelaImgMobile} ${styles.mobile}`}>
          <ImageGallery
            items={images}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            autoPlay={false}
          />
          <Barrinha className={styles.casaAmarelaBarrinha} />
          {/* <Carousel /> */}
        </div>
        <div className={`${styles.casaAmarelaInfoContainer} ${styles.desktop}`}>
          <div className={styles.casaAmarelaInfo}>
            <Title label="CASA AMARELA" type="yellow" />
            <TextContent
              type="black"
              content="A Casa Amarela é um projeto que conecta turismo, comunidade e sustentabilidade em Barrinha, PI. Nosso objetivo é contribuir para o desenvolvimento da região, promovendo educação, cultura e iniciativas que impulsionem a economia local de forma colaborativa e consciente."
              maxCharacters="maxCharacters30"
            />
          </div>
        </div>
        <div
          className={`${styles.casaAmarelaInfoContainerMobile} ${styles.mobile}`}
        >
          <div className={styles.casaAmarelaInfo}>
            <Title label="CASA AMARELA" type="yellow" />
            <TextContent
              type="black"
              content="A Casa Amarela é um projeto que conecta turismo, comunidade e sustentabilidade em Barrinha, PI. Nosso objetivo é contribuir para o desenvolvimento da região, promovendo educação, cultura e iniciativas que impulsionem a economia local de forma colaborativa e consciente."
              maxCharacters="maxCharacters40"
            />
          </div>
        </div>
      </section>
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        id="hospitality"
        className={`${styles.parallax} ${styles.hospitality} ${styles.section}`}
      >
        <div className={`${styles.hospitalityDiv} ${styles.mobile}`}>
          <div className={`${styles.hospitalityInfo}`}>
            <div className={styles.hospitalityTitle}>
              <Label
                label="Hospitality"
                type="redReverse"
                border="squareRound"
                icon={LogoLabelRed}
              />
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
            <HospitalityRoom />
          </div>
        </div>
        <div className={`${styles.hospitalityInfo} ${styles.desktop}`}>
          <div className={styles.hospitalityTitle}>
            <Label
              label="Hospitality"
              type="redReverse"
              border="squareRound"
              icon={LogoLabelRed}
            />
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
        <div className={styles.desktop}>
          <HospitalityRoom />
        </div>
      </section>
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        id="houses"
        className={`${styles.parallax} ${styles.houses} ${styles.section}`}
      >
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
            onMouseEnter={() => handleMouseEnter("Casa Rio")}
            onClick={() => openModalWithVideo("rsJefiaWU9U")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className={styles.casaCaju}>
          <SpeechBalloon
            label="Casa Caju"
            state={hovered === "Casa Caju" ? "selected" : "unselected"}
            onClick={() => openModalWithVideo("kCstTSYhfkI")}
            onMouseEnter={() => handleMouseEnter("Casa Caju")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className={styles.casaSal}>
          <SpeechBalloon
            label="Casa Sal"
            state={hovered === "Casa Sal" ? "selected" : "unselected"}
            onClick={() => openModalWithVideo("ivmkDTmAPeA")}
            onMouseEnter={() => handleMouseEnter("Casa Sal")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className={styles.casaCamua}>
          <SpeechBalloon
            label="Casa Camuá"
            state={hovered === "Casa Camuá" ? "selected" : "unselected"}
            onClick={() => openModalWithVideo("Vt1YT_ahGTY")}
            onMouseEnter={() => handleMouseEnter("Casa Camuá")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className={styles.casaBaete}>
          <SpeechBalloon
            label="Casa Baeté"
            state={hovered === "Casa Baeté" ? "selected" : "unselected"}
            onClick={() => openModalWithVideo("4oRnVKAd8RU")}
            onMouseEnter={() => handleMouseEnter("Casa Baeté")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className={styles.casaDecker}>
          <SpeechBalloon
            label="Casa Decker"
            state={hovered === "Casa Decker" ? "selected" : "unselected"}
            onMouseEnter={() => handleMouseEnter("Casa Decker")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className={styles.casaDharma}>
          <SpeechBalloon
            label="Casa Dharma"
            state={hovered === "Casa Dharma" ? "selected" : "unselected"}
            onMouseEnter={() => handleMouseEnter("Casa Dharma")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className={styles.casaBruxa}>
          <SpeechBalloon
            label="Casa da Bruxa"
            state={hovered === "Casa da Bruxa" ? "selected" : "unselected"}
            onMouseEnter={() => handleMouseEnter("Casa da Bruxa")}
            onMouseLeave={handleMouseLeave}
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
      </section>

      <section
        ref={(el) => (sectionRefs.current[4] = el)}
        className={`${styles.section} ${styles.piawoodSection}`}
        onScroll={handlePiawoodScroll}
      >
        <div
          className={styles.desktop}
          style={{ height: "100%", width: "50%" }}
        ></div>
        <div
          className={`${styles.desktop} ${styles.piaWoodEstatisticas} ${
            isPiawoodEstatisticasVisible ? styles.visible : ""
          }`}
        >
          <img
            src="src/Assets/piawood_estatistica.png"
            alt="Estatísticas Piawood"
          />
        </div>
        <div className={`${styles.mobile} ${styles.piawoodDiv}`}>
          <div
            className={`${styles.piawoodImg} ${
              isPiawoodEstatisticasVisible ? styles.hidden : ""
            }`}
          >
            <PalmTrees />
          </div>

          <div className={styles.piawoodInfoContainer}>
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
          </div>
        </div>
        <div
          className={`${styles.piawoodImg} ${styles.desktop} ${
            isPiawoodEstatisticasVisible ? styles.hidden : ""
          }`}
        >
          <PalmTrees />
        </div>

        <div className={`${styles.desktop} ${styles.piawoodInfoContainer}`}>
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
        </div>
      </section>
      <section
        ref={(el) => (sectionRefs.current[5] = el)}
        className={`${styles.section} ${styles.eventsSection}`}
      >
        <div
          id="eventsSpace"
          className={`${styles.parallax} ${styles.eventsSpace}`}
        >
          <div className={`${styles.mobile} ${styles.piaWoodEstatisticas} `}>
            <img
              src="src/Assets/piawood_estatistica.png"
              alt="Estatísticas Piawood"
            />
          </div>
        </div>
        <div id="events" className={`${styles.parallax} ${styles.events}`}>
          <Title label="Live and" type="green" />
          <Title label="experience" type="green" />
          <div>
            <Button label="Ver eventos" type="green" />
          </div>
          <div className={styles.eventsImg}>
            <EventsImg />
          </div>
          <div className={styles.eventsImgMobile}>
            <img src="src/Assets/events_img_mobile.png" alt="Eventos" />
          </div>
        </div>
      </section>
      <section
        ref={(el) => (sectionRefs.current[6] = el)}
        id="yellowFilme"
        className={`${styles.parallax} ${styles.yellowFilme} ${styles.section}`}
      >
        <div className={styles.curtainContainer}>
          <div className={`${styles.curtain} ${styles.leftCurtain}`}></div>
          <div className={`${styles.curtain} ${styles.rightCurtain}`}></div>
          <div className={styles.curtainContent}>
            <div className={styles.yellowFilmeImg}>
              <LogoSea />
            </div>
            <div className={styles.hospitalityInfo}>
              <div className={styles.hospitalityTitle}>
                <Label
                  label="Yellow Film"
                  type="orange"
                  icon={LogoLabelOrange}
                  border="squareRound"
                />
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
      </section>
      <section
        ref={(el) => (sectionRefs.current[7] = el)}
        id="videoBanner"
        className={`${styles.parallax} ${styles.videoBanner} ${styles.section}`}
      >
        <iframe
          width="100%"
          height="2000"
          src="https://www.youtube.com/embed/Hjq-ZzT1tjw?si=7ACuc3MS861aW3Uc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </section>
      <Footer labelColor="yellowWhite" />
    </div>
  );
};

export default Home2;
