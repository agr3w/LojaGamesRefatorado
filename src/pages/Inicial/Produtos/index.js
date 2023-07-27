import React from "react";
import "./produtos.css";
import { Link } from "react-router-dom";

const productOptions = [
  {
    title: "Games",
    image: "imgs/imagens-display-1.jpg",
    link: "/categoria",
  },
  {
    title: "Colecionáveis",
    image: "imgs/imagens-display-2.jpg",
    link: "/categoria/colecionaveis",
  },
  {
    title: "Gift Cards",
    image: "imgs/imagens-display-3.jpg",
    link: "/categoria/GiftCards",
  },
];

const ProductOption = ({ title, image, link }) => {
  return (
    <div className="product-option">
      <Link to={link}>
        <img src={image} alt={title} />
      </Link>
      <h3>{title}</h3>
    </div>
  );
};

const Products = () => {
  return (
    <div className="products">
      <h2>Nossos Produtos</h2>
      <p>Uma seleção de jogos incrível</p>
      <div className="product-options">
        {productOptions.map((option, index) => (
          <ProductOption
            key={index}
            title={option.title}
            image={option.image}
            link={option.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
