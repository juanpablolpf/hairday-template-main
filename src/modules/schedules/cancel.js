const periods = document.querySelectorAll(".period")


//gerar evento de click para cada periodo
periods.forEach((period) => {
    //capturar o evento de click na lista
    period.addEventListener("click", (event) => {
    if(event.target.classList.contains("cancel-icon")){
        //obter a li pai do elemento clicado
        const item = event.target.closest("li")
        const { id } = item.dataset
        


        if(id){
            const isConfirm = confirm(
                "Tem certeza que deseja cancelar o agendamento?"
            )

            if(confirm){
                console.log("REMOVER!")
            }
        }
    }    
    })
})