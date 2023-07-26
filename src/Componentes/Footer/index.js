import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <ul className={styles.footerLinks}>
          {/* <footerLinks> */}
          <li>
            <Link to={"/categoria/Nintendo/GameBoy"}>Jogos GameBoy</Link>
          </li>
          <li>
            <Link to={"/categoria/Nintendo/SNES"}>Jogos NES</Link>
          </li>
          <li>
            <Link to={"/categoria/Nintendo/Nintendo-3DS-2DS"}>
              Jogos 3DS & 2DS
            </Link>
          </li>
          <li>
            <Link to={"/categoria/Nintendo/Nintendo-64"}>
              Jogos Nintendo 64
            </Link>
          </li>
          <li>
            <Link to={"/categoria/Nintendo/Nintendo-DS"}>Jogos DS</Link>
          </li>
          <li>
            <Link to={"/categoria/Nintendo/Nintendo-Wii"}>Jogos WII</Link>
          </li>
          <li>
            <Link to={"/categoria/Nintendo/Nintendo-Wii-U"}>Jogos WII-U</Link>
          </li>
          <li>
            <Link to={"/categoria/Nintendo/GameCube"}>Jogos GameCube</Link>
          </li>
          <li>
            <Link to={"/categoria/Nintendo/Nintendo-Switch"}>
              Jogos Nintendo Switch
            </Link>
          </li>
        </ul>
        <div className={styles.storeAddress}>
          <p>Endereço da Loja: Rua Exemplo, 123 - Cidade - Estado</p>
        </div>
      </div>
      <div className={styles.footerLeft}>
        <ul className={styles.footerLinks}>
          {/* <footerLinks> */}
          <li>
            <Link to={"/categoria/Playstation/PlayStation-1"}>Jogos PS1</Link>
          </li>
          <li>
            <Link to={"/categoria/Playstation/PlayStation-2"}>Jogos PS2</Link>
          </li>
          <li>
            <Link to={"/categoria/Playstation/PlayStation-3"}>Jogos PS3</Link>
          </li>
          <li>
            <Link to={"/categoria/Playstation/PlayStation-4"}>Jogos PS4</Link>
          </li>
          <li>
            <Link to={"/categoria/Playstation/PlayStation-5"}>Jogos PS5</Link>
          </li>
          <li>
            <Link to={"/categoria/Playstation/PlayStation-Portable"}>
              Jogos PSP
            </Link>
          </li>
          <li>
            <Link to={"/categoria/Playstation/PlayStation-Vita"}>
              Jogos PSVita
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerLeft}>
        <ul className={styles.footerLinks}>
          {/* <footerLinks> */}
          <li>
            <Link to={"/categoria/Xbox/Xbox-Clasic"}>Jogos Xbox Clasic</Link>
          </li>
          <li>
            <Link to={"/categoria/Xbox/Xbox-360"}>Jogos Xbox 360</Link>
          </li>
          <li>
            <Link to={"/categoria/Xbox/Xbox-One"}>Jogos Xbox One</Link>
          </li>
          <li>
            <Link to={"/categoria/Xbox/Xbox-Series-X-&-S"}>
              Jogos Xbox Series
            </Link>
          </li>
        </ul>
      </div>

      <hr className={styles.divider} />
      <div className={styles.footerRight}>
        <div className={styles.socialMedia}>
          <Link to="https://www.instagram.com/weslley_kampa/" className={styles.socialIcon}>
            <FaFacebook />
          </Link>
          <Link to="https://www.instagram.com/weslley_kampa/" className={styles.socialIcon}>
            <FaTwitter />
          </Link>
          <Link to="https://www.instagram.com/weslley_kampa/" className={styles.socialIcon}>
            <FaInstagram />
          </Link>
          <Link to="https://www.instagram.com/weslley_kampa/" className={styles.socialIcon}>
            <FaYoutube />
          </Link>
        </div>
        <div className={styles.trustSeals}>
          <img src="/imgs/selo2.png" alt="Selo de confiança 2" />
          <img src="/imgs/selo3.png" alt="Selo de confiança 3" />
        </div>
        <p className={styles.rights}>Todos os direitos reservados © 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
