import Form from "./_components/Form";
import Data from "./_components/Data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-28">
      <Form />
      <Data /> 
    </main>
  );
}
