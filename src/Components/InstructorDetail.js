import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Avatar,
  Card,
  CardContent,
  Divider
} from "@mui/material";
import { ScheduleLessonPopup, Navbar, Footer } from "./";

const InstructorDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const instructor = location.state || {};

  const [popupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    if (Object.keys(instructor).length === 0) {
      navigate("/instructor-listing"); // Redirect to the main page if instructor data is not available
    } else {
      setPopupOpen(true);
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Box textAlign="center" mb={4}>
          <Avatar
            alt={instructor.name}
            src={instructor.image}
            sx={{ width: 100, height: 100, margin: "0 auto" }}
          />
          <Typography variant="h4" mt={2}>
            {instructor.name || "Instructor Name"}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {instructor.experience || "Experience not available"}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenPopup}
            sx={{ mt: 2 }}
          >
            Schedule a lesson
          </Button>
        </Box>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" align="center">
                  {instructor.students || 0}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  Students
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" align="center">
                  {instructor.courses || 0}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  Courses
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" align="center">
                  {instructor.rating || 0} ★
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  Rating
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardContent>
                <Typography variant="h6">About me</Typography>
                <Typography variant="body1" gutterBottom>
                  {instructor.bio || "Bio not available"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardContent>
                <Typography variant="h6">Skills</Typography>
                <Typography variant="body1" gutterBottom>
                  {(instructor.skills && instructor.skills.join(", ")) ||
                    "Skills not available"}
                </Typography>
                <Typography variant="h6">Experience</Typography>
                <Typography variant="body1">
                  {instructor.experience || "Experience not available"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Card sx={{ display: "inline-block", maxWidth: "800px" }}>
            <CardContent>
              <Typography variant="h6">Intro Video</Typography>
              <Box mt={2}>
                <video width="100%" controls>
                  <source src={instructor.videoUrl || ""} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box mt={4}>
          <Typography variant="h6">Reviews</Typography>
          {instructor.reviews && instructor.reviews.length > 0 ? (
            instructor.reviews.map((review, index) => (
              <Box key={index} mt={2} mb={2}>
                <Divider />
                <Typography variant="body1" gutterBottom>
                  <strong>{review.name}</strong> - {review.date}
                </Typography>
                <Typography variant="body2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} style={{ color: "#F2B417" }}>
                      ★
                    </span>
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <span key={i} style={{ color: "#ccc" }}>
                      ★
                    </span>
                  ))}
                </Typography>
                <Typography variant="body2">{review.comment}</Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body1" color="textSecondary">
              No reviews available
            </Typography>
          )}
        </Box>
        <ScheduleLessonPopup
          open={popupOpen}
          handleClose={handleClosePopup}
          availableHours={instructor.availableHours || []}
          instructor={instructor}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default InstructorDetail;
