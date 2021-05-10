import {
  Typography,
  TextField,
  Button,
  makeStyles,
  CircularProgress,
} from '@material-ui/core';
import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getAppointmentsByDate } from '../util/getAppointmentsByDate';
import { getCurrentDateString } from '../util/getCurrentDateString';
import { Appointment } from './Appointment';
import { Response } from '../@types/Response';

const useStyles = makeStyles({
  textAndButton: {
    display: 'flex',
    padding: '5%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

export const SelectAppointment = () => {
  const [date, setDate] = useState(getCurrentDateString());
  const [runQuery, setRun] = useState(false);
  const { textAndButton } = useStyles();

  const { isLoading, error, data } = useQuery<AxiosResponse<Response[]>>(
    'appointments',
    () => getAppointmentsByDate(date),
    { enabled: runQuery },
  );

  console.log(error, 'error');

  return (
    <div>
      <Typography variant="h5">Selecione a data do seu agendamento!</Typography>
      <div className={textAndButton}>
        <TextField
          id="date"
          label="Data"
          autoFocus
          type="date"
          color="secondary"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          defaultValue={date}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          variant="contained"
          style={{ marginTop: 12 }}
          color="secondary"
          onClick={() => setRun(true)}
        >
          Olhar Fila!
        </Button>
      </div>

      {isLoading && <CircularProgress color="primary" />}
      {error && (
        <Typography variant="h6">
          Não foi possível checar os apontamentos dessa data.
        </Typography>
      )}
      {data &&
        data.data.map((request, index, array) => (
          <Appointment
            key={`${request.Clinic.name}${request.Doctor.name}${request.Patient.name}${request.Date}`}
            index={index}
            response={request}
            total={array.length}
          />
        ))}
    </div>
  );
};
