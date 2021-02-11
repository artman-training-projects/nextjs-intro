import Link from "next/link";

export default function Notes() {
  const notes = new Array(15)
    .fill("")
    .map((e, i) => ({ id: i, title: `Notes: ${i}` }));

  return (
    <div>
      <h1>Notes</h1>

      {notes.map((note) => (
        <div>
          <Link key={notes.id} href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
