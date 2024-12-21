const team = [
  {
    name: "Hamza Raheem",
    role: "Team Lead / Developer ",
    imageUrl: "https://avatars.githubusercontent.com/u/161157848?v=4",
  },
  {
    name: "Ahmad Mahad khan Niazi",
    role: "Designer / Developer",
    imageUrl: "https://avatars.githubusercontent.com/u/161157848?v=4",
  },
  {
    name: "Muhammad Uzair",
    role: " Tester / Developer ",
    imageUrl: "https://avatars.githubusercontent.com/u/161157848?v=4",
  },
];

export default function Team() {
  return (
    <div className="py-10 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight  sm:text-4xl">
            Meet our Team
          </h2>
          <p className="mt-6 text-lg/8 ">
            We are a group of university students working on this for our
            semester project.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {team.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-16 rounded-full"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-primary">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
