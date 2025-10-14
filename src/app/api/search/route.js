// สำหรับ Sitelinks Search Box -> /search?q=
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || '';
  return Response.redirect(`/blog?q=${encodeURIComponent(q)}`, 302);
}
