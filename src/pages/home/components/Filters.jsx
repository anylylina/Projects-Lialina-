import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Filters = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const params = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    navigate(`/hotels?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-5 bg-gray-100 gap-4 p-6 rounded-md shadow items-start"
    >
      <div>
        <Input
          type="text"
          placeholder="Location"
          {...register("location", { required: "Location is required" })}
        />
        {errors.location && (
          <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-4 ">
        <Input type="date" {...register("checkIn")} />
        <Input type="date" {...register("checkOut")} />
      </div>

      <Input type="number" placeholder="Guests" {...register("guests")} />

      <div className="flex w-39 flex-col md:flex-row gap-4">
        <Input placeholder="From" type="text" {...register("priceFrom")} />
        <Input placeholder="To" type="text" {...register("priceTo")} />
      </div>

      <Button label="Search" type="submit" />
    </form>
  );
};
