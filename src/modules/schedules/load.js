import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import {hoursLoad} from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay(){
    //obtem a data do input
    const date = selectedDate.value
    

    //buscar na API os agendamentos
    const dailySchedules = await scheduleFetchByDay ({date})
    console.log(dailySchedules)

    // Renderiza as horas disponíveis
    hoursLoad({date})
}