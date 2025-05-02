export default function Team() {
  const teamMembers = [
    { name: "Nandan Singh", role: "Lead Designer", image: "/img/~Nandan Singh.jpg" },
    { name: "~", role: "Floral Expert", image: "/images/team1.jpg" },
  ];

  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-500">Meet Our Team</h2>
        <p className="text-lg text-gray-700 mt-4">The talented professionals behind every creation.</p>
      </div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center bg-gray-100 p-6 rounded-lg ">
            <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-red-500">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
