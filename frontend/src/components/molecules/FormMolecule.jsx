import React, {useState} from "react"
import axiosClient from "@/utils/axiosClient"
import useContactStore from "@/store/contactStore"
import ButtonAtom from "@/components/atoms/ButtonAtom"
import TextareaAtom from "@/components/atoms/TextareaAtom"
import InputAtom from "@/components/atoms/InputAtom"
import LableAtom from "@/components/atoms/LableAtom"

import { toast } from "sonner"

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
      const response = await axiosClient.post("/contacts/receive", formData);
      toast("Message sent successfully!")
      resetForm();
    } catch (err) {
      console.error("Error sending message:", err);
      toast("Something went wrong.")
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <LableAtom htmlFor="name" className="leading-7 text-sm" children="Name"/>
          <InputAtom
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="p-2 w-1/2">
        <LableAtom htmlFor="name" className="leading-7 text-sm" children="Email"/>
          <InputAtom
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="p-2 w-full">
          <LableAtom htmlFor="name" className="leading-7 text-sm" children="Message"/>
          <TextareaAtom
            id="message"
            name="message"
            rows={6}
            maxLength={200}
            className="h-20 resize-none"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="text-right text-xs mt-1">
            {formData.message.length}/200
          </div>
        </div>

        <div className="p-2 w-full">
          <ButtonAtom
            type="submit"
            className="flex mx-auto border-0 py-2 px-8 rounded"
          >
            {loading ? "Sending..." : "Submit"}
          </ButtonAtom>
        </div>
      </div>
    </form>
  )
}