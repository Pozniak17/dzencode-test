import { FormInput } from "./Form.styled";

export default function Form() {
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(evt);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormInput type="text" name="filter" placeholder="Поиск" />
    </form>
  );
}
