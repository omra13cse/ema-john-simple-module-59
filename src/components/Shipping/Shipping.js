import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    return (
        <div>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("name")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <span className="error">This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;