import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { BsTrashFill, BsPenFill } from 'react-icons/bs';
import { Users } from '../types';

interface UserTableProps {
    users: Users[];
    onClick: () => void;
}

const UserTable: React.FC<UserTableProps> = ({users, onClick}) => {
  return (
    <Container>
        <div>
            <h1>Lista de Usuários</h1>
            <Button variant="outline-success" onClick={onClick}>Adicionar Usuário</Button>
        </div>
        <Table striped borderless responsive variant="light" hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Endereço</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.nome}</td>
                        <td>{user.cpf}</td>
                        <td>{user.endereco}</td>
                        <td>{user.email}</td>
                        <td>{user.telefone}</td>
                        <td><Button></Button><Button></Button></td>
                    </tr>
                ))}
            </tbody>

        </Table>
    </Container>
  );
}

export default UserTable;