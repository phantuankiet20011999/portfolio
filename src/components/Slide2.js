import * as React from 'react'
import { SoftwareInfo, Title } from './common'
import { fadeInDown, rotateInDownRight } from 'react-animations'
import styled, { keyframes } from 'styled-components'

import img1 from '../assets/slide2/1 lon.png'
import video from '../assets/slide2/videoslide2.mp4'
import img2 from '../assets/slide2/port_03.jpg'

const fadeInDowmAnimation = keyframes`${fadeInDown}`
const rotateAnimation = keyframes`${rotateInDownRight}`

const WrapImageContainer = ({ children, ...props }) => {
    const { style, ...restProps } = props
    return (
        <div
            style={{
                cursor: 'pointer',
                width: 225,
                height: '100%',
                position: 'relative',
                ...style
            }}
            {...restProps}
        >{children}
        </div>
    )
}

const RotateContainer = styled.div`
    animation: 3s ${rotateAnimation};
`

const WrapImageAnimation = styled(WrapImageContainer)`
    animation: ${props => props.duration}s ${fadeInDowmAnimation};
`

const DescriptionContainer = styled.span`
    animation: 3s ${rotateAnimation};
`

const CONTENTS = [
    '+ modeling & animation by Blender',
    '+ edit by Adobe After Effects'
]

export const Slide2 = () => {
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            boxSizing: 'border-box',
            padding: 80,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '55%',
                flex: 3
            }}>
                <RotateContainer>
                    <Title text="3D" size="lg" style={{ color: ' #77CAFA' }} />
                    <Title text="ANIMATION" style={{ color: ' #77CAFA' }} />
                </RotateContainer>
                <DescriptionContainer>Một dự án sản xuất video quảng cáo cho học phần Thiết kế quảng cáo
                    truyền hình.
                </DescriptionContainer>
                <SoftwareInfo duration={6} contents={CONTENTS} />
            </div>
            <div style={{
                flex: 7,
                height: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                <WrapImageAnimation
                    duration={3}
                    style={{
                        zIndex: 99
                    }}>
                    <img
                        style={{
                            position: 'absolute',
                            width: 225,
                            height: 388,
                            bottom: 0
                        }}
                        src={img1}
                        className={'grow'}
                    />
                </WrapImageAnimation>
                <WrapImageAnimation
                    duration={2}
                    style={{
                        boxSizing: 'border-box',
                        borderLeft: '2px solid red',
                        borderRight: '2px solid red',
                    }}>
                    <video controls
                        style={{
                            position: 'absolute',
                            width: 225,
                            height: 388,
                            top: 20,
                        }}
                        className="grow"
                    >
                        <source src={video} />
                    </video>
                </WrapImageAnimation>
                <WrapImageAnimation duration={3.5}>
                    <img
                        src={img2}
                        style={{ position: 'absolute', width: 225, height: 388, bottom: 0 }}
                        className="grow position-absolute w-100 h-75  bottom-0" />
                </WrapImageAnimation>
            </div>
        </div>
    )
}