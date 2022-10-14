import React from 'react'

function Tiltle() {
    console.log('Rendering Title--')
    return (
        <h2>
            useCallback hook
        </h2>
    )
}

export default React.memo(Tiltle)
