import Link from "next/link";
import { Paper, Container, Grid } from "@material-ui/core";
import styles from "./notes.module.css";

export default function Notes() {
  const notes = new Array(15)
    .fill("")
    .map((e, i) => ({ id: i, title: `This is my note ${i}` }));

  return (
    <Container maxWidth={"md"}>
      <h1>My Notes</h1>

      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid key={note.id} item xs={12} sm={6} md={4}>
            <Paper className={styles.paper} variant={"outlined"}>
              <Link href="/notes/[id]" as={`/notes/${note.id}`}>
                {note.title}
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
