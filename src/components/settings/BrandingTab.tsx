"use client";

import { useState } from "react";

interface BrandingState {
  logo_url: string | null;
}

export function BrandingTab() {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [branding, setBranding] = useState<BrandingState | null>(null);

  // ── Logo callbacks ────────────────────────────────────────
  // Logo saves to DB immediately via its own API route.
  // Sync the branding snapshot so hasChanges stays accurate
  // and Save doesn't overwrite logo_url on next PATCH.
  const handleLogoUploaded = (url: string) => {
    setLogoUrl(url);
    setBranding((prev) => (prev ? { ...prev, logo_url: url } : prev));
  };

  const handleLogoRemoved = () => {
    setLogoUrl(null);
    setBranding((prev) => (prev ? { ...prev, logo_url: null } : prev));
  };

  return null;
}
