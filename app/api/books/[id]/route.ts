import books from "../../db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const bookId = parseInt(params.id, 10);
  const book = books.find((b) => b.id === bookId);

  if (book) {
    return new Response(JSON.stringify(book), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  }

  return new Response(JSON.stringify({ message: "Book not found" }), {
    headers: { "Content-Type": "application/json" },
    status: 404,
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const bookId = parseInt(params.id, 10);
  const bookIndex = books.findIndex((b) => b.id === bookId);
  if (bookIndex !== -1) {
    const deletedBook = books.splice(bookIndex, 1)[0];
    return new Response(JSON.stringify(deletedBook), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  }
  return new Response(JSON.stringify({ message: "Book not found" }), {
    headers: { "Content-Type": "application/json" },
    status: 404,
  });
}
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const bookId = parseInt(params.id, 10);
  const updatedData = await request.json();
  const bookIndex = books.findIndex((b) => b.id === bookId);
  if (bookIndex !== -1) {
    books[bookIndex] = { ...books[bookIndex], ...updatedData };
    return new Response(JSON.stringify(books[bookIndex]), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  }
  return new Response(JSON.stringify({ message: "Book not found" }), {
    headers: { "Content-Type": "application/json" },
    status: 404,
  });
}
