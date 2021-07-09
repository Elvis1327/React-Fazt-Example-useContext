import React, {useEffect, useContext} from 'react'
import { UserContext } from '../context/User/UserContext'

export const UserList = () => {
    const { getUsers, users, getProfile } = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="list-group h-100">
            {
                users.map(user => (
                    <a 
                        className="list-group-item list-group-item-action d-flex flex-row justify-content-start" 
                        key={user.id}
                        // href="true"
                        onClick={() => getProfile(user.id)}>
                        <img src={user.avatar} className="img-fluid mr-4 rounded-circle" alt="pic" />
                        <p>
                            {user.first_name} ${user.last_name}
                        </p>
                    </a>
                ))
            }
        </div>
    )
}
