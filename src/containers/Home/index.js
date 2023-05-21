import React, {useState, useRef} from "react";
import { useHistory } from 'react-router-dom'
import axios from "axios";

import People from '../../assests/people.svg';
import Arrow from '../../assests/arrow.svg';

import { H1 } from "../../components/Title/styles";

import ContainerItens from '../../components/ContainerItens';

import Button from '../../components/Button';

import { Container, Image, InputLabel, Input} from "./styles";

function App() {
    const [users, setUsers] = useState([]);
    const history = useHistory()
    const inputName = useRef()
    const inputAge = useRef()    


async function addNewUser() {
const { data: newUsers } = await axios.post("http://localhost:3001/users", {
    name: inputName.current.value, 
    age: inputAge.current.value,
});

setUsers([...users, newUsers]);

history.push("/usuarios");
}



    return (
        <Container>
            <Image alt="logo-imagem" src={People} />

            <ContainerItens>
                <H1>Olá!</H1>

                <InputLabel>Nome</InputLabel>
                <Input ref={inputName} placeholder="Nome" />

                <InputLabel>Idade</InputLabel>
                <Input ref={inputAge} placeholder="Idade" />

                <Button onClick={addNewUser}>
                    Cadastrar<img alt="seta" src={Arrow} />
                </Button>

              

            </ContainerItens>


        </Container>
    );
}

export default App