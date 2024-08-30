function createFooter(): HTMLDivElement {
  const ele = document.createElement("div");
  ele.innerHTML = `
  <p class="site_police" style="text-align: center; margin: 20px 0;">
    <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer nofollow">
      冀公网安备13058202001917号 - 冀ICP备2023038642号-1
    </a>
  </p>`;
  return ele;
}

export function reinjectFooter(): void {
  const hostname = window.location.hostname;
  const allowedHosts = ["localhost", "127.0.0.1", "d.yingen.top"];
  if (!allowedHosts.includes(hostname)) {
    return; // 当前域名不在允许列表中，不进行操作
  }

  document.querySelector(".site_police")?.remove(); // 尝试删除原来的 footer
  const footerElement = createFooter();
  const contentElement = document.querySelector(".VPDocFooter");

  if (contentElement) {
    contentElement.appendChild(footerElement);
  } else {
    document.body.appendChild(footerElement);
    footerElement.style.width = "100%";
    footerElement.style.position = "fixed";
    footerElement.style.bottom = "0";
    footerElement.style.left = "0";
  }
}
