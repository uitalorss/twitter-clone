import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  border-left: 1px solid ${props => props.theme.colors.secondary};
  border-right: 1px solid ${props => props.theme.colors.secondary}; 
`

export const Header = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`

export const Description = styled.div`
  .cover{
    width: 100%
  }
  .about{
    margin-top: -5rem;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: .75rem;
    img{
      width: 139px;
      border-radius: 100px;
      border: 5px solid #000000;
    }
  }

  .tag{
    color: ${props => props.theme.colors.textOption}
  }

  .descAbout{
    color: ${props => props.theme.colors.text}
  }

  .information{
    display: flex;
    gap: 0 .5rem;
    color: ${props => props.theme.colors.text}
  }

  .follow{
    display: flex;
    gap: 0 .5rem;
    color: ${props => props.theme.colors.text}
  }
`