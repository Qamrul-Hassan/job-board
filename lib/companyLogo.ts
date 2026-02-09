export function getCompanyLogo(company: string) {
  if (!company) return "";

  const domain = company
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  return `https://logo.clearbit.com/${domain}.com`;
}
