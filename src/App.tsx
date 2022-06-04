import { useState, Fragment } from "react";
import userRequests from "./components/hooks/userRequests";
import "./App.css";
import Header from "./components/Header";
import UserTable from "./components/UserTable";
import UserCreateModal from "./components/UserCreateModal";
import userModal from "./components/hooks/userModal";

function App() {
	const { userList, handleCreateUser } = userRequests();
	const { userCreateModal,
		handleOpenCreateModal,
		handleCloseCreateModal } = userModal();
	return (
		<Fragment>
			<Header />
			<UserTable users={userList} onClick={handleOpenCreateModal} />
			<UserCreateModal show={userCreateModal} onHide={handleCloseCreateModal} createUser={handleCreateUser} />
		</Fragment>
	);
}

export default App;
