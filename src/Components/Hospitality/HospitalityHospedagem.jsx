import React from "react";
import styles from "./Hospitality.module.css";
import Header from "../Utils/Header";
import Lupa from "../../Assets/magnifying_glass_white.svg?react";
import ArrowLeft from "../../Assets/arrow_left_paginacao.svg?react";
import ArrowRight from "../../Assets/arrow_right_paginacao.svg?react";
import TextContent from "../Utils/TextContent";
import Label from "../Utils/Label";
import Footer from "../Utils/Footer";
import Button from "../Utils/Button";
import Select from "../Utils/Select";
import LogoRed from "../../Assets/logo_label_red.svg?react";
import LogoRedAccent from "../../Assets/logo_label_red_accent.svg?react";
import LocationPin from "../../Assets/location_pin.svg?react";
import Eye from "../../Assets/icon_eye.svg?react";
import Moon from "../../Assets/icon_moon.svg?react";
import Star from "../../Assets/icon_star_yellow.svg?react";
import People from "../../Assets/icon_people.svg?react";
import DoubleBed from "../../Assets/icon_double_bed.svg?react";
import Bed from "../../Assets/icon_bed.svg?react";
import Fridge from "../../Assets/icon_fridge.svg?react";
import Pool from "../../Assets/icon_pool.svg?react";
import Wifi from "../../Assets/icon_wifi.svg?react";
import SnowFlake from "../../Assets/icon_snowflake.svg?react";
import Balcony from "../../Assets/icon_balcony.svg?react";
import MagnifyingGlass from "../../Assets/magnifying_glass_white.svg?react";
import PlusCircle from "../../Assets/plus_circle_gray.svg?react";
import casasData from "../../Data/casas.json";
import { NavLink } from "react-router-dom";
import Title from "../Utils/Title";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const HospitalityHospedagem = () => {
  const [showLocation, setLocation] = React.useState("true");
  const casas = casasData.map((casa) => {
    const images = casa.imagens.map((img) => ({
      original: img,
      thumbnail: img,
    }));

    return (
      <div className={styles.containerCasas} key={casa.nome}>
        <div className={styles.desktop}>
          <Title label={casa.nome} type="red" />
        </div>

        <div className={styles.casas}>
          <div className={styles.mapa}>
            <ImageGallery
              items={images}
              showThumbnails={false}
              showPlayButton={false}
              showFullscreenButton={false}
              autoPlay={false}
            />
          </div>

          <div className={`${styles.galeria} ${styles.desktop}`}>
            <iframe
              width="100%"
              height="100%"
              src={`${
                casa.video
              }?autoplay=1&controls=0&fs=0&loop=0&color=white&playlist=${
                casa.video.split("embed/")[1]
              }`}
              title="YouTube video player"
            ></iframe>
          </div>
          <div className={styles.comodidades}>
            <div className={styles.stars}>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className={styles.detalhes}>
              <div className={styles.detalheItem}>
                <Title
                  label="COMODIDADES"
                  type="black"
                  size="small"
                  align="left"
                />
                {casa.comodidades.map((c) => {
                  return (
                    <TextContent
                      key={c}
                      type="medium"
                      color="blackBlack"
                      content={c}
                    ></TextContent>
                  );
                })}
              </div>
            </div>
            <div className={styles.detalheItem}>
              <Title label="descrição" type="black" size="small" align="left" />
              <TextContent
                maxCharacters="maxCharacters60"
                type="medium"
                color="blackBlack"
                content={casa.descricao}
              />
            </div>
          </div>

          <div className={styles.localizacaoInformacoes}>
            {casa.localizacaoLink && casa.localizacaoLink !== "" && (
              <>
                <div className={styles.menuCard}>
                  <span>Localização</span>
                </div>

                <div className={styles.localizacao}>
                  <div>
                    <Label
                      label="Barrinha"
                      size="small"
                      square="squareRound"
                      icon={LocationPin}
                      type="redReverse"
                    />
                  </div>
                  <div className={styles.mapa}>
                    <a href={casa.localizacaoLink.toString()}>
                      <img src={casa.localizacaoImagem.toString()} alt="Mapa" />
                    </a>
                  </div>
                </div>
              </>
            )}

            <a href="http://Wa.me/5586999866447">
              <Button label="Fale Conosco" type="red" />
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Header
        buttonColor="redWhite"
        className={styles.header}
        mobileButton="transparent30Red"
        logo={LogoRed}
      ></Header>
      <div className={styles.container}>
        <img
          className={styles.desktop}
          src="src/Assets/hospitality_banner.png"
          alt="Hospitality Banner"
        />
        <img
          className={styles.mobile}
          src="src/Assets/hospitality_banner_mobile.png"
          alt="Hospitality Banner"
        />
      </div>
      <div className={styles.menuHospitality}>
        <div>Hospedagens</div>
        <div className={styles.unselected}>
          <NavLink to="/Hospitality">Passeios</NavLink>
        </div>
      </div>

      {casas}
      <Footer backgroundColor="redAccent" labelColor="redWhite" />
    </div>
  );
};

export default HospitalityHospedagem;
