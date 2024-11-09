import Image from "next/image";
import Link from "next/link";

const CompanyLogo = () => {
  return (
    <div>
      <Link
        href="/"
        aria-label="Eco-Pharmacy"
        title="Eco-Pharmacy"
        className="inline-flex items-center mr-8 gap-1"
      >
        <Image
          src={"https://arastta.org/images/logo/arastta-logo.svg"}
          alt="logo"
          width={40}
          height={30}
          className="w-10"
        />
        <span className="text-2xl font-bold text-primary">Eco Pharmacy</span>
      </Link>
    </div>
  );
};

export default CompanyLogo;
