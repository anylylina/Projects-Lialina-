import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const params = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    navigate(`/hotels?${params.toString()}`);
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">
        Find your perfect hotel
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div>
          <Input
            type="text"
            placeholder="Location"
            {...register("location", { required: "Location is required" })}
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location.message}
            </p>
          )}
        </div>

        <div className="flex gap-4">
          <Input type="date" {...register("checkIn")} />
          <Input type="date" {...register("checkOut")} />
        </div>

        <Input
          type="number"
          placeholder="Guests amount"
          {...register("guests")}
        />

        <div className="flex gap-4">
          <Input
            placeholder="Price from"
            type="number"
            {...register("priceFrom")}
          />
          <Input
            placeholder="Price to"
            type="number"
            {...register("priceTo")}
          />
        </div>

        <Button label="Search" type="submit" />
      </form>
    </section>
  );
};

export default HomePage;
