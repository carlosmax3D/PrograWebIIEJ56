import { useState } from 'react';
import { useForm } from 'react-hook-form';
function LoginForm() {
  const [enviado, setEnviado] = useState(false);
  const { register, handleSubmit, 
    formState: { errors } } = useForm();
  const onSubmit = (data) => {
    setEnviado(true);
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
    <input style={{backgroundColor: 
        errors.email?'red':'green'}} type="text" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && <p>Email is required and must be valid</p>}
      <label>Password</label>
      <input type="password" {...register("password", { required: true })} />
      {errors.password && <p>Password is required</p>}
      <label>Email</label>
    <input type="text" {...register("nombre", { required: false, pattern: /^\S+@\S+$/i  })} />
      {errors.nombre && <p>Nombre not valid</p>}
      <button type="submit" disabled={enviado}>Submit</button>
    </form>
  );
}
export default LoginForm;