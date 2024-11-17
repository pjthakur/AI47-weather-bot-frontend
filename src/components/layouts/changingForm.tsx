
import React from 'react';
import { Input } from "@/components/ui/input"; // Adjust the import path as per your project structure
import { Button } from "@/components/ui/button";

interface ReusableFormProps {
  heading: string;
  placeholder?: string;
  buttonText: string;
  onSubmit: (inputValue: string) => void;
}

const ChangingForm: React.FC<ReusableFormProps> = ({
  heading,
  placeholder = "Enter something...",
  buttonText,
  onSubmit,
}) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    console.log("handle submit clicked")
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue(""); // Clear input after submission
  };

  return (
    <div className="rounded-lg w-full mx-auto bg-slate-100 p-4 sm:p-10">
      <h2 className="text-xl font-bold mb-4">{heading}</h2>
      <form onSubmit={handleSubmit} className="flex gap-4 flex-col sm:flex-row sm:px-0">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          className="w-full text-xl"
        />
        <Button type="submit" className="w-full max-w-40">
          {buttonText}
        </Button>
      </form>
    </div>
  );
};

export default ChangingForm;
