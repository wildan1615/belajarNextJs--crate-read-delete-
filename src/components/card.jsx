export const Card = ({ nama, usia, gender }) => {
  if (gender === "Male") {
    return (
      <main className="bg-blue-200 text-blue-600 p-5 font-semibold">
        <div>Nama: {nama}</div>
        <div>Usia: {usia}</div>
        <div>Gender: {gender}</div>
      </main>
    );
  }

  return (
    <main className="bg-rose-200 text-rose-600 p-5 font-semibold">
      <div>Nama: {nama}</div>
      <div>Usia: {usia}</div>
      <div>Gender: {gender}</div>
    </main>
  );
};
