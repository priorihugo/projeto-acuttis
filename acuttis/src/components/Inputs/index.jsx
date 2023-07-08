function Inputs() {
  return (
    <div className="section app-inputs">
      <div className="container">
        {
          //
        }
        <div className="app-input-group">
          <h1>Valor das Horas:</h1>
          <div className="row">
            <div className="input-field col s6">
              <input id="val-dia" type="time" />
              <label for="val-dia">Diurno (de * as *)</label>
            </div>
            <div className="input-field col s6">
              <input id="val-noite" type="time" />
              <label for="val-noite">Noturno (de * as *)</label>
            </div>
          </div>
        </div>
        {
          //
        }
        <div className="app-input-group ">
          <h1>Horas Trabalhadas:</h1>
          <div className="row">
            <div className="input-field col s6">
              <input id="inicio" type="time" />
              <label for="inicio">Inicio</label>
            </div>
            <div className="input-field col s6">
              <input id="fim" type="time" />
              <label for="fim">Fim</label>
            </div>
          </div>
        </div>
        {
          //
        }
        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Calcular
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  );
}

export default Inputs;
