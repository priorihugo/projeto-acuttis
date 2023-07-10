import { useEffect } from "react";

function ModalResultado({ visivel, setVisivel, displayResponse }) {
  //optei por fazer esta captura no proprio
  //modal para que ele sempre venha com um objeto de response completo
  //respeitando o ciclo de vida do react
  useEffect(() => {
    //captura o modal no DOM
    const modalResultado = document.getElementById("modal1");
    const instancia = M.Modal.getInstance(modalResultado);

    if (visivel) {
      //se visivel
      //Abre o modal
      instancia.open();
    } else {
      instancia.close();
    }
  });

  return (
    <div id="modal1" className="modal">
      <div className="modal-content">
        <h4>Resultado</h4>
        <h6>
          Total de Horas do periodo Noturno:
          {Number(displayResponse?.noturno?.totalHoras).toFixed(2)}
        </h6>
        <h6>
          Valor pelas horas do periodo Noturno: R$
          {Number(displayResponse?.noturno?.valor).toFixed(2)}
        </h6>

        <h6>
          Total de Horas do periodo Diurno:
          {Number(displayResponse?.diurno?.totalHoras).toFixed(2)}
        </h6>
        <h6>
          Valor pelas horas do periodo Diurno: R$
          {Number(displayResponse?.diurno?.valor).toFixed(2)}
        </h6>

        <h4>Total : R$ {Number(displayResponse?.valorTotal).toFixed(2)}</h4>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={() => {
            setVisivel(false);
          }}
          className="waves-effect waves-green btn-flat"
        >
          Agree
        </a>
      </div>
    </div>
  );
}

export default ModalResultado;
