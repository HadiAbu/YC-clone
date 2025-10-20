async function page() {
  const response = await fetch("http://localhost:3000/api/books");
  const data = await response.json();
  console.log("Fetched books data:", data);
  return <div>API Books Page</div>;
}
export default page;
