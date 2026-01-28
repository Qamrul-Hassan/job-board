export function getCompanyLogo(companyName: string) {
  if (!companyName) return "";

  const cleanName = companyName
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  return `https://logo.clearbit.com/${cleanName}.com`;
}