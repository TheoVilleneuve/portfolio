import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

export default function CollectionsMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "10vw",
      }}
    >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <p
          style={{
            color: "white",
          }}
        >
          Collections
        </p>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link href="/tauromaquia">
          <MenuItem onClick={handleClose}>
            <p>Tauromaquia</p>
          </MenuItem>
        </Link>
        <Link href="/clan">
          <MenuItem onClick={handleClose}>
            <p>Clan émergent</p>
          </MenuItem>
        </Link>
        <Link href="/gardians">
          <MenuItem onClick={handleClose}>
            <p>Gardians</p>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
