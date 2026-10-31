import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  IconButton,
  Grid,
  Alert,
  Snackbar,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

const EventRegistrationForm = ({ open, onClose, eventTitle }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    yearOfStudy: "",
    branch: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.college.trim()) {
      newErrors.college = "College name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      setShowSuccess(true);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        college: "",
        yearOfStudy: "",
        branch: "",
      });

      setTimeout(() => {
        onClose();
      }, 1500);
    }
  };

  const handleClose = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      college: "",
      yearOfStudy: "",
      branch: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: "#11141C",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 140, 0, 0.3)",
            borderRadius: "20px",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8)",
            p: 1,
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: 2,
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                color: "#F8FAFC",
                mb: 0.5,
                fontSize: "1.3rem",
              }}
            >
              Event Registration
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#FF8C00",
                fontWeight: 600,
              }}
            >
              {eventTitle}
            </Typography>
          </Box>
          <IconButton
            onClick={handleClose}
            sx={{
              color: "#94A3B8",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                color: "#FFFFFF",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ pt: 3 }}>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Grid container spacing={2.5}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={!!errors.fullName}
                  helperText={errors.fullName}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="College/University Name"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  error={!!errors.college}
                  helperText={errors.college}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Year of Study (Optional)"
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleChange}
                  placeholder="e.g., 2nd Year"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Branch (Optional)"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  placeholder="e.g., CSE"
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>

        <DialogActions
          sx={{
            px: 3,
            pb: 3,
            pt: 2,
            gap: 1.5,
          }}
        >
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              borderColor: "rgba(255, 255, 255, 0.2)",
              color: "#CBD5E1",
              fontWeight: 600,
              px: 3,
              borderRadius: "10px",
              "&:hover": {
                borderColor: "#FF8C00",
                backgroundColor: "rgba(255, 140, 0, 0.1)",
                color: "#FF8C00",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #2563EB 0%, #FF8C00 100%)",
              color: "#FFFFFF",
              fontWeight: 700,
              px: 4,
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(255, 140, 0, 0.35)",
              "&:hover": {
                background: "linear-gradient(135deg, #1D4ED8 0%, #EA580C 100%)",
                boxShadow: "0 6px 20px rgba(255, 140, 0, 0.5)",
              },
            }}
          >
            Submit Registration
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{
            width: "100%",
            backgroundColor: "#FF8C00",
            color: "#FFFFFF",
            fontWeight: 600,
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          }}
        >
          Registration successful! We'll contact you soon.
        </Alert>
      </Snackbar>
    </>
  );
};

export default EventRegistrationForm;
