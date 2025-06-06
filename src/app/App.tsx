import React, { Suspense } from 'react';
import { Box, Flex, Skeleton } from '@chakra-ui/react';
import { Header } from '@/features/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AboutMe = React.lazy(() => import('mfeAboutMe/AboutMe'));
const ToDoList = React.lazy(() => import('mfeToDoList/ToDoList'));

export const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Flex direction="column" alignItems="center">
        <Header />
        <Suspense fallback={<Skeleton height="100vh" width="700px" />}>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/todos" element={<ToDoList />} />
            <Route path="/wallet" element={<Box>Wallet Page (Coming Soon)</Box>} />
            <Route path="/workers" element={<Box>Web Workers Page (Coming Soon)</Box>} />
          </Routes>
        </Suspense>
      </Flex>
    </BrowserRouter>
  );
};
