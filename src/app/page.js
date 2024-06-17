"use Client";

import { DashboardTemplate } from "@/components/dasboard/dasboard.template";
import { NoteForm } from "@/components/noteForm";
import { NoteTable } from "@/components/noteTable";

export default async function Home() {
  const url = "https://v1.appbackend.io/v1/rows/QzxTQ0Fol38O";
  const res = await fetch(url, { cache: "no-store" });
  const { data } = await res.json();
  console.log(data);
  return (
    <DashboardTemplate>
      <main className="max-w-2xl py-5 space-y-4 m-auto">
        <NoteForm></NoteForm>
        <h1 className="font-bold text-2xl">Daftar Mahasiswa</h1>
        <table className="table border border-collapse w-full">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="w-1/4">NIM</th>
              <th className="w-1/4">Nama</th>
              <th className="w-1/4">Jurusan</th>
              <th className="w-1/3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return <NoteTable key={item._id} item={item}></NoteTable>;
            })}
          </tbody>
        </table>
      </main>
    </DashboardTemplate>
  );
}
