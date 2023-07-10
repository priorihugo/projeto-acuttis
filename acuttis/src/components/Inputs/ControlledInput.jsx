import { Controller } from "react-hook-form";

const validatePositiveNumber = (value) => {
  console.log("value ", value);

  if (Number(value) > 0) {
    return true;
  } else {
    return "Por favor, insira um número positivo.";
  }
};

function mascaraMoeda(event) {
  console.log("event ", event);
  console.log("mascaraMoeda ", event.target.value);
  if (event.target.value) {
    const onlyDigits = event.target.value
      .split("")
      .filter((s) => /\d/.test(s))
      .join("")
      .padStart(3, "0");
    const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2);
    event.target.value = maskCurrency(digitsFloat);
  }
}

function maskCurrency(valor, locale = "pt-BR", currency = "BRL") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(valor);
}

/*
function ControlledInput({
  control,
  name,
  errors,
  label,
  type,
  formatterCallback,
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, event } }) => (
        <div className="col s6">
          <input type={type} className="validate" />
          <label htmlFor={"val_dia"}>{label}</label>
          <span
            className="helper-text red-text text-darken-3 "
            data-error="wrong"
          >
            {errors[name]?.message}
          </span>
        </div>
      )}
    />
  );
}
*/
function ControlledInput({ register, errors, name, label, type }) {
  return (
    <div className="col s6">
      <label htmlFor={"val_dia"}>{label}</label>
      <input
        {...register(name, {
          required: "Campo obrigatório",
          validate: (v) => parseInt(v) >= 0 || "Número deve ser positivo",
        })}
        type={type}
      />
      <span
        className="helper-text red-text text-darken-3 "
        data-error={"\nFormato Invalido\n"}
      >
        {errors[name]?.message}
      </span>
    </div>
  );
}

export default ControlledInput;
