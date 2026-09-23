import { createFileRoute } from "@tanstack/react-router";
import { LegacyAppHost } from "@/components/LegacyApp";

// Catch-all: every other path is handled by the imported app's own router.
export const Route = createFileRoute("/$")({
  component: LegacyAppHost,
});
