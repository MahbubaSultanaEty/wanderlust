"use client";
import {AlertDialog, Button} from "@heroui/react";
import { Delete, Trash } from "lucide-react";
import { toast } from "react-toastify";


const BookingCancelAlert = ({ bookingId }) => {
    console.log(bookingId);

    const handleCancelBooking = async () => {
        const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
            method: "DELETE",
            headers: {
                "content-type": 'application/json'
            }
        });
        const data = await res.json();
        // console.log(data);
        if (data) {
            toast.warning("booking cancelled")
        }
        if (!data) {
            toast.error("fai")
        }
    }
    return (
         <AlertDialog>
      <AlertDialog.Trigger>
    <button className="border border-red-300 hover:bg-red-100 transition px-4 py-2 rounded-2xl font-semibold text-red-700 cursor-pointer">
      Cancel Booking
    </button>
  </AlertDialog.Trigger>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Close
              </Button>
              <Button slot="close" variant="danger" onClick={handleCancelBooking}>
              <Trash />  Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};

export default BookingCancelAlert;