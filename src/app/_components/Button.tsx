import { useFormStatus } from "react-dom";

export default function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${
        pending ? "bg-[#595959]" : "bg-[#ff6060]"
      } text-white py-3 px-6 rounded-3xl transition-all duration-500 hover:bg-[#ff7e7e]`}
    >
      {pending ? "Loading..." : "Submit!"}
    </button>
  );
}
