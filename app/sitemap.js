export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: baseUrl + "/ourservices/films",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: baseUrl + "/ourservices/photoshoots",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: baseUrl + "/ourservices/events",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
