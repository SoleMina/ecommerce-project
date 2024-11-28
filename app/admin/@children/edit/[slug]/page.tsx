import EditForm from "@/app/components/admin/EditForm";
import React from "react";

const EditPage = async ({ params }: any) => {
  const { slug } = params;

  const item = await fetch(`http://localhost:3000/api/product/${slug}`, {
    cache: "no-store",
  }).then((res) => res.json());

  console.log(item, "item edit");
  return (
    <div>
      <EditForm item={item} />
    </div>
  );
};

export default EditPage;
