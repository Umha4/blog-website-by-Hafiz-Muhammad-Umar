import Image from "next/image";

// TeamMemberCard.tsx
interface TeamMemberProps {
    name: string;
    designation: string;
    bio: string;
    image: string;
  }
  
  export default function TeamMemberCard({
    name,
    designation,
    bio,
    image,
  }: TeamMemberProps) {
    return (
      <div className="bg-[#1e182d] mx-auto max-w-screen-2xl overflow-x-hidden p-6 rounded-lg shadow-lg text-center  w-[300px] hover:shadow-orange-200">
        {/* Profile Image */}
        <Image
          src={image}
          alt={name}
          width="300"
          height="300"
          className=" w-[250px] h-[200px] mx-auto mb-4"
        />
        {/* Name */}
        <h3 className="text-xl font-semibold text-[#f2f2f4]">{name}</h3>
        {/* Designation */}
        <p className="text-sm text-orange-400 ">{designation}</p>
        {/* Short Bio */}
        <p className="mt-3 text-white text-sm">{bio}</p>
        {/* Social Media Links */}
      </div>
    );
  }
  

