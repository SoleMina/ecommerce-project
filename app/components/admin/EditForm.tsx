"use client";
import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "@/firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const updateProduct = async (slug: string, values: any, file: File) => {
  let fileURL = values.image;

  if (file) {
    const storageRef = ref(storage, values.slug);
    const fileSnapshot = await uploadBytes(storageRef, file);
    fileURL = await getDownloadURL(fileSnapshot.ref);
  }

  const docRef = doc(db, "products", slug);

  return updateDoc(docRef, {
    title: values.title,
    description: values.description,
    stock: values.stock,
    price: values.price,
    category: values.category,
    slug: values.slug,
    image: fileURL,
  }).then(() => console.log("Product has been updated!"));
};

const editForm = ({ item }: any) => {
  console.log(item, "item edit");
  const { title, description, stock, price, category, slug, image } = item;
  const [values, setValues] = useState({
    title,
    description,
    stock,
    price,
    category,
    slug,
    image,
  });
  const [file, setFile] = useState<File | null>(null);

  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]); // Set the selected file in the state
      console.log(file, "file");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      Swal.fire("Error", "Please upload an image", "error");
      return;
    }

    try {
      // Create product with form values and the uploaded image file
      await updateProduct(item.slug, values, file);
      Swal.fire({
        title: "Success!",
        text: "Product has been created",
        icon: "success",
        confirmButtonText: "Ok",
      });
      router.push("/products"); // Redirect to products page
    } catch (error) {
      Swal.fire("Error", "Failed to create product", "error");
    }
  };
  return (
    <div className="container m-auto mt-6 max-w-lg">
      <h1 className="text-center font-bold">EDIT PRODUCT</h1>
      <form onSubmit={handleSubmit} className="my-12">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            name="title"
            value={values.title}
            placeholder="Title"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            name="description"
            value={values.description}
            placeholder="Description"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image:
          </label>
          <input
            className=""
            id="image"
            type="file"
            name="image"
            accept="image/*"
            required
            onChange={handleFileChange}
          />
          {/* Preview the selected image */}
          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt="Selected file"
              width="100"
              className="mt-2"
            />
          )}
          {/* Display the existing image */}
          {!file && item.image && (
            <img
              src={item.image}
              alt="Current file"
              width="100"
              className="mt-2"
            />
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            name="price"
            value={values.price}
            placeholder="price"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stock"
          >
            Stock:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="stock"
            type="number"
            name="stock"
            value={values.stock}
            placeholder="Stock"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="category"
            onChange={handleChange}
            value={values.category}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="sports">Sports</option>
            <option value="gamming">Gamming</option>
            <option value="electronics">Electronics</option>
            <option value="fitness">Fitness</option>
            <option value="toys">Toys</option>
            <option value="kitchen">Kitchen</option>
            <option value="home-appliances">Home Appliances</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="slug"
          >
            Slug:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="slug"
            type="text"
            name="slug"
            value={values.slug}
            placeholder="Slug"
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default editForm;
