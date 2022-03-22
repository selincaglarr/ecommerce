import styled from "styled-components";

import Announcementt from "react-announcement";

const Container = styled.div`
  height: 30px;
  background-color: #C8B3C2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  fontsize: 12;
`;

const Announcement = () => {
  return (
    <Container>
      <Announcementt
        title="Here is your clothes"
        subtitle="Dont forget to check your cart"
        link="https://github.com/kristofferandreasen/react-announcement"
        imageSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgaWla3gR9dNK9G0cZkeUXnq9-anlfmn93Qw&usqp=CAU"
      />
      Super Deal Free Shipping on Orders Over $50
    </Container>
  );
};

export default Announcement;
