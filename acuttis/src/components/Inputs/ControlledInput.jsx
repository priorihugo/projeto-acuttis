import { Controller } from "react-hook-form";

function ControlledInput({ register, errors, name, label, type }) {
  return (
    <div className="input-field col s6">
      <input
        {...register(name, { required: "Campo obrigatório"  } )}
        type={type}
      />
      <label for={"val_dia"}>{label}</label>
      <span className="helper-text red-text text-darken-3 " data-error="wrong">
        {errors[name]?.message}
      </span>
    </div>
  );
}
export default ControlledInput;
