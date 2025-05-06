import dayjs from "dayjs"

import {scheduleNew} from "../../services/schedule-new.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//Date atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual e define a data minima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    //previne o comportamento padrao de carregar a pagina
    event.preventDefault()

    try {
        //recuperando o nome do cliente
        const name = clientName.value.trim()
        
        if(!name){
            return alert("Informe o nome do cliente!")
        }

        //recupera o horario selecionado
        const hourSelected = document.querySelector('.hour-selected')
        
        if(!hourSelected){
            return alert("Selecione a hora.")
        }

        //recuperar somente a hora
        const [hour] = hourSelected.innerText.split(":")
        
        //insere a hora e data
        const when = dayjs(selectedDate.value).add(hour, "hour")
        
        //gera um ID
        const id = new Date().getTime()

        await scheduleNew({
            id,
            name,
            when,
        })
        
    } catch (error) {
       alert("Não foi Possível realizar o agendaemento") 
       console.log(error)
    }
}