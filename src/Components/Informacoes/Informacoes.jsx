import React from "react";
import styles from "./Informacoes.module.css";
import Header from "../Utils/Header";
import Divider from "../Utils/Divider";
import LogoBrown from "../../Assets/logo_label_menu.svg?react";
import LogoRed from "../../Assets/logo_label_red_sm.svg?react";
import LogoBlue from "../../Assets/logo_label_green.svg?react";
import LogoLabelOrange from "../../Assets/logo_label_orange.svg?react";
import ExplamationPoint from "../../Assets/exclamation_point_round.svg?react";
import Lupa from "../../Assets/magnifying_glass.svg?react";
import TextContent from "../Utils/TextContent";
import Title from "../Utils/Title";
import Label from "../Utils/Label";
import Footer from "../Utils/Footer";
import Button from "../Utils/Button";
import Input from "../Utils/Input";
import CasaAmarela from "../../Assets/logo_casa_amarela.svg?react";

const Informacoes = () => {
  return (
    <div className={`container ${styles.container}`}>
      <Header
        buttonColor="yellow"
        className={styles.header}
        background="backgroundWhite"
        mobileButton="transparent10"
        logo={CasaAmarela}
      ></Header>
      <Divider className={styles.mobile} />
      <div className={styles.informacoes}>
        <div className={styles.header}>
          <Title label="Informações" type="yellow" />
          <div className={styles.separator}></div>
          <div className={styles.duvidas}>
            <div>
              <Label
                label="Hospitality"
                type="redReverse"
                border="squareRound"
                icon={LogoRed}
              />
            </div>
            <div className={styles.tituloIcon}>
              <ExplamationPoint />
              Calendário das Atividades
            </div>
            <ol className={styles.duvidasList}>
              <li>
                Janeiro (Lua Cheia/Lua Nova): Passeios recomendados via Piawood
                com foco em experiências naturais, mas não recomendamos esportes
                de vento (época de pouco vento)
              </li>
              <li>
                Fevereiro a maio: Fechado (período de chuvas) ; com
                possibilidade de reservas futuras
              </li>
              <li>
                Junho (Lua Cheia/Lua Nova): Melhor período para passeios,
                especialmente pelos Lençóis Piauienses, mas ainda é uma época de
                pouco vento, não recomendado para esportes de vento
              </li>
              <li>
                Julho (Lua Cheia/Lua Nova): Melhor período para passeios,
                especialmente pelos Lençóis Piauienses, mas ainda é uma época de
                pouco vento, não recomendado para esportes de vento
              </li>
              <li>
                Agosto (Lua Cheia/Lua Nova): Passeios liberados, com boas
                condições. Vento se intensifica: bom período para esportes de
                vento
              </li>
              <li>
                Setembro, outubro e novembro (Lua Cheia/Lua Nova): Passeios
                recomendados, com boas condições. Ventos fortes, ideais para
                esportes como Kitesurf e Windsurf
              </li>
              <li>Dezembro</li>
            </ol>
            <div className={styles.tituloIcon}>
              <ExplamationPoint />
              Eventos Especiais
            </div>
            <ol className={styles.duvidasList}>
              <li>
                Festival Lua Cheia Piawood (outubro): 1 semana de festival com
                atividades de música, comida local, passeios em Barrinha,
                Cajueiro e Delta
              </li>
              <li>
                Réveillon Amigos (dezembro): Celebração de fimde ano, focada em
                uma experiência mais íntima e exclusiva
              </li>
            </ol>
            <div className={styles.tituloIcon}>
              Horários de check-in e check-out?
            </div>

            <ol className={styles.duvidasList}>
              <li>Check-in às 15h</li>
              <li>Check-out às 11h</li>
            </ol>
            <div className={styles.tituloIcon}>
              Horários de check-in e check-out?
            </div>
            <div>Geralmente 50% do valor total* </div>
            <div className={styles.textoObs}>
              *Variam de acordo com a casa, mas geralmente há uma multa que
              varia de 30% a 100% do valor da locação e serviços de acordo com o
              data da solicitação, período desejado, etc.
            </div>
            <div className={styles.tituloIcon}>
              Existem restrições ou regras específicas para os hóspedes?
            </div>
            <div>
              Variam de acordo com a casa. Podemos citar algumas comuns a todas
              as casas, limitação de números de hóspedes em contrato, tanto para
              passar o dia na casa, quanto para o pernoite; festas não são
              permitidas sem aviso prévio( festas e convidados serão muito bem
              vindos desde que combinado previamente.; limitação de barulho a
              depender do horário por estarmos em um vilarejo.
            </div>
            <div className={styles.tituloIcon}>
              Opções de Pacotes
              <span className={styles.textoObs}>
                *Entrar em contato para consultar disponibilidade e valores
              </span>
            </div>
            <div className={styles.duvidasList}>
              Simples
              <div className={styles.textoObs}>
                Casa + Comida + RH (disponível em qualquer data)
              </div>
            </div>
            <div className={styles.duvidasList}>
              Médio
              <div className={styles.textoObs}>
                Casa + Comida + RH + Passeios próximos
              </div>
            </div>
            <div className={styles.duvidasList}>
              Premium
              <div className={styles.textoObs}>
                Casa + Comida + RH + Passeios Delta e Próximos
              </div>
            </div>
            <div className={styles.duvidasList}>
              Para disponibilidade e valores favor entrar em contato via
              whatsapp
            </div>
            <div className={styles.separator}></div>
          </div>
        </div>
      </div>
      <div className={styles.informacoesImg}>
        <img
          className={styles.desktop}
          src="src/Assets/informacoes_footer.png"
          alt="Lago"
        />
        <img
          className={styles.mobile}
          src="src/Assets/informacoes_footer_mobile.png"
          alt="Lago"
        />
      </div>
      <Footer labelColor="yellowWhite" />
    </div>
  );
};

export default Informacoes;
