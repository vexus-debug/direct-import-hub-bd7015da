import { createFileRoute } from "@tanstack/react-router";
import { LegacyAppHost } from "@/components/LegacyApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clinexus — Clinic Management Software" },
      {
        name: "description",
        content:
          "Clinexus is the all-in-one management platform for eye and dental clinics: patients, appointments, billing, inventory, labs, imaging, pharmacy and marketing.",
      },
      { property: "og:title", content: "Clinexus — Clinic Management Software" },
      {
        property: "og:description",
        content:
          "All-in-one management platform for eye and dental clinics: patients, appointments, billing, inventory, labs, imaging, pharmacy and marketing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LegacyAppHost,
});
