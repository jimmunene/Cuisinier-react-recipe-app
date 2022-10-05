import { FaCheese, FaGlobeAfrica } from "react-icons/fa";
import { GiFastNoodles,GiChipsBag } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaCheese />
        <h4>Favorite</h4>
      </SLink>
      <SLink to={"/cuisine/African"}>
        <FaGlobeAfrica />
        <h4>African</h4>
      </SLink>
      <SLink to={"/cuisine/Indian"}>
        <GiFastNoodles />
        <h4>Indian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <GiChipsBag />
        <h4>American</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  gap: 3rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: linear-gradient(35deg, #494949, #313131);
  text-decoration: none;
  width: 6rem;
  height: 6rem;
  margin-right: 2rem;
  cursor: pointer;
  transform: scale(0.8);
  color: white;
  h4 {
    font-size: 0.8rem;
  }
  svg {
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

export default Category;
