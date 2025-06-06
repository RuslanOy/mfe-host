import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Container, Flex, Icon, Link, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { FaTelegramPlane } from 'react-icons/fa';

export const Footer = (): React.ReactElement => {
  const location = useLocation();

  const currentModule = Texts.find((text) => text.route === location.pathname) || Texts[0];

  return (
    <Container as="footer" py={{ base: '6', md: '8' }} maxWidth="700px">
      <Flex direction="row" justify="space-between" align="center">
        <Text textStyle={{ base: 'lg', md: 'xl' }}>
          Each page is an independent module. You can view this module separately{' '}
          <Link
            href={currentModule.link}
            color="bg.inverted"
            textDecoration="underline"
            target="_blank"
          >
            here
          </Link>
          .
        </Text>
        <Flex direction="column" justify="space-between" align="center" gap="3">
          {socialLinks.map(({ href, icon }, index) => (
            <Link key={index} href={href} colorPalette="gray" target="_blank">
              <Icon size="md">{icon}</Icon>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

const Texts = [
  {
    link: 'https://mfe-about-me.vercel.app/',
    route: '/',
  },
  {
    link: 'https://mfe-todolist.vercel.app/',
    route: '/todos',
  },
  {
    link: 'https://mfe-crypto.vercel.app/',
    route: '/crypto',
  },
];

const socialLinks = [
  { href: 'https://t.me/ruslanoyun', icon: <FaTelegramPlane /> },
  { href: 'https://github.com/RuslanOy', icon: <SiGithub /> },
  { href: 'https://www.linkedin.com/in/ruslanoyun/', icon: <SiLinkedin /> },
];
