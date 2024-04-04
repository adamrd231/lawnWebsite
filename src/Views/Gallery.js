import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div`

`;

function Gallery() {

  const item = {
    services: [
      {
        name: "Lawn Services",
        items: [
          "Lawn Mowing",
          "Aeration",
          "Weed wacking"
        ]
      },
      {
        name: "Garden Services",
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
      {/* Map through item object to display name of services and then the items in the object as a list below the name */}
      { item && item.services.map((service) => (
          <div>
            <h2>{service.name}</h2>
            <ul>
              {service.items && service.items.map((item) => (
                  <li>{item}</li>
                )
              )}
            </ul>
          </div>
        )
      )}
    </Container>
  )
}

export default Gallery;
