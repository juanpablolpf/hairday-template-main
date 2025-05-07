import {schedulesDay} from "./load.js"
import {scheduleCancel} from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")


//gerar evento de click para cada periodo
periods.forEach((period) => {
    //capturar o evento de click na lista
    period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel-icon")){
        //obter a li pai do elemento clicado
        const item = event.target.closest("li")

        //pega o id do agendametno para remover
        const { id } = item.dataset
        

        //confirma que o id selecionado
        if(id){
            //confirma que o usario quer cancelar
            const isConfirm = confirm(
                "Tem certeza que deseja cancelar o agendamento?"
            )

            if(isConfirm){
                //faz a requisição na API para cancelar
                await scheduleCancel({id})

                //recarrega os agendamentos
                schedulesDay()
            }
        }
    }    
    })
})