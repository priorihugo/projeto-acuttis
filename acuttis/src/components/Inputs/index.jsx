import { useForm } from "react-hook-form";
import ControlledInput from "./ControlledInput";
import axios from "axios";
import { useEffect, useState } from "react";
import ModalResultado from "./ModalResultado";
import M from "materialize-css";

function Inputs() {
  //a biblioteca react-hook-forms permite centralizar em um unico objeto
  //diversor inputs de um formulario e fazer integração para validação com outras bibliotecas
  //como zod e yuo

  useEffect(() => {
    var modal = document.querySelectorAll(".modal");
  }, []);

  const {
    control,
    register,
    handleSubmit,

    getValues,
    formState: { errors },
  } = useForm();

  const [displayResponse, setDisplayResponse] = useState({});
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async (data) => {
    console.log("data ", data);
    const inputValues = getValues();

    console.log("values ", inputValues);
    try {
      setIsLoading(true);
      const res = await axios.get("http://localhost:8888/", { params: data });

      console.log("response ", res.data);

      setDisplayResponse(res.data);
      setVisible(true);
    } catch (err) {
      console.log("err ", err?.message);
      if (err.message.toLowerCase() == "Network Error".toLowerCase()) {
        M.toast({ html: "Erro de conexão, servidor inacessível" });
      } else {
        M.toast({ html: err?.message });
      }
    } finally {
      setIsLoading(false);
    }
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
                control={control}
                register={register}
                errors={errors}
                label={"Diurno (de 5:00h as 22:00h)"}
                name={"dia_val"}
                type={"number"}
              />
              <ControlledInput
                control={control}
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
                control={control}
                register={register}
                errors={errors}
                label={"Inicio"}
                name={"inicio"}
                type={"time"}
              />

              <ControlledInput
                control={control}
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
          <a
            className="btn app-btn waves-effect waves-light"
            href="#modal1"
            type="button"
            onClick={handleSubmit(handleConfirm)}
          >
            Calcular
          </a>
        </form>
      </div>
      <ModalResultado
        displayResponse={displayResponse}
        visivel={visible}
        setVisivel={setVisible}
      />
    </div>
  );
}

export default Inputs;
