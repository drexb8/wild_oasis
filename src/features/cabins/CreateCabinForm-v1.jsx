import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";

function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;
  console.log(editValues);

  const queryClient = useQueryClient();
  const isEditSession = Boolean(cabinToEdit.id);

  const { mutate, isPending } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
      reset();
      toast.success("Cabin created successfully.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }

  function onError(errors) {
    // console.log(errors);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isPending}
          {...register("name", { required: "Enter the cabin name." })}
        />
      </FormRow>

      <FormRow label="Max Capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isPending}
          {...register("maxCapacity", {
            required: "Enter the capacity",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isPending}
          {...register("regularPrice", {
            required: "Enter the cabin price",
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isPending}
          defaultValue={0}
          {...register("discount", {
            validate: (value) =>
              +value <= +getValues().regularPrice ||
              "Discount should be less than the price",
          })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          disabled={isPending}
          defaultValue=""
          {...register("description", {
            required: "Enter the description of the cabin",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          disabled={isPending}
          {...register("image", {
            required: "Choose the cabin image",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" size="medium" type="reset">
          Cancel
        </Button>
        <Button variation="primary" size="medium">
          {isPending ? "Adding cabin..." : " Add cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
