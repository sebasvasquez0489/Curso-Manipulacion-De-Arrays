//Validar si se anteponen las fechas para una de las citas.//
const dates = [
  {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 9, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

/// Utilizaremos Libreria npm de date-fns. ////
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap  = (newDate) => {
  return dates.some(dates => {
    return areIntervalsOverlapping(
      {start: dates.startDate, end: dates.endDate},///teración actual
      {start: newDate.startDate, end: newDate.endDate},
    )
  })
}
console.log("Is over Lap", isOverlap(newAppointment));