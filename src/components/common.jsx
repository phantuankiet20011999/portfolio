import { fadeInDown } from 'react-animations'
import styled, { keyframes } from 'styled-components'

const fadeInDownAnimation = keyframes`${fadeInDown}`

const Info = ({ contents, ...props }) => {
    return (
        <div {...props}>
            <span style={{ fontWeight: 'bold' }}>Software used</span>
            <ul style={{ listStyle: 'none', opacity: 0.5, padding: 0 }}>
                {contents.map((content, index) => <li key={index}>{content}</li>)}
            </ul>
        </div>
    )
}

export const SoftwareInfo = styled(Info)`
    animation:${fadeInDownAnimation} ${props => props.duration}s;
`

export const Title = ({ text, size, ...props }) => {
    const { style, ...restProps } = props
    return (
        <div
            style={{
                fontSize: size === 'lg' ? 60 : 40,
                padding: 0,
                margin: 0,
                fontWeight: 'bold',
                ...style
            }}
            {...restProps}
        >
            {text}
        </div>
    )
}