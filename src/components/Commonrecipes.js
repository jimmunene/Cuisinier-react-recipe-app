import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Common() {
  const [Common, setCommon] = useState([]);

  useEffect(() => {
    getCommon();
  }, []);

  const getCommon = async () => {
    const check = localStorage.getItem("Common");

    if (check) {
      setCommon(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=a3ac1e8ef86f4be0936b35a5a8e38717&number=14`
      );
      const data = await api.json();
      localStorage.setItem("Common", JSON.stringify(data.recipes));
      setCommon(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Common Recipes</h3>
        <Splide
          options={{
            perPage: 6,
            arrows: true,
            pagination: true,
            drag: "free",
            gap: "2rem",
          }}
        >
          {Common.map((rec) => {
            return (
              <SplideSlide key={rec.id}>
                <Card>
                  <Link to={`/recipe/${rec.id}`}>
                    <p>{rec.title}</p>
                    <img src={rec.image} alt={rec.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  max-height: 30rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 0;
    bottom: 0%;
    transform: translateX(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 0.8rem;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Common;
