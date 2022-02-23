import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    padding: 8px 16px;

    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.text_sm};

    cursor: pointer;
    transition: all 0.2s ease;

    &:active {
        background-color: ${({ theme }) => lighten(0.2, theme.colors.primary)};
    }
`
