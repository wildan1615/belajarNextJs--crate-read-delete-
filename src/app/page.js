"use Client";
import { Button } from "@/components/button";
import { DashboardTemplate } from "@/components/dasboard/dasboard.template";
import { NoteForm } from "@/components/noteForm";

export default function Home() {
  return (
    <DashboardTemplate>
      <main className="max-w-2xl py-12 space-y-4 m-auto">
        <NoteForm></NoteForm>
        <h1 className="font-bold text-2xl">Daftar Mahasiswa</h1>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold">Shandika</h3>
            <p className="text-sm text-slate-500">Teknik Informatika</p>
          </div>
        </div>
      </main>
    </DashboardTemplate>
  );
}
