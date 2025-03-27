import Image from "next/image";

export default function CompanyLogos() {
  const companies = [
    { name: "Volkswagen", logo: "/assets/volkswagen_logo.svg" },
    { name: "Samsung", logo: "/assets/samsung_logo.svg" },
    { name: "Cisco", logo: "/assets/cisco_logo.svg" },
    { name: "Vimeo", logo: "/assets/vimeo_logo_resized-2.svg" },
    { name: "P&G", logo: "/assets/procter_gamble_logo.svg" },
    { name: "Hewlett", logo: "/assets/hewlett_packard_enterprise_logo.svg" },
    { name: "Citi", logo: "/assets/citi_logo.svg" },
    { name: "Ericsson", logo: "/assets/ericsson_logo.svg" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 items-center">
      {companies.map((company) => (
        <div key={company.name} className="grayscale opacity-70">
          <Image
            src={company.logo || "/placeholder.svg"}
            alt={company.name}
            width={company.name === "Volkswagen" ? 40 : 80}
            height={30}
          />
        </div>
      ))}
    </div>
  );
}
