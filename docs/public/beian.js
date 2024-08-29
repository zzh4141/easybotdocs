const hostname = window.location.hostname;
const allowedHosts = ["localhost", "127.0.0.1", "d.yingen.top"];
if (!allowedHosts.includes(hostname)) {
  const sitePoliceElement = document.querySelector(".VPFooter");
  if (sitePoliceElement) {
    sitePoliceElement.style.display = "none";
  }
}
