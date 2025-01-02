import Image from "next/image";
import TeamMemberCard from "./member";

interface TeamMemberCard {
  name: string;
  designation: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMemberCard[] = [
  {
    name: "Kainat Ibrahim",
    designation: "Dermatology Specialist",
    bio: "Passionate about designing scalable and efficient software applications.",
    image: "/doc1.jpeg",
  },
  {
    name: "Ethan Carter",
    designation: "Cardiology Specialist",
    bio: "Specializes in building secure and reliable cloud solutions for modern businesses.",
    image: "/doc2.jpg",
  },
  {
    name: "Olivia Bennett",
    designation: "Ophthalmology Specialist",
    bio: "Focused on crafting intuitive and visually engaging user experiences.",
    image: "/doc3.jpg",
  },
  {
    name: "Liam Parker",
    designation: "Endocrinology Specialist",
    bio: "Expert in optimizing development workflows and automating infrastructure.",
    image: "/doc4.jpg",
  },
];

export default function Team() {
  return (
    <section className="pb-10 px-4 md:px-8 lg:px-12 mx-auto max-w-screen-2xl">
      {/* Section Heading */}
      <h5 className="text-lg lg:text-3xl font-semibold text-orange-400 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
        <Image src="/logo.png" alt="logo" width={50} height={50} className="object-cover" />
        My Team
      </h5>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold dark:text-[#f2f2f4] text-black mt-4 text-center md:text-left">
        Meet With My Specialists
      </h2>

      {/* Team Member Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            designation={member.designation}
            bio={member.bio}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
}  