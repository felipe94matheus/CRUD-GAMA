import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { Users } from '../types';

interface UserCreateModalProps {
    show: boolean;
    onHide: () => void;
    createUser: (user: Omit<Users,"id">) => void;
}


const UserCreateModal: React.FC<UserCreateModalProps> = ({show, onHide, createUser}) => {
    const formik = useFormik({
        initialValues: {
            nome: '',
            cpf: '',
            endereco: '',
            email: '',
            telefone: '',
        },
        onSubmit: values => { 
            createUser({
                nome: values.nome,
                cpf: values.cpf,
                endereco: values.endereco,
                email: values.email,
                telefone: values.telefone,
            })
            onHide();
        }
    })
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Adicionar Usuário</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Nome" id='nome' value={formik.values.nome} onChange={formik.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" placeholder="CPF" id='cpf' value={formik.values.cpf} onChange={formik.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control type="text" placeholder="Endereço" id='endereco' value={formik.values.endereco} onChange={formik.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" id='email' value={formik.values.email} onChange={formik.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="text" placeholder="Telefone" id='telefone' value={formik.values.telefone} onChange={formik.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit">Salvar</Button>
                        <Button variant="danger" onClick={formik.handleReset}>Resetar</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default UserCreateModal;