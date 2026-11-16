"use client";

import { useEffect, useState } from "react";
import { Laptop, Monitor, Download, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DESKTOP_VERSION, desktopDownloads } from "@/lib/downloads";

function detectPlatform() {
  if (typeof navigator === "undefined") return null;
  const platform = (navigator.userAgentData?.platform || navigator.platform || "").toLowerCase();
  const agent = navigator.userAgent.toLowerCase();
  if (platform.includes("mac") || agent.includes("mac os")) return "mac";
  if (platform.includes("win") || agent.includes("windows")) return "windows";
  return null;
}

function PlatformCard({ icon: Icon, title, highlighted, primary, secondary, note }) {
  return (
    <div
      className={`rounded-2xl border bg-white p-8 text-left shadow-sm transition ${
        highlighted ? "border-[#006cff] ring-2 ring-[#006cff]/20" : "border-gray-200"
      }`}
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
          <Icon className="h-6 w-6 text-[#006cff]" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">Version {DESKTOP_VERSION}</p>
        </div>
        {highlighted && (
          <span className="ml-auto rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#006cff]">
            Your computer
          </span>
        )}
      </div>
      <Button size="lg" asChild className="w-full bg-[#006cff] hover:bg-[#006cff]/90">
        <a href={primary.href} className="flex items-center justify-center">
          <Download className="mr-2 h-5 w-5" />
          {primary.label}
        </a>
      </Button>
      <a
        href={secondary.href}
        className="mt-3 block text-center text-sm text-gray-600 underline-offset-4 hover:text-gray-900 hover:underline"
      >
        {secondary.label}
      </a>
      <p className="mt-6 text-sm leading-relaxed text-gray-500">{note}</p>
    </div>
  );
}

export function DesktopDownloadSection() {
  const [platform, setPlatform] = useState(null);

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  return (
    <section id="download" className="scroll-mt-24 bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-4xl font-bold">Zeal on your computer</h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
          Download the free desktop app for Mac or Windows and manage your congregation on a bigger screen.
        </p>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <PlatformCard
            icon={Laptop}
            title="macOS"
            highlighted={platform === "mac"}
            primary={{ href: desktopDownloads.macAppleSilicon, label: "Download for Mac (Apple Silicon)" }}
            secondary={{ href: desktopDownloads.macIntel, label: "Have an Intel Mac? Download the Intel version" }}
            note="Open the downloaded file and drag Zeal into Applications. The first time, right-click Zeal and choose Open."
          />
          <PlatformCard
            icon={Monitor}
            title="Windows"
            highlighted={platform === "windows"}
            primary={{ href: desktopDownloads.windowsX64, label: "Download for Windows" }}
            secondary={{ href: desktopDownloads.windowsArm64, label: "Using a Windows ARM device? Download the ARM version" }}
            note="Run the installer. If Windows SmartScreen appears, choose More info, then Run anyway."
          />
        </div>
        <p className="mt-10 flex items-center justify-center gap-2 text-gray-600">
          <Globe className="h-4 w-4" />
          Prefer the browser?
          <a href="https://app.zeal.rw" className="font-medium text-[#006cff] hover:underline">
            Open the web app
          </a>
        </p>
      </div>
    </section>
  );
}
