import { ClientLogo1, ClientLogo2, ClientLogo3, ClientLogo4, ClientLogo5 } from '@/lib/icons';

const logos = [
  { component: ClientLogo1, name: "TechCorp" },
  { component: ClientLogo2, name: "Innovate Inc" },
  { component: ClientLogo3, name: "Quantum Solutions" },
  { component: ClientLogo4, name: "DataSecure" },
  { component: ClientLogo5, name: "CloudPioneer" },
  { component: ClientLogo1, name: "Nexus Systems" },
  { component: ClientLogo2, name: "Apex Industries" },
];

export default function ClientsMarquee() {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Trusted by Industry Leaders
        </h3>
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex w-max animate-marquee items-center">
            {[...logos, ...logos].map((logo, index) => {
              const LogoComponent = logo.component;
              return (
                <div key={index} className="mx-8 flex-shrink-0" title={logo.name}>
                  <LogoComponent className="h-8 w-auto text-muted-foreground transition-colors hover:text-foreground" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
