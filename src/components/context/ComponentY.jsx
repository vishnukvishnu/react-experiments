import React, {useContext} from 'react'
import ComponentZ from './ComponentZ'
import {UserContext, ChannelContext} from '../../App';

function ComponentY() {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <div>
            <h1>ComponentY - {user} - {channel}</h1>
            <ComponentZ />
        </div>
    )
}

export default ComponentY
