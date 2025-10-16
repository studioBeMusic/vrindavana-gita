import StaticHtml from "@/components/StaticHtml";
export default function LegacyPage({ params }: { params: { slug: string[] } }) {
  const path = "/static-html/" + params.slug.join("/");
  return <StaticHtml path={path} />;
}
