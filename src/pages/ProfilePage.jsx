export default function ProfilePage() {
  const profiles = [
    {
      name: "Yosua Kevan Unggul \nBudihardjo",
      nim: "24060123120001",
      kelompok: "21",
      shift: "4",
      photo: "../src/assets/yosua.jpg",
    },
    {
      name: "Faiz Abdul Hanif",
      nim: "24060123120002",
      kelompok: "21",
      shift: "4",
      photo: "src/assets/faiz.jpg",
    },
    {
      name: "Raihan Sahaja",
      nim: "24060123120003",
      kelompok: "21",
      shift: "4",
      photo: "src/assets/Raihan.jpg",
    },
    {
      name: "M. Adnan Abdu \nRafi'a",
      nim: "24060123120004",
      kelompok: "21",
      shift: "4",
      photo: "src/assets/Adnan.jpg",
    },
  ];

  return (
    // Gunakan calc(100vh - 80px) agar tinggi sesuai tinggi layar minus navbar
    <div
      className="flex flex-col justify-center items-center bg-gray-50 overflow-hidden"
      style={{ height: "calc(100vh - 80px)" }} // 80px kira-kira tinggi navbar kamu
    >
      <div className="max-w-7xl w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Profile Pengguna
        </h1>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-12 flex flex-col items-center text-center"
              >
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-500"
                  style={{ objectPosition: "center top" }}
                />
                <h2 className="text-lg font-semibold text-gray-800 whitespace-pre-line">
                  {profile.name}
                </h2>
                <p className="text-gray-600 mt-1">NIM: {profile.nim}</p>
                <p className="text-gray-600">Kelompok: {profile.kelompok}</p>
                <p className="text-gray-600">Shift: {profile.shift}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
