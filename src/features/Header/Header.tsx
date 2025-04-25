import React from 'react';
import { ColorModeButton } from '@/shared/chakra/ui/color-mode';
import {
  Center,
  Container,
  Flex,
  IconButton,
  Menu,
  Portal,
  Stack,
  Text,
} from '@chakra-ui/react';
import { LuAlignJustify } from 'react-icons/lu';
import { headerLinks } from './constants';

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
            <Text
              key={link}
              alignItems="center"
              placeContent="center"
              fontSize="2xl"
            >
              {link}
            </Text>
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
                    <Menu.Item
                      placeContent="center"
                      key={link}
                      value={link}
                      fontSize="medium"
                    >
                      {link}
                    </Menu.Item>
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
