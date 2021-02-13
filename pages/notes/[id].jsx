import { useRouter } from "next/router";
import { Container } from "@material-ui/core";

export default function Note() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container maxWidth={"md"}>
      <h1>Note: {id}</h1>
    </Container>
  );
}
