"use client";
import Button from "./Button";
import { upData } from "../action";

export default async function Form() {
  return (
    <form
      action={upData}
      className="bg-[#e2e8ff] rounded-3xl w-[400px] px-[20px] py-[18px] flex flex-col justify-center items-center gap-3"
    >
      <h1 className="text-[20px] font-bold">INPUT BUKU</h1>
      <div className="flex flex-col">
        <label htmlFor="Judul">Judul Buku</label>
        <input
          type="text"
          className="rounded-2xl w-[200px] h-[40px] p-2"
          id="Judul"
          name="title"
        />
      </div>
      <Button />
    </form>
  );
}
