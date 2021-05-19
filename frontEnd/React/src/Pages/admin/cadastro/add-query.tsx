import  { useState } from 'react';
import PageHeader from '../../../Components/PageHeader';
import Input from '../../../Components/Input';
import warningIcon from '../../../assets/images/icons/warning.svg';
import Select from '../../../Components/Select';
import './styles.css';
import '../../../assets/styles/global.css';

export const CadastroQuery = function () {


    const [patient, setPatient] = useState('');
    const [doc, setDoc] = useState('');
    const [hour, setHour] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');


    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Adicionar Consulta"
                description="Olá Admin, o primeiro passo é preencher esse formulário."
            />

            <main>
                <form >
                    <fieldset>
                        <legend>Dados da Consulta</legend>

                        <Input
                            name="patient"
                            label="Paciente"
                            value={patient}
                            onChange={(e) => { setPatient(e.target.value) }}
                        />

                        <Input
                            name="doc"
                            label="Médico"
                            value={doc}
                            onChange={(e) => { setDoc(e.target.value) }}
                        />

                        <Input
                            type="date"
                            name="date"
                            label="Data"
                            value={date}
                            onChange={(e) => { setDate(e.target.value) }}
                        />

                        <Input
                            type="time"
                            name="hour"
                            label="Hora"
                            value={hour}
                            onChange={(e) => { setHour(e.target.value) }}
                        />

                        <Select
                            name="status"
                            label="Status"
                            value={status}
                            onChange={(e) => { setStatus(e.target.value) }}
                            options={[
                                { value: '0', label: 'Pendente' },
                                { value: '1', label: 'Atrasada' },
                                { value: '2', label: 'Remarcada' },
                                { value: '3', label: 'Realizada' },
                            ]}
                        />              
                        
                    </fieldset>y

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

