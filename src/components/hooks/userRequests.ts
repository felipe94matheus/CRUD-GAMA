import { useEffect, useState } from "react";
import { getUsers, createUser } from "../../api";
import { Users } from "../types";


function userRequests() {
    const [userList, setUserList] = useState<Users[]>([] as Users[]);

    useEffect(() => {
        getUsers().then(users=> setUserList(users));
    })

    const handleCreateUser = async (user: Omit<Users, "id">) => {
        const newUser = await createUser(user);
        setUserList(
            oldUserList => [...oldUserList, newUser]
        )
    }

    return {
        userList,
        handleCreateUser
    }

   
}

export default userRequests;