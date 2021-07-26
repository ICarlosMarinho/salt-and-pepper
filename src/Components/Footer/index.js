import githubIcon from "../../assets/github-icon.png";
import twitterIcon from "../../assets/twitter-icon.png";
import { FooterContainer, Icon, StyledAnchor } from "./style";

export default function Footer() {
  return (
    <FooterContainer>
      <span>Carlos Marinho</span>
      <StyledAnchor
        href="https://github.com/ICarlosMarinho"
        target="_blank"
        rel="noreferrer"
      >
        <Icon
          src={githubIcon}
          alt="Ir para o perfil de Carlos Marinho no Github"
        />
      </StyledAnchor>
      <StyledAnchor
        href="https://twitter.com/CarlosMarinh0o"
        target="_blank"
        rel="noreferrer"
      >
        <Icon
          src={twitterIcon}
          alt="Ir para o perfil de Carlos Marinho no Twitter"
        />
      </StyledAnchor>
    </FooterContainer>
  );
}
