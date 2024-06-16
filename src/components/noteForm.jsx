import { Button } from "./button";

export const NoteForm = () => {
  return (
    <div>
      <label htmlFor="nama">Nama</label>
      <input type="text" name="nama" id="nama" />
      <label htmlFor="jurusan">Jurusan</label>
      <input type="text" name="jurusan" id="jurusan" />
      <Button>
        <div>Submit</div>
      </Button>
    </div>
  );
};
