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
import { useTheme } from "../contexts/ThemeContext";

const EventRegistrationForm = ({ open, onClose, eventTitle }) => {
    const { mode } = useTheme();
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
        // Clear error for this field when user starts typing
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
            // Here you would typically send the data to your backend
            console.log("Form submitted:", formData);

            // Show success message
            setShowSuccess(true);

            // Reset form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                college: "",
                yearOfStudy: "",
                branch: "",
            });

            // Close dialog after a short delay
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
                        background:
                            mode === "dark"
                                ? "linear-gradient(135deg, rgba(26, 27, 28, 0.98) 0%, rgba(18, 19, 20, 0.95) 100%)"
                                : "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(249, 252, 255, 0.95) 100%)",
                        backdropFilter: "blur(20px)",
                        border: `2px solid ${mode === "dark"
                            ? "rgba(93, 253, 203, 0.2)"
                            : "rgba(93, 253, 203, 0.3)"
                            }`,
                        borderRadius: 3,
                        boxShadow:
                            mode === "dark"
                                ? "0 20px 60px rgba(0, 0, 0, 0.5)"
                                : "0 20px 60px rgba(93, 253, 203, 0.2)",
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        pb: 2,
                        borderBottom: `1px solid ${mode === "dark"
                            ? "rgba(93, 253, 203, 0.1)"
                            : "rgba(93, 253, 203, 0.2)"
                            }`,
                    }}
                >
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                color: mode === "dark" ? "#F4FAFF" : "#08090A",
                                mb: 0.5,
                            }}
                        >
                            Event Registration
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#5DFDCB",
                                fontWeight: 600,
                            }}
                        >
                            {eventTitle}
                        </Typography>
                    </Box>
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            color: mode === "dark" ? "#F4FAFF" : "#08090A",
                            "&:hover": {
                                backgroundColor:
                                    mode === "dark"
                                        ? "rgba(93, 253, 203, 0.1)"
                                        : "rgba(93, 253, 203, 0.15)",
                            },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent sx={{ pt: 3 }}>
                    <Box component="form" onSubmit={handleSubmit}>
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
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: mode === "dark" ? "#F4FAFF" : "#08090A",
                                            "& fieldset": {
                                                borderColor:
                                                    mode === "dark"
                                                        ? "rgba(93, 253, 203, 0.3)"
                                                        : "rgba(93, 253, 203, 0.4)",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "#5DFDCB",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#5DFDCB",
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: mode === "dark" ? "#B0B3B8" : "#666",
                                            "&.Mui-focused": {
                                                color: "#5DFDCB",
                                            },
                                        },
                                    }}
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
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: mode === "dark" ? "#F4FAFF" : "#08090A",
                                            "& fieldset": {
                                                borderColor:
                                                    mode === "dark"
                                                        ? "rgba(93, 253, 203, 0.3)"
                                                        : "rgba(93, 253, 203, 0.4)",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "#5DFDCB",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#5DFDCB",
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: mode === "dark" ? "#B0B3B8" : "#666",
                                            "&.Mui-focused": {
                                                color: "#5DFDCB",
                                            },
                                        },
                                    }}
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
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: mode === "dark" ? "#F4FAFF" : "#08090A",
                                            "& fieldset": {
                                                borderColor:
                                                    mode === "dark"
                                                        ? "rgba(93, 253, 203, 0.3)"
                                                        : "rgba(93, 253, 203, 0.4)",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "#5DFDCB",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#5DFDCB",
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: mode === "dark" ? "#B0B3B8" : "#666",
                                            "&.Mui-focused": {
                                                color: "#5DFDCB",
                                            },
                                        },
                                    }}
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
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: mode === "dark" ? "#F4FAFF" : "#08090A",
                                            "& fieldset": {
                                                borderColor:
                                                    mode === "dark"
                                                        ? "rgba(93, 253, 203, 0.3)"
                                                        : "rgba(93, 253, 203, 0.4)",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "#5DFDCB",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#5DFDCB",
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: mode === "dark" ? "#B0B3B8" : "#666",
                                            "&.Mui-focused": {
                                                color: "#5DFDCB",
                                            },
                                        },
                                    }}
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
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: mode === "dark" ? "#F4FAFF" : "#08090A",
                                            "& fieldset": {
                                                borderColor:
                                                    mode === "dark"
                                                        ? "rgba(93, 253, 203, 0.3)"
                                                        : "rgba(93, 253, 203, 0.4)",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "#5DFDCB",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#5DFDCB",
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: mode === "dark" ? "#B0B3B8" : "#666",
                                            "&.Mui-focused": {
                                                color: "#5DFDCB",
                                            },
                                        },
                                    }}
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
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: mode === "dark" ? "#F4FAFF" : "#08090A",
                                            "& fieldset": {
                                                borderColor:
                                                    mode === "dark"
                                                        ? "rgba(93, 253, 203, 0.3)"
                                                        : "rgba(93, 253, 203, 0.4)",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "#5DFDCB",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#5DFDCB",
                                            },
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: mode === "dark" ? "#B0B3B8" : "#666",
                                            "&.Mui-focused": {
                                                color: "#5DFDCB",
                                            },
                                        },
                                    }}
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
                        gap: 2,
                    }}
                >
                    <Button
                        onClick={handleClose}
                        variant="outlined"
                        sx={{
                            borderColor:
                                mode === "dark"
                                    ? "rgba(93, 253, 203, 0.3)"
                                    : "rgba(93, 253, 203, 0.5)",
                            color: mode === "dark" ? "#F4FAFF" : "#08090A",
                            fontWeight: 600,
                            px: 3,
                            "&:hover": {
                                borderColor: "#5DFDCB",
                                backgroundColor:
                                    mode === "dark"
                                        ? "rgba(93, 253, 203, 0.1)"
                                        : "rgba(93, 253, 203, 0.15)",
                            },
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        sx={{
                            background: "linear-gradient(135deg, #5DFDCB 0%, #4AE3B2 100%)",
                            color: "#08090A",
                            fontWeight: 700,
                            px: 4,
                            boxShadow: "0 4px 14px rgba(93, 253, 203, 0.3)",
                            "&:hover": {
                                background: "linear-gradient(135deg, #4AE3B2 0%, #5DFDCB 100%)",
                                boxShadow: "0 6px 20px rgba(93, 253, 203, 0.4)",
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
                        backgroundColor: "#5DFDCB",
                        color: "#08090A",
                        fontWeight: 600,
                        "& .MuiAlert-icon": {
                            color: "#08090A",
                        },
                    }}
                >
                    Registration successful! We'll contact you soon.
                </Alert>
            </Snackbar>
        </>
    );
};

export default EventRegistrationForm;
