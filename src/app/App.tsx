import React, { Suspense } from 'react';
import { Box, Flex, Skeleton } from '@chakra-ui/react';
import { Header } from '@/features/Header';

const AboutMe = React.lazy(() => import('mfeAboutMe/AboutMe'));

export const App = (): React.ReactElement => {
  return (
    <Flex direction="column" alignItems="center">
      <Header />
      <Box maxWidth="1000px">
        <Suspense fallback={<Skeleton height="200px" />}>
          <AboutMe />
        </Suspense>
      </Box>
    </Flex>
  );
};
