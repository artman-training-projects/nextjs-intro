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

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`http://localhost:3000/api/note/${params.id}`);

  if (!response.ok) {
    res.writeHead(302, { Location: "/notes" });
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();

  if (data) {
    return {
      props: { note: data },
    };
  }
}
