import React from "react"

const e = React.createElement

export default function IntroSection() {
    return e('section', 
        null, 
        [e('h1',
            {key: 1},
            'User To-Do Table')])
}