// Desktop installers are published as assets on the latest GitHub Release of
// blaimug/zeal-landing. The asset names stay the same for every release, so these
// links always download the newest version without changing the website.
const RELEASE_BASE = "https://github.com/blaimug/zeal-landing/releases/latest/download";

export const DESKTOP_VERSION = "2.2.3";

export const desktopDownloads = {
  macAppleSilicon: `${RELEASE_BASE}/Zeal-Mac-AppleSilicon.dmg`,
  macIntel: `${RELEASE_BASE}/Zeal-Mac-Intel.dmg`,
  windowsX64: `${RELEASE_BASE}/Zeal-Windows-Setup-x64.exe`,
  windowsArm64: `${RELEASE_BASE}/Zeal-Windows-Setup-arm64.exe`,
};

export const DESKTOP_RELEASES_URL = "https://github.com/blaimug/zeal-landing/releases/latest";
