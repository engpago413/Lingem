// Cloudflare Pages Functions — 拦截中国大陆 IP 并返回 403 页面
// 放入项目 functions/ 目录

const BLOCKED_COUNTRIES = ["CN"]; // 可追加 "HK", "MO"

const FORBIDDEN_HTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>403 — Lingem's Blog</title>
<style>
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #faf8f9;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  }
  body.dark {
    background: #1a1a2e;
    color: #e0e0e0;
  }
  .card {
    text-align: center;
    padding: 3rem 2.5rem;
    border-radius: 16px;
    background: #fff;
    box-shadow: 0 2px 24px rgba(180, 100, 130, 0.10);
    max-width: 460px;
    width: 90%;
  }
  body.dark .card {
    background: #252540;
    box-shadow: 0 2px 24px rgba(180, 100, 130, 0.08);
  }
  .code {
    font-size: 5rem;
    font-weight: 800;
    color: #e05280;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  .title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #333;
  }
  body.dark .title { color: #ddd; }
  .desc {
    font-size: 0.95rem;
    color: #888;
    line-height: 1.7;
  }
  body.dark .desc { color: #999; }
  .divider {
    width: 48px;
    height: 3px;
    background: #e05280;
    border-radius: 2px;
    margin: 1.25rem auto;
  }
</style>
</head>
<body>
<div class="card">
  <div class="code">403</div>
  <div class="title">抱歉，本站不对特定地区开放</div>
  <div class="divider"></div>
  <div class="desc">
    请您自行寻找可行方式访问本博客。
  </div>
</div>
<script>
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
  }
</script>
</body>
</html>`;

export const onRequest = async ({ request, next }) => {
  const cf = request.cf;
  const country = cf?.country || "";
  if (BLOCKED_COUNTRIES.includes(country)) {
    return new Response(FORBIDDEN_HTML, {
      status: 403,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }
  return next();
};
