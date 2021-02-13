import { Container, Typography } from "@material-ui/core";

export default function Index({ content }) {
  return (
    <Container maxWidth="md">
      <Typography component="h4">{content.title}</Typography>
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {
      content: {
        title: "Look at my note app tho",
      },
    },
  };
}
