import { useForm } from "react-hook-form";
import ControlledInput from "./ControlledInput";

function Inputs() {
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
  };

  return (
    <div className="section app-inputs">
      <div className="container">
        <form>
          {
            //
          }
          <div className="app-input-group">
            <h1>Valor das Horas:</h1>
            <div className="row">
              <ControlledInput
                register={register}
                errors={errors}
                label={"Diurno (de 5:00h as 22:00h)"}
                name={"dia_val"}
                type={"time"}
              />
              <ControlledInput
                register={register}
                errors={errors}
                label={"Noturno (de 22:00h as 5:00h)"}
                name={"noite_val"}
                type={"time"}
              />
            </div>
          </div>

          {
            //divider
          }
          <hr className="solid"/>
          {
            //
          }
          <div className="app-input-group ">
            <h1>Horas Trabalhadas:</h1>
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
