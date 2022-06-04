import { useState } from "react";
import { Users } from "../types";

function userModal() {
    const [userCreateModal, setCreateModal] = useState<boolean>(false);

    const handleOpenCreateModal = () => {
        setCreateModal(true);
    }

    const handleCloseCreateModal = () => {
        setCreateModal(false);
    }

    return {
        userCreateModal,
        handleOpenCreateModal,
        handleCloseCreateModal
    }
}

export default userModal;