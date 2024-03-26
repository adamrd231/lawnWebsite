import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div`

`;

function Gallery() {

  const Services = [
      "Lawn Mowing",
      "Aeration",
      "Weed wacking"
  ]
  const [items, setItems] = useState();

  return (
    <Container>
      
      { Services && Services.map((service) => (
        <p>{service}</p>
      ))}
      
    </Container>
  )
}

export default Gallery;
