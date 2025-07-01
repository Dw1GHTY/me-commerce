import FormCard from "@/components/custom-components/Card/FormCard";
import CreateProductForm from "@/components/custom-components/Forms/CreateProductForm";
import React from "react";

const AdminPage = () => {
  return (
    <div className="">
      <FormCard
        title="Create a product"
        description="Fill in the details to create a new product"
      >
        <CreateProductForm />
      </FormCard>
    </div>
  );
};

export default AdminPage;
