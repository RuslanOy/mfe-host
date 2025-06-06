import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Header } from '@/features/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';

const AboutMe = React.lazy(() => import('mfeAboutMe/AboutMe'));
const ToDoList = React.lazy(() => import('mfeToDoList/ToDoList'));

export const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Flex direction="column" alignItems="center">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/todos" element={<ToDoList />} />
          <Route path="/wallet" element={<Box>Wallet Page (Coming Soon)</Box>} />
          <Route path="/workers" element={<Box>Web Workers Page (Coming Soon)</Box>} />
        </Routes>
      </Flex>
    </BrowserRouter>
  );
};
