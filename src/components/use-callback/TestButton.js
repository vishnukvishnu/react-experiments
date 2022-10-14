import React from 'react'

function TestButton({handleClick, children}) {
    console.log('rendering TEST button--', children)
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export default React.memo(TestButton)
