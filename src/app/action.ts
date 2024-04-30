"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function getData() {
  return (await axios.get(`${process.env.API_URI}/`)).data;
}

export async function upData(data: FormData) {
  const time = new Date();
  const title = data.get("title") as string;
  await axios.post(`${process.env.API_URI}/`, { time: time, title: title });
  revalidatePath("/");
}
