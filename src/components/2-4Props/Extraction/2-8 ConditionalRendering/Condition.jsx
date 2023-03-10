import React from 'react'

function UserGeeting(props) {
    return <h1>{props.name && `${props.name},`} Welcome {props.count ? ` It's 
    ${props.count} times`  : null}</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
}

function Greeting(props) {
    // if(props.isLoggedIn) {
    //     return <UserGeeting name="HEEYA" count={0} />
    // }
    // return <GuestGreeting />
    return props.isLoggedIn ? <UserGeeting name="HEEYA" count={1} /> : <GuestGreeting />
}

export default function Condition() {
    const isLoggedIn = true
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
        </div>
    )
}
