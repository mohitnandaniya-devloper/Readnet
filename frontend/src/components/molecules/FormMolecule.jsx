import React, { useState } from "react";
import axiosClient from "@/utils/axiosClient";
import useContactStore from "@/store/contactStore";
import ButtonAtom from "@/components/atoms/ButtonAtom";
import TextareaAtom from "@/components/atoms/TextareaAtom";
import InputAtom from "@/components/atoms/InputAtom";
import LableAtom from "@/components/atoms/LableAtom";

export default function FormMolecule() {
  const { formData, setFormData, resetForm } = useContactStore();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(e.target.name, e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosClient.post("/contacts/", formData);
      alert("Message sent successfully!");
      resetForm();
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:w-1/2 md:w-2/3 mx-auto bg-black p-8 rounded-xl shadow-lg"
    >
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <LableAtom
            htmlFor="name"
            className="leading-7 text-sm text-gray-300"
            children="Name"
          />
          <InputAtom
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-neutral-900 text-white border border-neutral-700 focus:border-red-600 focus:ring-red-600 rounded px-3 py-2"
          />
        </div>

        <div className="p-2 w-1/2">
          <LableAtom
            htmlFor="email"
            className="leading-7 text-sm text-gray-300"
            children="Email"
          />
          <InputAtom
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-neutral-900 text-white border border-neutral-700 focus:border-red-600 focus:ring-red-600 rounded px-3 py-2"
          />
        </div>

        <div className="p-2 w-full">
          <LableAtom
            htmlFor="message"
            className="leading-7 text-sm text-gray-300"
            children="Message"
          />
          <TextareaAtom
            id="message"
            name="message"
            rows={6}
            maxLength={200}
            className="w-full h-20 resize-none bg-neutral-900 text-white border border-neutral-700 focus:border-red-600 focus:ring-red-600 rounded px-3 py-2"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="text-right text-xs mt-1 text-gray-400">
            {formData.message.length}/200
          </div>
        </div>

        <div className="p-2 w-full">
          <ButtonAtom
            type="submit"
            className="flex mx-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-10 rounded transition-colors duration-300"
          >
            {loading ? "Sending..." : "Submit"}
          </ButtonAtom>
        </div>
      </div>
    </form>
  );
}
