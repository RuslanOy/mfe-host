import React from 'react';
import { ColorModeButton } from '@/shared/chakra/ui/color-mode';
import { Center, Container, Flex, IconButton, Menu, Portal, Stack, Text } from '@chakra-ui/react';
import { LuAlignJustify } from 'react-icons/lu';
import { headerLinks } from './constants';
import { Link } from 'react-router-dom';

export const Header = (): React.ReactElement => {
  return (
    <Container paddingBlock="1rem">
      <Flex
        direction="row"
        justifyContent={{ base: 'space-between', md: 'space-evenly' }}
        alignItems="center"
      >
        <Stack direction="row" gap="5" display={{ base: 'none', md: 'flex' }}>
          {headerLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              <Text
                alignItems="center"
                placeContent="center"
                fontSize="2xl"
                _hover={{ color: 'blue.500' }}
              >
                {link.label}
              </Text>
            </Link>
          ))}
        </Stack>

        <ColorModeButton />

        <Center display={{ base: 'flex', md: 'none' }}>
          <Menu.Root>
            <Menu.Trigger asChild>
              <IconButton aria-label="Open Navigation">
                <LuAlignJustify color="border.emphasized" />
              </IconButton>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  {headerLinks.map((link) => (
                    <Link key={link.path} to={link.path}>
                      <Menu.Item placeContent="center" value={link.path} fontSize="medium">
                        {link.label}
                      </Menu.Item>
                    </Link>
                  ))}
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Center>
      </Flex>
    </Container>
  );
};
