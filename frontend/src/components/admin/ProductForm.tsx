import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { IStoreProductDetail } from "interfaces/store/IStoreProduct";
import { Button } from "components/shared/Button";
import { apiBase } from "apiBase";
import { color } from "styles/variables";

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

export const ProductForm: React.FC = () => {
  const { handleSubmit, register, errors } = useForm();
  const [isSubmit, setIsSubmit] = useState(false);

  const submitForm = (data: IStoreProductDetail) => {
    fetch(`${apiBase}/admin/add-product`, {
      method: "POST",
      body: JSON.stringify(data),
    }).then(() => setIsSubmit(true));
  };

  return (
    <>
      {isSubmit ? (
        <Redirect to="/" />
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

            <Button>Submit</Button>
          </FormWrapper>
        </FormContainer>
      )}
    </>
  );
};
