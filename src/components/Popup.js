import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import OfferPoster from "../assets/offer_poster.jpg";

const Popup = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent background={"transparent"}>
          <ModalBody padding={0}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                  },
                },
              }}
            >
              <Box>
                <ModalCloseButton
                  color={"#fff"}
                  background={"#0e0b16"}
                  margin={"-1.5rem -2rem"}
                />
                <Image
                  src={OfferPoster}
                  alt="Offer Image"
                  width={600}
                  height={400}
                />
              </Box>
            </motion.div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Popup;
