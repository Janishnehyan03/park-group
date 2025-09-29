import Image from "next/image";

function Achievements() {
  return (
    <div className="flex justify-center items-center my-3">
      <Image
        src="/images/park.png"
        alt="Leaf Pattern"
        width={600}
        height={600}
        className="opacity-80 pointer-events-none select-none"
      />
    </div>
  );
}

export default Achievements;
