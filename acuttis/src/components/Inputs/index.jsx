import { useForm } from "react-hook-form";
import ControlledInput from "./ControlledInput";
import axios from "axios";

function Inputs() {
  //a biblioteca react-hook-forms permite centralizar em um unico objeto
  //diversor inputs de um formulario e fazer integração para validação com outras bibliotecas
  //como zod e yuo
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const handleConfirm = async (data) => {
    console.log("data ", data);
    const inputValues = getValues();

    console.log("values ", inputValues);
    const res = await axios.get("http://localhost:8888/", { params: data });
    console.log("response ", res);
  };

  return (
    <div className="section app-inputs">
      <div className="container">
        <form>
          {
            //cada app input group contem uma label e 2 inputs
            //neste estamos coletando os valores de cada hora
          }
          <div className="app-input-group">
            <h1>Valor das Horas: </h1>
            <div className="row">
              <ControlledInput
                register={register}
                errors={errors}
                label={"Diurno (de 5:00h as 22:00h)"}
                name={"dia_val"}
                type={"number"}
              />
              <ControlledInput
                register={register}
                errors={errors}
                label={"Noturno (de 22:00h as 5:00h)"}
                name={"noite_val"}
                type={"number"}
              />
            </div>
          </div>

          {
            //divider
          }
          <hr className="solid" />
          {
            //neste app input group estamos coletando as faixas de horario
          }
          <div className="app-input-group ">
            <h1>Horas Trabalhadas: </h1>
            <div className="row">
              <ControlledInput
                register={register}
                errors={errors}
                label={"Inicio"}
                name={"inicio"}
                type={"time"}
              />

              <ControlledInput
                register={register}
                errors={errors}
                label={"Fim"}
                name={"fim"}
                type={"time"}
              />
            </div>
          </div>
          {
            //
          }
          <button
            class="btn waves-effect waves-light"
            type="button"
            onClick={handleSubmit(handleConfirm)}
          >
            Calcular
          </button>
        </form>
      </div>
    </div>
  );
}

export default Inputs;
