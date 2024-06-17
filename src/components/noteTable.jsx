"use client";

import { useRouter } from "next/navigation";

export const NoteTable = ({ item }) => {
  const router = useRouter();

  async function handleDeleteData() {
    const url = "https://v1.appbackend.io/v1/rows/QzxTQ0Fol38O";
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item._id]),
    });
    router.refresh();
  }

  return (
    <tr key={item._id} className="text-center">
      <td>{item.nim}</td>
      <td>{item.name}</td>
      <td>{item.jurusan}</td>
      <td>
        <button onClick={handleDeleteData}>Hapus</button>
      </td>
    </tr>
  );
};
