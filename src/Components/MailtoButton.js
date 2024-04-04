import Button from "./Buttons"
import styled from "@emotion/styled";

const Link = styled.a`
  display: flex;
  text-decoration: none;
  color: white;
`;

function MailtoButton() {
  return (
    <Link href="mailto:adam@rdconcepts.design">
      <Button type="submit">Let's Mow!</Button>
    </Link>
  )
}

export default MailtoButton;