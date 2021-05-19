import  { useState } from 'react';
import PageHeader from '../../../Components/PageHeader';
import Input from '../../../Components/Input';
import warningIcon from '../../../assets/images/icons/warning.svg';
import Select from '../../../Components/Select';
import './styles.css';
import '../../../assets/styles/global.css';

export const CadastroDoc = function () {


    const [nameDoc, setNameDoc] = useState('');
    const [crm, setCrm] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cpfDoc, setCpfDoc] = useState('');
    const [birthdayDoc, setBirthdayDoc] = useState('');

    const [schedulesItems, setScheduleItens] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItens([
            ...schedulesItems,
            { week_day: 0, from: '', to: '' }
        ])
    }

    function setScheduleItemValue(position: number, field: string, value:string) {
        const updateScheduleItems = schedulesItems.map((schedulesItem, index) => {
            if (index === position) {
                return { ...schedulesItem, [field]: value};
            }

            return schedulesItem;
        });

        setScheduleItens(updateScheduleItems);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Adicionar Médico"
                description="Olá Admin, o primeiro passo é preencher esse formulário."
            />

            <main>
                <form >
                    <fieldset>
                        <legend>Dados do Médico</legend>

                        <Input
                            name="name"
                            label="Nome"
                            value={nameDoc}
                            onChange={(e) => { setNameDoc(e.target.value) }}
                        />

                        <Input
                            name="crm"
                            label="CRM"
                            value={crm}
                            onChange={(e) => { setCrm(e.target.value) }}
                        />

                        <Input
                            name="cpf"
                            label="CPF"
                            value={cpfDoc}
                            onChange={(e) => {setCpfDoc(e.target.value) }}
                        />

                        <Input
                            name="whatsapp"
                            label="Telefone (Whatsapp)"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />

                        <Input
                            type="date"
                            name="birthday"
                            label="Data de Nascimento"
                            value={birthdayDoc}
                            onChange={(e) => { setBirthdayDoc(e.target.value) }}
                        />  
                        
                    </fieldset>


                    <fieldset>
                        <legend>
                            Horários Disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>

                        {schedulesItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5 ', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    />

                                    <Input
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />

                                    <Input
                                        name="to"
                                        label="Até"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
                                </div>
                            );
                        })}
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

