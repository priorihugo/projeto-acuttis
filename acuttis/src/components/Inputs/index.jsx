import { useForm } from "react-hook-form";
import ControlledInput from "./ControlledInput";
import axios from "axios";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ModalResultado from "./ModalResultado";
import M from "materialize-css";

function Inputs() {
  //a biblioteca react-hook-forms permite centralizar em um unico objeto
  //diversor inputs de um formulario e fazer integração para validação com outras bibliotecas
  //como zod e yuo
  const {
    control,
    register,
    handleSubmit,

    getValues,
    formState: { errors },
  } = useForm();

  const [displayResponse, setDisplayResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [thisModal, setThisModal] = useState();

  const modalRef = useRef();

  useLayoutEffect(() => {
    //este bug foi chatinho de arrumar
    //o que este codigo faz e que depois da renderização dos inputs
    //a gente reinicia os modais e recaptura
    //isto foi feito devido a perda de referencia entre renderizações

    console.log("loading inputs");
    const modalResultado = document.getElementById("modal1");
    const modalInstances = M.Modal.init(modalResultado);

    if (modalInstances !== undefined) {
      setThisModal(modalInstances);
    }
  }, []);

  const handleConfirm = async (data) => {
    setIsLoading(true);
    const inputValues = getValues();

    try {
      //http://localhost:8888/
      //"http://acuttis-backend.vercel.app/
      //https://acurris-render-backend.onrender.com/

      //utilizamos nossa api hospedada no render gratuitamente
      //escrevi acuttis errado :(

      const res = await axios.get("https://acurris-render-backend.onrender.com/calcula/", { params: data });
      console.log("res ", res);

      setDisplayResponse(res.data);

      //abre o modal
      thisModal?.open();
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

  const closeModal = () => {
    thisModal?.close();
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

      <ModalResultado close={closeModal} displayResponse={displayResponse} />
    </div>
  );
}

export default Inputs;
