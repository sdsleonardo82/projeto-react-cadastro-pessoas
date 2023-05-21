import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom'
import axios from "axios"

import avatar from '../../assests/avatar.svg'
import Arrow from '../../assests/arrow.svg'
import Trash from '../../assests/bin.svg'

import { H1 } from "../../components/Title/styles";

import ContainerItens from '../../components/ContainerItens';
import Button from "../../components/Button";

import { Container, Image,User } from "./styles";

function Users() {
    const [users, setUsers] = useState([]);
   const history = useHistory()


useEffect(() => {
    async function fetchUsers(){
        const { data: newUsers } = await axios.get("http://localhost:3001/users");
        setUsers(newUsers);
    }

    fetchUsers()

}, [])

async function deleteUser(userId){
    await axios.delete (`http://localhost:3001/users/${userId}`)
    
    const newUsers = users.filter(user => user.id !== userId);

    setUsers(newUsers);
}

function goBackPage(){
    history.push('/');

}

    return (
        <Container>
            <Image alt="logo-imagem" src={avatar} />

            <ContainerItens isBlur={true}>
                <H1>Usuários!</H1>

                <url>
                    {users.map((user) => (
                    <User Key={user.id}>
                    <p>{user.name}</p> <p>{user.age}</p>
                    <button onClick={() => deleteUser(user.id)} >
                    <img src={Trash} alt="lata de lixo"/>
                    </button>               
                    </User>
                    ))}
                </url>

                <Button isBack={true} onClick={goBackPage}>
                <img alt="seta" src={Arrow} /> Voltar
                </Button>

            </ContainerItens>


        </Container>
    );
}

export default Users