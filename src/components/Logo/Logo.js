import React from 'react'

const Logo = (props) => {

    const logoStyle={
        background:`url(${props.url})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        objectFit:'cover'
    };
    return (
        <div className={props.className} style={logoStyle}></div>
    )
}

export default React.memo(Logo)
