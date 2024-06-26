import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

const Loading = ({ count }) => {
  return (
    <Box sx={{ maxWidth: "1132px", padding: "0 16px", margin: "0 auto" }}>
      <Grid container spacing={2} p={0}>
        {new Array(count).fill("").map((_, index) => (
          <Grid key={index} item lg={4} sx={{ justifySelf: "center" }}>
            <Skeleton variant="rectangular" width={333} height={330} />
            <Skeleton width="90%" />
            <Skeleton width="60%" />
            <Skeleton width="90%" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Loading;
