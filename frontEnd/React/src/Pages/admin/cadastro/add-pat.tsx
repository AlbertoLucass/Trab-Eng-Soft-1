import  { useState } from 'react';
import PageHeader from '../../../Components/PageHeader';
import Input from '../../../Components/Input';
import warningIcon from '../../../assets/images/icons/warning.svg';
import './styles.css';
import '../../../assets/styles/global.css';

export const CadastroPat = function () {


    const [namePat, setNamePat] = useState('');
    const [adress, setAdress] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cpfPat, setCpfPat] = useState('');
    const [rgPat, setRgPat] = useState('');
    const [maritalStatusPat, setmaritalStatusPat] = useState('');
    const [birthdayPat, setBirthdayPat] = useState('');

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Adicionar Paciente"
                description="Olá Admin, o primeiro passo é preencher esse formulário."
            />

            <main>
                <form >
                    <fieldset>
                        <legend>Dados do Paciente</legend>

                        <Input
                            name="name"
                            label="Nome"
                            value={namePat}
                            onChange={(e) => { setNamePat(e.target.value) }}
                        />

                        <Input
                            name="adress"
                            label="Endereço"
                            value={adress}
                            onChange={(e) => { setAdress(e.target.value) }}
                        />

                        <Input
                            type="number"
                            name="cpf"
                            label="CPF"
                            value={cpfPat}
                            onChange={(e) => {setCpfPat(e.target.value) }}
                        />

                        <Input
                            type="number"
                            name="rg"
                            label="RG"
                            value={rgPat}
                            onChange={(e) => {setRgPat(e.target.value) }}
                        />

                        <Input
                            name="maritalStatus"
                            label="Estado Civil"
                            value={maritalStatusPat}
                            onChange={(e) => {setmaritalStatusPat(e.target.value) }}
                        />

                        <Input
                            type="number"
                            name="whatsapp"
                            label="Telefone (Whatsapp)"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />

                        <Input
                            type="date"
                            name="birthday"
                            label="Data de Nascimento"
                            value={birthdayPat}
                            onChange={(e) => { setBirthdayPat(e.target.value) }}
                        />

                        
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante" />
                            Importante <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar Cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

