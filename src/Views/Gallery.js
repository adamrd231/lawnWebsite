import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div`

`;

function Gallery() {

  const item = {
    services: [
      {
        name: "Services",
        items: [
          "Lawn Mowing",
          "Aeration",
          "Weed wacking"
        ]
      },
      {
        name: "Services",
        items: [
          "Lawn Mowing",
          "Aeration",
          "Weed wacking"
        ]
      }
      
    ]
  }
  const [items, setItems] = useState();

  return (
    <Container>
      { item && item.services.map((service) => (
        <p>{service.name}</p>
      { service.items && service.items.map((item) => (
          <p>{ item }</p>
      ))}

      ))}
      
    </Container>
  )
}

export default Gallery;
