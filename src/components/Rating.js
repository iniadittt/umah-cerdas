import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function StarRating() {
  const [value] = useState(3.4);

  return (
    <Box>
      <Rating name="half-rating-read" value={value} precision={0.1} readOnly />
    </Box>
  );
}