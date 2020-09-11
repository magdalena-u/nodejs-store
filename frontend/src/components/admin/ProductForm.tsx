import React from 'react';

import { useForm } from 'react-hook-form';
import { IStoreProductDetail } from 'interfaces/store/IStoreProduct';

export const ProductForm: React.FC = () => {
  const { handleSubmit, register, errors } = useForm();

  const submitForm = (data: IStoreProductDetail) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <label htmlFor='title'>Title</label>
      <input
        type='text'
        name='title'
        ref={register({
          required: true,
          minLength: 3,
        })}
      />
      {errors.title && 'Title is required'}
      <label htmlFor='price'>Price</label>
      <input type='number' name='price' ref={register({ required: true })} />
      {errors.price && 'Title is required'}
      <label htmlFor='imageUrl'>Url to product image</label>
      <input type='text' name='imageUrl' id='imageUrl' ref={register()} />
      <textarea
        name='description'
        placeholder='Write description...'
        id='description'
        ref={register()}
      ></textarea>

      <button>Submit</button>
    </form>
  );
};
