import logoIMG from '../assets/Logo.svg'

import { Container, Content } from './HeaderStyles'

export function Header(){
    return(
        <Container>
            <Content>
            <img src={logoIMG} alt='Logo wallet'/>
            <button type='button'>Nova transação</button>
            </Content>
        </Container>
    )
}