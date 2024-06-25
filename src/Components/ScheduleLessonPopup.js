import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Modal,
  Backdrop,
  Fade,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tabs,
  Tab,
  Paper,
  Button,
  TextField,
  Card,
  Divider,
  Grid,
  Avatar,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_yourPublishableKeyHere");

const getAvailableSlots = (duration, availableHours = []) => {
  const slots = [];
  availableHours.forEach((range) => {
    const [start, end] = range.split("-");
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);

    const startTime = startHour * 60 + startMinute;
    const endTime = endHour * 60 + endMinute;

    for (let i = startTime; i < endTime; i += duration) {
      const hours = String(Math.floor(i / 60)).padStart(2, "0");
      const minutes = String(i % 60).padStart(2, "0");
      slots.push(`${hours}:${minutes}`);
    }
  });

  return slots;
};

const PaymentForm = ({ amount, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      const { error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: "Customer Name",
            },
          },
        }
      );

      if (confirmError) {
        console.log("[confirmError]", confirmError);
      } else {
        onPaymentSuccess();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ mb: 2 }}>
        <CardElement options={{ style: { base: { fontSize: "18px" } } }} />
      </Box>
      <FormControlLabel
        control={<Checkbox />}
        label="Save this card for future payments"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!stripe || !clientSecret}
        fullWidth
        sx={{ mt: 2 }}
      >
        Confirm payment - Rs {amount.toFixed(2)}
      </Button>
    </form>
  );
};

const ScheduleLessonPopup = ({
  open,
  handleClose,
  availableHours = [],
  instructor = {},
}) => {
  const [step, setStep] = useState(1);
  const [duration, setDuration] = useState(25);
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [showPromoCodeField, setShowPromoCodeField] = useState(false);
  const [availableSlots, setAvailableSlots] = useState(
    getAvailableSlots(25, availableHours)
  );

  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentTime = `${String(currentDate.getHours()).padStart(
    2,
    "0"
  )}:${String(currentDate.getMinutes()).padStart(2, "0")}`;

  const futureDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(currentDate.getDate() + i);
    return date;
  });

  const handleDurationChange = (event, newValue) => {
    setDuration(newValue === 0 ? 25 : 50);
    setTabValue(newValue);
    setAvailableSlots(
      getAvailableSlots(newValue === 0 ? 25 : 50, availableHours)
    );
  };

  const handleTimezoneChange = (event) => {
    setTimezone(event.target.value);
  };

  const handleSlotClick = (day, slot) => {
    setSelectedSlot(`${day} ${slot}`);
  };

  const handleContinue = () => {
    setStep(2);
  };

  const handlePromoCodeChange = (event) => {
    setPromoCode(event.target.value);
  };

  const handleRedeem = () => {
    // Handle promo code redemption logic
    setPromoApplied(true);
  };

  const handlePaymentSuccess = () => {
    alert("Payment successful!");
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Paper
            sx={{
              width: "90%",
              maxWidth: "800px",
              maxHeight: "75vh",
              p: 4,
              position: "relative",
              overflowY: "auto",
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
            {step === 1 && (
              <>
                <Typography variant="h6" gutterBottom>
                  Pick available slot from instructor’s schedule
                </Typography>
                <Box
                  sx={{
                    mb: 2,
                    backgroundColor: "#e0f7fa",
                    p: 2,
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="body2">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>{" "}
                    Choose the time for your first lesson. The timings are
                    displayed in your local timezone. Available time slots are
                    coloured <span style={{ color: "#F2178D" }}>PINK</span>.
                  </Typography>
                </Box>
                <Tabs
                  value={tabValue}
                  onChange={handleDurationChange}
                  variant="fullWidth"
                  indicatorColor="primary"
                  textColor="primary"
                >
                  <Tab label="25 mins" />
                  <Tab label="50 mins" />
                </Tabs>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <FormControl sx={{ width: "48%" }}>
                    <InputLabel>Timezone</InputLabel>
                    <Select value={timezone} onChange={handleTimezoneChange}>
                      <MenuItem value={timezone}>{timezone}</MenuItem>
                      {/* Add more timezones as needed */}
                    </Select>
                  </FormControl>
                  <Typography>
                    {futureDates[0].toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    -{" "}
                    {futureDates[futureDates.length - 1].toLocaleDateString(
                      "en-US",
                      { month: "short", day: "numeric" }
                    )}
                    , {currentDate.getFullYear()}
                  </Typography>
                </Box>
                <Box sx={{ overflowX: "auto", mt: 2 }}>
                  <table style={{ width: "100%", textAlign: "center" }}>
                    <thead>
                      <tr>
                        {futureDates.map((date) => (
                          <th key={date.toDateString()}>
                            {date.toLocaleDateString("en-US", {
                              weekday: "short",
                              day: "numeric",
                            })}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {availableSlots.map((time, i) => (
                        <tr key={i}>
                          {futureDates.map((date) => {
                            const dateStr = date.toDateString();
                            const isPast =
                              date.getDay() === currentDay &&
                              time <= currentTime;
                            return (
                              <td
                                key={`${dateStr}-${time}`}
                                onClick={() =>
                                  !isPast && handleSlotClick(dateStr, time)
                                }
                                style={{
                                  cursor: !isPast ? "pointer" : "default",
                                  color: !isPast ? "#F2178D" : "#ccc",
                                  backgroundColor:
                                    selectedSlot === `${dateStr} ${time}`
                                      ? "#e0f7fa"
                                      : "transparent",
                                }}
                              >
                                {time}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={handleContinue}
                  disabled={!selectedSlot}
                >
                  Continue
                </Button>
              </>
            )}
            {step === 2 && (
              <>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ p: 2 }}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <Avatar
                          alt={instructor.name || "Instructor"}
                          src={`/path/to/${instructor.name || "default"}.jpg`}
                          sx={{ width: 56, height: 56, mr: 2 }}
                        />
                        <Box>
                          <Typography variant="h6">
                            {instructor.name || "Instructor"}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Verified
                          </Typography>
                        </Box>
                      </Box>
                      <Tabs
                        value={tabValue}
                        onChange={handleDurationChange}
                        variant="fullWidth"
                        indicatorColor="primary"
                        textColor="primary"
                        sx={{ mb: 2 }}
                      >
                        <Tab label={`25 mins - Rs 4122`} />
                        <Tab label={`50 mins - Rs 8160`} />
                      </Tabs>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        gutterBottom
                      >
                        {selectedSlot
                          ? new Date(selectedSlot).toLocaleString("en-US", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                          : "No slot selected"}
                        <br />
                        Time is based on your location
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="body2" gutterBottom>
                        <strong>Your order</strong>
                      </Typography>
                      <Typography variant="body2">
                        {`${duration}-min lesson`}{" "}
                        <span style={{ float: "right" }}>{`Rs ${duration === 25 ? 4038.25 : 8076.5
                          }`}</span>
                        <br />
                        Processing fee{" "}
                        <span style={{ float: "right" }}>Rs 83.55</span>
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="body2">
                        <strong>Total</strong>{" "}
                        <span style={{ float: "right" }}>{`Rs ${duration === 25 ? 4121.8 : 8160.05
                          }`}</span>
                        <br />
                        <span style={{ fontSize: "0.8em", color: "#666" }}>
                          charged as US${duration === 25 ? 14.8 : 29.6}
                        </span>
                      </Typography>
                      {!showPromoCodeField && (
                        <Typography
                          variant="body2"
                          color="primary"
                          onClick={() => setShowPromoCodeField(true)}
                          sx={{
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                        >
                          Have a promo code?
                        </Typography>
                      )}
                      {showPromoCodeField && (
                        <Box sx={{ mt: 2 }}>
                          <TextField
                            label="Promo Code"
                            variant="outlined"
                            fullWidth
                            value={promoCode}
                            onChange={handlePromoCodeChange}
                            sx={{ mb: 2 }}
                          />
                          <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleRedeem}
                          >
                            Redeem
                          </Button>
                        </Box>
                      )}
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      Pay with
                    </Typography>
                    <Elements stripe={stripePromise}>
                      <PaymentForm
                        amount={duration === 25 ? 4121.8 : 8160.05}
                        onPaymentSuccess={handlePaymentSuccess}
                      />
                    </Elements>
                  </Grid>
                </Grid>
              </>
            )}
          </Paper>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ScheduleLessonPopup;
