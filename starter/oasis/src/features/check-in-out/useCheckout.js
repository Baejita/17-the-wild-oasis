import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function useCheckout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked  out`);
      queryClient.invalidateQueries({ active: true });
      navigate("/bookings");
    },
    onError: (error) => {
      toast.error("There was an error while checking in");
    },
  });

  return { checkout, isCheckingOut };
}

export default useCheckout;
