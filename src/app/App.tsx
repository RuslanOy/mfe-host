import React, { Suspense } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Header } from '@/features/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MySkeleton } from '@/shared/ui/Skeleton';
import { Footer } from '@/features/Footer';

const AboutMe = React.lazy(() => import('mfeAboutMe/AboutMe'));
const ToDoList = React.lazy(() => import('mfeToDoList/ToDoList'));
const Crypto = React.lazy(() => import('@/pages/Crypto').then(module => ({ default: module.Crypto })));

export const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Flex direction="column" alignItems="center" justifyContent="space-between" minHeight="100vh">
        <Header />
        <Suspense fallback={<MySkeleton />}>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/todos" element={<ToDoList />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/workers" element={<Box>Web Workers Page (Coming Soon)</Box>} />
          </Routes>
        </Suspense>
        <Footer />
      </Flex>
    </BrowserRouter>
  );
};
