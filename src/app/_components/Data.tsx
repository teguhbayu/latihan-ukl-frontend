import { getData } from "../action";
import { title } from "@/types/data.types";

const seeder = [
  {
    time: "76767867867",
    judul: "tod",
  },
  {
    time: "32832982",
    judul: "makan",
  },
  {
    time: "87328392372",
    judul: "siah suka blud",
  },
  {
    time: "809832980984",
    judul: "kjalkjlkass",
  },
  {
    time: "2098809280982",
    judul: "aosjkasjjas",
  },
  {
    time: "298882098928932",
    judul: "aksjkajskjsa",
  },
];

export default async function Data() {
  const datas = (await getData()) as title[];
  const sorted = datas.sort(function (a, b) {
    let x = a.time;
    let y = b.time;
    if (x > y) {
      return 1;
    }
    if (x < y) {
      return -1;
    }
    return 0;
  });

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="font-semibold text-[24px]">DATA</h2>
      <div className="w-[200px] h-[150px] overflow-y-scroll">
        <div className="flex flex-col gap-2">
          {sorted.reverse().map((data) => (
            <p>{data.judul}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
