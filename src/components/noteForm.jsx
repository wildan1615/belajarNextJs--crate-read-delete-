"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const NoteForm = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [nim, setNim] = useState("");

  async function handleCreateData(e) {
    e.preventDefault;
    const url = "https://v1.appbackend.io/v1/rows/QzxTQ0Fol38O";
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ name, jurusan, nim }]),
    });

    setNim("");
    setName("");
    setJurusan("");
    router.refresh();
  }

  return (
    <div>
      <label htmlFor="nim">Nim</label>
      <input
        type="number"
        name="nim"
        id="nim"
        value={nim}
        onChange={(e) => setNim(e.target.value)}
      />
      <label htmlFor="nama">Nama</label>
      <input
        type="text"
        name="nama"
        id="nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="jurusan">Jurusan</label>
      <input
        type="text"
        name="jurusan"
        id="jurusan"
        value={jurusan}
        onChange={(e) => setJurusan(e.target.value)}
      />
      <button onClick={handleCreateData}>Simpan</button>
    </div>
  );
};
