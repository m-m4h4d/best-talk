// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Avatar,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Container,
// } from "@mui/material";
// import { useLocation, useNavigate } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";
// import ScheduleLessonPopup from "./ScheduleLessonPopup";

// const InstructorDetail = ({ location }) => {
//   const instructor = location.state || {}; // Ensure instructor data is retrieved from location.state
//   const navigate = useNavigate();
//   const state = location.state;

//   if (!state) {
//     navigate("/");
//     return null;
//   }

//   const {
//     name,
//     age,
//     gender,
//     country,
//     rating,
//     students,
//     courses,
//     skills,
//     experience,
//     bio,
//     videoUrl,
//     reviews,
//     availableHours,
//   } = state;

//   const [popupOpen, setPopupOpen] = useState(false);

//   const handleOpenPopup = () => {
//     setPopupOpen(true);
//   };

//   const handleClosePopup = () => {
//     setPopupOpen(false);
//   };

//   return (
//     <Container>
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         mt={4}
//         mb={4}
//       >
//         <Avatar
//           alt={name}
//           src={`/path/to/image/${name}.png`}
//           sx={{ width: 120, height: 120, mb: 2 }}
//         />
//         <Typography variant="h5">{name}</Typography>
//         <Typography variant="body2" color="textSecondary">
//           Software Engineer, University of California, Berkeley
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ my: 2 }}
//           onClick={handleOpenPopup}
//         >
//           Schedule a lesson
//         </Button>
//       </Box>
//       <Box p={2}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={4}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" align="center">
//                   {students}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="textSecondary"
//                   align="center"
//                 >
//                   Students
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" align="center">
//                   {courses}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="textSecondary"
//                   align="center"
//                 >
//                   Courses
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" align="center">
//                   {rating}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="textSecondary"
//                   align="center"
//                 >
//                   Rating
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//         <Grid container spacing={2} mt={2}>
//           <Grid item xs={12} md={6}>
//             <Typography variant="h6">About me</Typography>
//             <Typography variant="body2">{bio}</Typography>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Typography variant="h6">Skills</Typography>
//             <Typography variant="body2">{skills.join(", ")}</Typography>
//           </Grid>
//           <Grid item xs={12}>
//             <Typography variant="h6">Experience</Typography>
//             <Typography variant="body2">{experience}</Typography>
//           </Grid>
//         </Grid>
//         <Grid container spacing={2} mt={2}>
//           <Grid item xs={12}>
//             <Typography variant="h6">Intro Video</Typography>
//             <Card>
//               <CardMedia
//                 component="video"
//                 controls
//                 src={videoUrl}
//                 title="Intro Video"
//                 sx={{ maxHeight: 500 }}
//               />
//             </Card>
//           </Grid>
//         </Grid>
//         <Grid container spacing={2} mt={2}>
//           <Grid item xs={12}>
//             <Typography variant="h6">Reviews</Typography>
//             {reviews.map((review, index) => (
//               <Card key={index} sx={{ mb: 2 }}>
//                 <CardContent>
//                   <Box display="flex" alignItems="center">
//                     <Avatar
//                       alt={review.name}
//                       src={`/path/to/image/${review.name}.png`}
//                       sx={{ width: 40, height: 40, mr: 2 }}
//                     />
//                     <Box>
//                       <Typography variant="body1">{review.name}</Typography>
//                       <Typography variant="body2" color="textSecondary">
//                         {review.date}
//                       </Typography>
//                     </Box>
//                   </Box>
//                   <Box display="flex" alignItems="center" mt={1}>
//                     {Array.from({ length: Math.floor(review.rating) }).map(
//                       (_, i) => (
//                         <StarIcon key={i} sx={{ color: "#F2B417" }} />
//                       )
//                     )}
//                   </Box>
//                   <Typography variant="body2" mt={1}>
//                     {review.comment}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             ))}
//           </Grid>
//         </Grid>
//       </Box>
//       <ScheduleLessonPopup
//         open={popupOpen}
//         handleClose={handleClosePopup}
//         availableHours={instructor.availableHours}
//         instructor={instructor}
//       />
//     </Container>
//   );
// };

// export default InstructorDetail;

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   Container,
//   Typography,
//   Box,
//   Button,
//   Grid,
//   Avatar,
//   Card,
//   CardContent,
//   Divider,
// } from "@mui/material";
// import ScheduleLessonPopup from "./ScheduleLessonPopup";

// const InstructorDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const instructor = location.state || {};

//   const [popupOpen, setPopupOpen] = useState(false);

//   const handleOpenPopup = () => {
//     if (Object.keys(instructor).length === 0) {
//       navigate("/"); // Redirect to the main page if instructor data is not available
//     } else {
//       setPopupOpen(true);
//     }
//   };

//   const handleClosePopup = () => {
//     setPopupOpen(false);
//   };

//   return (
//     <Container>
//       <Box textAlign="center" mb={4}>
//         <Avatar
//           alt={instructor.name}
//           src={instructor.image}
//           sx={{ width: 100, height: 100, margin: "0 auto" }}
//         />
//         <Typography variant="h4" mt={2}>
//           {instructor.name}
//         </Typography>
//         <Typography variant="subtitle1" color="textSecondary">
//           {instructor.experience}
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleOpenPopup}
//           sx={{ mt: 2 }}
//         >
//           Schedule a lesson
//         </Button>
//       </Box>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">About me</Typography>
//               <Typography variant="body1" gutterBottom>
//                 {instructor.bio}
//               </Typography>
//               <Typography variant="h6">Skills</Typography>
//               <Typography variant="body1" gutterBottom>
//                 {instructor.skills.join(", ")}
//               </Typography>
//               <Typography variant="h6">Experience</Typography>
//               <Typography variant="body1">{instructor.experience}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Intro Video</Typography>
//               <Box mt={2}>
//                 <video width="100%" controls>
//                   <source src={instructor.videoUrl} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//       <Box mt={4}>
//         <Typography variant="h6">Reviews</Typography>
//         {instructor.reviews.map((review, index) => (
//           <Box key={index} mt={2} mb={2}>
//             <Divider />
//             <Typography variant="body1" gutterBottom>
//               <strong>{review.name}</strong> - {review.date}
//             </Typography>
//             <Typography variant="body2">
//               {Array.from({ length: review.rating }).map((_, i) => (
//                 <span key={i} style={{ color: "#F2B417" }}>
//                   ★
//                 </span>
//               ))}
//               {Array.from({ length: 5 - review.rating }).map((_, i) => (
//                 <span key={i} style={{ color: "#ccc" }}>
//                   ★
//                 </span>
//               ))}
//             </Typography>
//             <Typography variant="body2">{review.comment}</Typography>
//           </Box>
//         ))}
//       </Box>
//       <ScheduleLessonPopup
//         open={popupOpen}
//         handleClose={handleClosePopup}
//         availableHours={instructor.availableHours || []}
//         instructor={instructor}
//       />
//     </Container>
//   );
// };

// export default InstructorDetail;

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   Container,
//   Typography,
//   Box,
//   Button,
//   Grid,
//   Avatar,
//   Card,
//   CardContent,
//   Divider,
// } from "@mui/material";
// import ScheduleLessonPopup from "./ScheduleLessonPopup";

// const InstructorDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const instructor = location.state || {};

//   const [popupOpen, setPopupOpen] = useState(false);

//   const handleOpenPopup = () => {
//     if (Object.keys(instructor).length === 0) {
//       navigate("/"); // Redirect to the main page if instructor data is not available
//     } else {
//       setPopupOpen(true);
//     }
//   };

//   const handleClosePopup = () => {
//     setPopupOpen(false);
//   };

//   return (
//     <Container>
//       <Box textAlign="center" mb={4}>
//         <Avatar
//           alt={instructor.name}
//           src={instructor.image}
//           sx={{ width: 100, height: 100, margin: "0 auto" }}
//         />
//         <Typography variant="h4" mt={2}>
//           {instructor.name || "Instructor Name"}
//         </Typography>
//         <Typography variant="subtitle1" color="textSecondary">
//           {instructor.experience || "Experience not available"}
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleOpenPopup}
//           sx={{ mt: 2 }}
//         >
//           Schedule a lesson
//         </Button>
//       </Box>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">About me</Typography>
//               <Typography variant="body1" gutterBottom>
//                 {instructor.bio || "Bio not available"}
//               </Typography>
//               <Typography variant="h6">Skills</Typography>
//               <Typography variant="body1" gutterBottom>
//                 {(instructor.skills && instructor.skills.join(", ")) ||
//                   "Skills not available"}
//               </Typography>
//               <Typography variant="h6">Experience</Typography>
//               <Typography variant="body1">
//                 {instructor.experience || "Experience not available"}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Intro Video</Typography>
//               <Box mt={2}>
//                 <video width="100%" controls>
//                   <source src={instructor.videoUrl || ""} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//       <Box mt={4}>
//         <Typography variant="h6">Reviews</Typography>
//         {instructor.reviews && instructor.reviews.length > 0 ? (
//           instructor.reviews.map((review, index) => (
//             <Box key={index} mt={2} mb={2}>
//               <Divider />
//               <Typography variant="body1" gutterBottom>
//                 <strong>{review.name}</strong> - {review.date}
//               </Typography>
//               <Typography variant="body2">
//                 {Array.from({ length: review.rating }).map((_, i) => (
//                   <span key={i} style={{ color: "#F2B417" }}>
//                     ★
//                   </span>
//                 ))}
//                 {Array.from({ length: 5 - review.rating }).map((_, i) => (
//                   <span key={i} style={{ color: "#ccc" }}>
//                     ★
//                   </span>
//                 ))}
//               </Typography>
//               <Typography variant="body2">{review.comment}</Typography>
//             </Box>
//           ))
//         ) : (
//           <Typography variant="body1" color="textSecondary">
//             No reviews available
//           </Typography>
//         )}
//       </Box>
//       <ScheduleLessonPopup
//         open={popupOpen}
//         handleClose={handleClosePopup}
//         availableHours={instructor.availableHours || []}
//         instructor={instructor}
//       />
//     </Container>
//   );
// };

// export default InstructorDetail;

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   Container,
//   Typography,
//   Box,
//   Button,
//   Grid,
//   Avatar,
//   Card,
//   CardContent,
//   Divider,
// } from "@mui/material";
// import ScheduleLessonPopup from "./ScheduleLessonPopup";

// const InstructorDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const instructor = location.state || {};

//   const [popupOpen, setPopupOpen] = useState(false);

//   const handleOpenPopup = () => {
//     if (Object.keys(instructor).length === 0) {
//       navigate("/"); // Redirect to the main page if instructor data is not available
//     } else {
//       setPopupOpen(true);
//     }
//   };

//   const handleClosePopup = () => {
//     setPopupOpen(false);
//   };

//   return (
//     <Container>
//       <Box textAlign="center" mb={4}>
//         <Avatar
//           alt={instructor.name}
//           src={instructor.image}
//           sx={{ width: 100, height: 100, margin: "0 auto" }}
//         />
//         <Typography variant="h4" mt={2}>
//           {instructor.name || "Instructor Name"}
//         </Typography>
//         <Typography variant="subtitle1" color="textSecondary">
//           {instructor.experience || "Experience not available"}
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleOpenPopup}
//           sx={{ mt: 2 }}
//         >
//           Schedule a lesson
//         </Button>
//       </Box>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">About me</Typography>
//               <Typography variant="body1" gutterBottom>
//                 {instructor.bio || "Bio not available"}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Skills</Typography>
//               <Typography variant="body1" gutterBottom>
//                 {(instructor.skills && instructor.skills.join(", ")) ||
//                   "Skills not available"}
//               </Typography>
//               <Typography variant="h6">Experience</Typography>
//               <Typography variant="body1">
//                 {instructor.experience || "Experience not available"}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//       <Box mt={4} textAlign="center">
//         <Card sx={{ display: "inline-block", maxWidth: "800px" }}>
//           <CardContent>
//             <Typography variant="h6">Intro Video</Typography>
//             <Box mt={2}>
//               <video width="100%" controls>
//                 <source src={instructor.videoUrl || ""} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </Box>
//           </CardContent>
//         </Card>
//       </Box>
//       <Box mt={4}>
//         <Typography variant="h6">Reviews</Typography>
//         {instructor.reviews && instructor.reviews.length > 0 ? (
//           instructor.reviews.map((review, index) => (
//             <Box key={index} mt={2} mb={2}>
//               <Divider />
//               <Typography variant="body1" gutterBottom>
//                 <strong>{review.name}</strong> - {review.date}
//               </Typography>
//               <Typography variant="body2">
//                 {Array.from({ length: review.rating }).map((_, i) => (
//                   <span key={i} style={{ color: "#F2B417" }}>
//                     ★
//                   </span>
//                 ))}
//                 {Array.from({ length: 5 - review.rating }).map((_, i) => (
//                   <span key={i} style={{ color: "#ccc" }}>
//                     ★
//                   </span>
//                 ))}
//               </Typography>
//               <Typography variant="body2">{review.comment}</Typography>
//             </Box>
//           ))
//         ) : (
//           <Typography variant="body1" color="textSecondary">
//             No reviews available
//           </Typography>
//         )}
//       </Box>
//       <ScheduleLessonPopup
//         open={popupOpen}
//         handleClose={handleClosePopup}
//         availableHours={instructor.availableHours || []}
//         instructor={instructor}
//       />
//     </Container>
//   );
// };

// export default InstructorDetail;

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
import ScheduleLessonPopup from "./ScheduleLessonPopup";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
          <Grid item xs={12} md={4}>
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
          <Grid item xs={12} md={4}>
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
          <Grid item xs={12} md={4}>
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
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">About me</Typography>
                <Typography variant="body1" gutterBottom>
                  {instructor.bio || "Bio not available"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
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
