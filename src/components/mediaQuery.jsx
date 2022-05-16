import react from 'react';
import { useMediaQuery } from 'react-responsive';

const Desktop = ({children}) => {
    const isDestkop = useMediaQuery ({ minWidth: 750})

    return (
        isDestkop ? children : null
    )
}

const Mobile = ({children}) => {
    const isMobile = useMediaQuery ({ maxWidth: 749})

    return (
        isMobile ? children : null
    )
}

export default {Desktop, Mobile};