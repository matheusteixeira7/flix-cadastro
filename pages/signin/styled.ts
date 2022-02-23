import styled from 'styled-components'

interface IRememberMeWrapper {
  isActive: boolean
}

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100vh;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  margin-bottom: 45px;
  font-size: ${({ theme }) => theme.fontSize.text_3xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.fontColor.title};
`

export const Main = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;

  width: 400px;
  padding: 35px;
  border-radius: 5px;

  filter: drop-shadow(1px 1px 3px rgb(209, 213, 219));
`

export const SignInCard = styled.div`
  width: 100%;
`

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.text_sm};
  color: ${({ theme }) => theme.fontColor.title};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: ${({ theme }) => `2px solid ${theme.colors.gray_300}`};
  border-radius: 5px;
  outline-color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const RememberMe = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

export const Checked = styled.div<IRememberMeWrapper>`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : 'transparent'};
  border-radius: 0.25rem;
  width: 0.5rem;
  height: 0.5rem;
`

export const RememberMeCheckBox = styled.div<IRememberMeWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ theme, isActive }) =>
    isActive
      ? `1px solid ${theme.colors.primary}`
      : `1px solid ${theme.colors.gray_400}`};
  border-radius: 0.5rem;
  width: 1rem;
  height: 1rem;
  transition: all 0.1s ease;

  margin-right: 0.5rem;
`

export const RememberMeLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.text_sm};
  color: ${({ theme }) => theme.fontColor.title};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`

export const ForgotPassword = styled.a`
  font-size: ${({ theme }) => theme.fontSize.text_sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const OAuth = styled.div`
  margin-top: 1.5rem;
`

export const OAuthHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`

export const OAuthLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.text_sm};
  color: ${({ theme }) => theme.fontColor.title};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  width: 100%;
  white-space: nowrap;

  margin: 0 1rem;
`

export const OAuthIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-content: center;
  align-items: center;
`

export const OAuthIcon = styled.div`
  padding: 0.5rem 2rem;
  border: ${({ theme }) => `1px solid ${theme.colors.gray_300}`};
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border: ${({ theme }) => `1px solid ${theme.colors.gray_400}`};
  }
`
