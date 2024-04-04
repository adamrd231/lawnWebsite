import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 3rem;
`;

const UL = styled.ul`
  decoration: none;
  padding: 0;
`;

const LI = styled.li`
  list-style-type: none;
  font-size: 1.2rem;

`;
const ServiceTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
  text-align: center;
  background: white;
  // create drop shadow for white background
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 3rem;

`;

const ServiceImage = styled.img`
  width: 100px;
  height: 100px;
`;

function Gallery() {

  const item = {
    services: [
      {
        name: "Lawn",
        image: "mower.jpeg",
        items: [
          "Lawn Mowing",
          "Aeration",
          "Weed wacking"
        ]
      },
      {
        name: "Garden",
        image: "garden.jpeg",
        items: [
          "Small stump removal",
          "Flower bed maintenance / Installation", 
          "Mulching",
        ]
      },
      {
        name: "Cleanup",
        image: "leaf.jpeg",
        items: [
          "Complete yard rescue",
          "Driveway and sidewalk edging", 
          "Leaf removal / blowing",
        ]
      }
      
    ]
  }

  return (
    <Container>
      {/* Map through item object to display name of services and then the items in the object as a list below the name */}
      { item && item.services.map((service) => (
          <ServiceContainer>
            <ServiceImage src={service.image} alt={service.name} />
            <ServiceTitle>{service.name}</ServiceTitle>
           
            <UL>
              {service.items && service.items.map((item) => (
                  <LI>{item}</LI>
                )
              )}
            </UL>
          </ServiceContainer>
        )
      )}
    </Container>
  )
}

export default Gallery;
