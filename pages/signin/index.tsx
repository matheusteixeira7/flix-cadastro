import { useSession, signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IconContext } from 'react-icons'
import { BsGoogle, BsTwitter, BsFacebook } from 'react-icons/bs'

import FlixLogo from '../../public/flix-logo.svg'
import { Button } from '../../src/presentation/components/button'
import { SeparatorHorizontal } from '../../src/presentation/components/separator-horizontal'
import {
    Container,
    Header,
    Title,
    Main,
    SignInCard,
    Fields,
    InputLabel,
    Input,
    Options,
    RememberMe,
    RememberMeCheckBox,
    Checked,
    RememberMeLabel,
    ForgotPassword,
    OAuth,
    OAuthHeader,
    OAuthIcons,
    OAuthIcon,
    OAuthLabel,
} from '../../src/presentation/pages/signin/styles'

const SignIn = () => {
    const { data: session } = useSession()
    const [rememberMe, setRememberMe] = useState(false)
    const router = useRouter()

    const handleRememberMe = () => {
        setRememberMe(!rememberMe)
    }

    if (session) {
        return setTimeout(() => {
            router.push('/restrict-area')
        }, 5000)
    }

    if (!session) {
        return (
            <Container>
                <Header>
                    <Image
                        src={FlixLogo}
                        alt="Flix Logo"
                        height={100}
                        width={100}
                    />
                    <Title>Faça seu login na plataforma</Title>
                </Header>

                <Main>
                    <SignInCard>
                        <Fields>
                            <InputLabel>E-mail</InputLabel>
                            <Input />
                            <InputLabel>Senha</InputLabel>
                            <Input />
                        </Fields>

                        <Options>
                            <RememberMe onClick={() => handleRememberMe()}>
                                <RememberMeCheckBox isActive={rememberMe}>
                                    <Checked isActive={rememberMe} />
                                </RememberMeCheckBox>
                                <RememberMeLabel>Lembrar-me</RememberMeLabel>
                            </RememberMe>
                            <Link href={'/'}>
                                <ForgotPassword>
                                    Esqueceu sua senha?
                                </ForgotPassword>
                            </Link>
                        </Options>

                        <Button title="Entrar" />

                        <OAuth>
                            <OAuthHeader>
                                <SeparatorHorizontal />
                                <OAuthLabel>Ou faça login com</OAuthLabel>
                                <SeparatorHorizontal />
                            </OAuthHeader>

                            <OAuthIcons>
                                <IconContext.Provider value={{ color: 'gray' }}>
                                    <OAuthIcon
                                        onClick={() =>
                                            signIn('google', {
                                                callbackUrl:
                                                    'http://localhost:3000/restrict-area',
                                            })
                                        }
                                    >
                                        <BsGoogle />
                                    </OAuthIcon>

                                    <OAuthIcon>
                                        <BsTwitter />
                                    </OAuthIcon>

                                    <OAuthIcon
                                        onClick={() =>
                                            signIn('facebook', {
                                                callbackUrl:
                                                    'http://localhost:3000/restrict-area',
                                            })
                                        }
                                    >
                                        <BsFacebook />
                                    </OAuthIcon>
                                </IconContext.Provider>
                            </OAuthIcons>
                        </OAuth>
                    </SignInCard>
                </Main>
            </Container>
        )
    }
}

export default SignIn
