"use client";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import Logo from "../assets/logo.png";

const Links = [
  { linkName: "Home", to: "header" },
  { linkName: "Programs", to: "programs" },
  { linkName: "Why us", to: "reasons" },
  { linkName: "Plans", to: "plans" },
  { linkName: "Contact Us", to: "footer" },
];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        px={4}
        color={"#fff"}
        width={"100%"}
        margin={"0 auto"}
        borderRadius={"15px"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <MdClose /> : <RxHamburgerMenu />}
            aria-label={"Open Menu"}
            display={["flex", "flex", "none", "none"]}
            onClick={isOpen ? onClose : onOpen}
            order={2}
            fontSize={"2rem"}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Box width={"10rem"} marginTop={"2rem"}>
              <Image src={Logo} alt="" className="logo" />
            </Box>
            <HStack
              as={"nav"}
              spacing={[4, 4, 20, 20]}
              display={{ base: "none", md: "flex" }}
              cursor={"pointer"}
            >
              {Links.map((link) => (
                <Link to={link.to} spy={true} smooth={true}>
                  {link.linkName}
                </Link>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} marginTop={"1rem"}>
            <Stack as={"nav"} spacing={4} alignItems={"center"}>
              {Links.map((link) => (
                <Link to={link.to} spy={true} smooth={true} onClick={onClose}>
                  {link.linkName}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
