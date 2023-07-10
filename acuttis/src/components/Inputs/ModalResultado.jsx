import { useEffect, useState } from "react";

function ModalResultado({ close, displayResponse }) {
  return (
    <div id="modal1" className="modal">
      <div className="modal-content">
        <h4>Resultado</h4>
        <h6>
          Total de horas do periodo Noturno:{" "}
          {Math.round(Number(displayResponse?.noturno?.totalHoras))}
        </h6>
        <h6>
          Valor pelas horas do periodo Noturno: R$
          {Number(displayResponse?.noturno?.valor).toFixed(2)}
        </h6>

        <h6>
          Total de Horas do periodo Diurno:{" "}
          {Math.round(Number(displayResponse?.diurno?.totalHoras).toFixed(2))}
        </h6>
        <h6>
          Valor pelas horas do periodo Diurno: R$
          {Number(displayResponse?.diurno?.valor).toFixed(2)}
        </h6>

        <h4>Total : R$ {Number(displayResponse?.valorTotal).toFixed(2)}</h4>
      </div>
      <div className="modal-footer">
        <a
          onClick={() => close()}
          href="#!"
          className="waves-effect waves-blue btn-flat modal-close"
        >
          Entendido
        </a>

        {/*<a onClick={()=>close()} href="#!" className="waves-effect waves-green btn-flat modal-close">
          Salvar Resultado
        </a>
        */}
      </div>
    </div>
  );
}

export default ModalResultado;
