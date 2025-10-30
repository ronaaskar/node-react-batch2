import TableVitae from './components/TableVitae';

export default function App() {
  const dataVite = [
    { id: 1, title: 'Warkop DKI', categories: 'Komedi', tahun: 2000 },
    { id: 2, title: 'Iron Man', categories: 'Thriller', tahun: 2022 },
    { id: 3, title: 'Oshin', categories: 'Drama', tahun: 1991 },
    { id: 4, title: 'Saur Sepuh', categories: 'Sejarah', tahun: 1991 },
    { id: 5, title: 'Superman', categories: 'Action', tahun: 2021 },
    { id: 6, title: 'Mission Impossible', categories: 'Action', tahun: 1991 },
    { id: 7, title: 'Kuntilanak', categories: 'Horor', tahun: 2022 },
    { id: 8, title: 'Mr.Bean', categories: 'Komedi', tahun: 2024 },

    ];

  return (
    <div className="App">
      <h1>Daftar Vitae</h1>
      <TableVitae data={dataVitae} />
    </div>
  );
}
