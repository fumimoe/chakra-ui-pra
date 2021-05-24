import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import React, { memo, VFC } from "react";
import MenuIconButton from '../../atoms/button/MenuIconButton'


const Header: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    // baseを指定することで基本サイズ、mdをしているすることでこれ以上のサイズの時は大きさを変えることができる
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" mr={4} _hover={{ cursor: "pointer" }} as="a">
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        {/*display={{base:"none", md:"flex"}}とすることでスマホサイズは表示なし、md以上の時は表示することができる  */}
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link>ユーザー一覧</Link>
          </Box>
          <Link>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen}/>
      </Flex>

      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" mb={2}>TOP</Button>
            <Button w="100%" mb={2}>ユーザー一覧</Button>
            <Button w="100%" mb={2}>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
});

export default Header;
