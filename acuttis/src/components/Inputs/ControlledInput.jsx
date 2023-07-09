const validatePositiveNumber = (value) => {
  console.log("value ", value);

  if (Number(value) > 0) {
    return true;
  } else {
    return "Por favor, insira um número positivo.";
  }
};

function ControlledInput({ register, errors, name, label, type }) {
  return (
    <div className="input-field col s6">
      <input
        {...register(name, {
          required: "Campo obrigatório",
          validate: (v) => parseInt(v) > 0 || "Número deve ser positivo",
        })}
        type={type}
      />
      <label htmlFor={"val_dia"}>{label}</label>
      <span className="helper-text red-text text-darken-3 " data-error="wrong">
        {errors[name]?.message}
      </span>
    </div>
  );
}
export default ControlledInput;
