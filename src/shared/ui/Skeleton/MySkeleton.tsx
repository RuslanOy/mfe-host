import { Box, Grid } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import React from 'react';

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

const SkeletonBox = ({ gridArea }: { gridArea: string }) => (
  <Box
    gridArea={gridArea}
    bg="gray.200"
    borderRadius="md"
    animation={`${pulse} 2s infinite ease-in-out`}
  />
);

export const MySkeleton = (): React.ReactElement => {
  return (
    <Grid
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      gridAutoRows="100px"
      gap="4"
      width="100%"
      maxWidth="732px"
      margin="0 auto"
      padding="16px"
    >
      <SkeletonBox gridArea="1 / 1 / 3 / 4" />
      <SkeletonBox gridArea="3 / 1 / 5 / 2" />
      <SkeletonBox gridArea="3 / 2 / 4 / 3" />
      <SkeletonBox gridArea="3 / 3 / 4 / 4" />
      <SkeletonBox gridArea="4 / 2 / 5 / 4" />
    </Grid>
  );
};
