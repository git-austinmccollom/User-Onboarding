import React from 'react'
import styled from 'styled-components'

const UserDiv = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    width: 40%;
    margin: auto;
`

export default function User(props) {

    const { user } = props
    return(
        <UserDiv>
            <p>{`name: ${user.name}`}</p>
            <p>{`email: ${user.email}`}</p>
        </UserDiv>
    )
}