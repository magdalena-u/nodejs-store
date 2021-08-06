import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { IStoreProductDetail } from "interfaces/store/IStoreProduct";
import { Button } from "components/shared/Button";
import { color } from "styles/variables";
import { httpService } from "services/rootService";
import { routes } from "routes/index.config";

const FormContainer = styled.div`
  margin: 2rem 0;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  max-width: 20rem;
  margin: 0 auto;
`;

const Label = styled.label`
  padding: 0.5rem 0 0.2rem;
`;

const Input = styled.input`
  border: 1px solid ${color.darkGrey};
  border-radius: 8px;
  height: 1.5rem;
`;

const Textarea = styled.textarea`
  resize: vertical;
  padding: 0.5rem;
  margin: 1rem 0;

  border: 1px solid ${color.darkGrey};
  border-radius: 8px;
`;

const defaultValues = {
  title: "",
  price: 0,
};

interface IProductForm {
  values?: IProductValues;
}

interface IProductValues {
  title: string;
  price: number;
  description?: string;
  imageUrl?: string;
}

export const ProductForm: React.FC<IProductForm> = ({ values }) => {
  const formValues = values
    ? {
        defaultValues: {
          title: values.title,
          price: values.price,
          description: values.description,
          imageUrl: values.imageUrl
        },
      }
    : { defaultValues };

  const { handleSubmit, register, errors } = useForm(formValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const submitForm = (data: IStoreProductDetail) => {
    httpService.POST(routes.admin.addProduct, data).then((res) => {
      setIsSubmit(true);
    });
  };

  return (
    <>
      {isSubmit ? (
        <Redirect to={routes.main} />
      ) : (
        <FormContainer>
          <FormWrapper onSubmit={handleSubmit(submitForm)}>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              name="title"
              ref={register({
                required: true,
                minLength: 3,
              })}
            />
            {errors.title && "Title is required"}
            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              name="price"
              ref={register({ required: true })}
            />
            {errors.price && "Title is required"}
            <Textarea
              name="description"
              placeholder="Write description..."
              id="description"
              ref={register()}
            ></Textarea>
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input type="url" name="imageUrl" ref={register()} />
            <Button type="submit">Submit</Button>
          </FormWrapper>
        </FormContainer>
      )}
    </>
  );
};
