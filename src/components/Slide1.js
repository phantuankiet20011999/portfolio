import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeInDown, slideInLeft } from 'react-animations'
import { SoftwareInfo, Title } from './common'

import gif1 from '../assets/slide1/5.gif'
import gif2 from '../assets/slide1/7.gif'
import gif3 from '../assets/slide1/10.gif'

const slideInAnimation = keyframes`${slideInLeft}`
const fadeInDowmAnimation = keyframes`${fadeInDown}`

const SlideAnimationContainer = styled.div`
    animation: 1s ${slideInAnimation};
    display: flex;
`

const FadeInDownTitle = styled.div`
    animation: 8s ${fadeInDowmAnimation};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const Image = ({ src, ...props }) => {
    const { style, ...restProps } = props
    return (
        <img
            src={src}
            style={{
                width: 336,
                height: 250,
                ...style
            }}
            {...restProps}
        />
    )
}

const FadeInImage = styled(Image)`
    animation: ${props => props.duration}s ${slideInAnimation};
`

const CONTENTS = [
    '+ illutration by Adobe Illustrator',
    '+ motion by Adobe After Effects'
];

export const Slide1 = () => {
    React.useEffect(() => {

    }, []);

    return (
        <div style={{
            display: 'flex',
            height: '100vh',
            boxSizing: 'border-box',
            paddingTop: 144,
            paddingBottom: 124
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <SlideAnimationContainer>
                    <div style={{ width: 20, height: '100%', backgroundColor: 'black' }} />
                    <FadeInImage duration={1} src={gif1} style={{ marginLeft: 32 }} />
                    <div style={{ width: 2, backgroundColor: 'black', height: '100%', margin: '0 8px' }} />
                    <FadeInImage duration={2.5} src={gif2} />
                    <div style={{ width: 2, backgroundColor: 'black', height: '100%', margin: '0 8px' }} />
                    <FadeInImage duration={3.5} src={gif3} />
                    <div style={{
                        width: 32,
                        height: '100%',
                        backgroundColor: 'black',
                        borderBottomRightRadius: 10,
                        borderTopRightRadius: 10,
                        marginLeft: 4
                    }} />
                </SlideAnimationContainer>
                <div style={{
                    marginLeft: 52,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <SoftwareInfo duration={10} contents={CONTENTS} />
                    <FadeInDownTitle>
                        <Title text={'MOTION'} size="lg" style={{ color: '#fd7e14' }} />
                        <Title text={'GRAPHIC'} style={{ color: '#fd7e14' }} />
                    </FadeInDownTitle>
                </div>
            </div>
        </div>
    )
}