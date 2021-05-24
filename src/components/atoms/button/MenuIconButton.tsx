import React, { memo, VFC } from "react";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
    onOpen : () => void
}

const MenuIconButton: VFC<Props> = memo((props) => {
    const {onOpen} = props;
    
  return (
    <IconButton
      onClick={onOpen}
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
    />
  );
});

export default MenuIconButton;
