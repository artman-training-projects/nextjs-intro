import Link from "next/link";
import { Box, Container } from "@material-ui/core";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <Container maxWidth="md" component="header" className={styles.container}>
      <Box display="flex" component="nav">
        <Link href="/">Note App</Link>
        <Link href="/notes">Notes</Link>
      </Box>
    </Container>
  );
}
