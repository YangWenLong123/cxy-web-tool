/*
 * @Author: along
 * @Description:
 * @Date: 2025-02-28 13:38:24
 * @LastEditors: along
 * @LastEditTime: 2025-02-28 16:40:42
 * @FilePath: /cxy-web-tool/src/utils/analytics.ts
 */

import { visit } from "@/api/common";
async function getUserIPAddress() {
  try {
    const response = await fetch("https://api64.ipify.org?format=json");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();

    visit({ ipAddress: data.ip });
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

getUserIPAddress();
