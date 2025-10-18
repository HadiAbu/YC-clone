import Hello from "./components/hello";

export default function Home() {
  console.log("Home page rendered");
  return (
    <>
      <h1 className="text-3xl">Welcome to My Next.js App</h1>
      <Hello />
    </>
  );
}
