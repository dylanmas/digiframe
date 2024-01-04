import fs from 'fs/promises';
import { j as json } from './index-TYVuJacS.js';
import path from 'path';
import { exec } from 'child_process';

const filePath = path.join(process.cwd(), "src/lib", "preferences.json");
async function POST(request) {
  const fileContents = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(fileContents);
  switch (request.url.searchParams.get("category")) {
    case "frameorientation":
      data.settingsdata.frameorientation = request.url.searchParams.get("data");
      break;
    case "brightnessdisplay":
      data.settingsdata.brightnessdisplay = request.url.searchParams.get("data");
      break;
    case "factorymode":
      console.log(data.settingsdata.factorymode);
      data.settingsdata.factorymode = request.url.searchParams.get("data");
      exec(
        "cp src/lib/default.json src/lib/preferences.json",
        (error, stdout, stderr) => {
          if (error) {
            console.log(error);
            return;
          }
          if (stderr) {
            console.log(stderr);
            return;
          }
          console.log(stdout);
        }
      );
      break;
    case "power":
      data.settingsdata.power = request.url.searchParams.get("data");
      if (data.settingsdata.power == "poweroff") {
        exec("sleep 4 && systemctl poweroff", (error, stdout, stderr) => {
          if (error) {
            console.log(error);
            return;
          }
          if (stderr) {
            console.log(stderr);
            return;
          }
          console.log(stdout);
        });
      } else if (data.settingsdata.power == "restart") {
        exec("sleep 4 && systemctl reboot", (error, stdout, stderr) => {
          if (error) {
            console.log(error);
            return;
          }
          if (stderr) {
            console.log(stderr);
            return;
          }
          console.log(stdout);
        });
      }
      break;
  }
  Object.assign(data, request.body);
  console.log(data);
  const tst1 = await fs.writeFile(filePath, JSON.stringify(data));
  return json({ tst1 }, { status: 200 });
}
async function GET() {
  await fs.readFile(filePath, "utf-8");
  var output = await fs.readFile(filePath, "utf-8");
  output = JSON.parse(output);
  return json({ output }, { status: 200 });
}

export { GET, POST };
//# sourceMappingURL=_server-O57BEO3o.js.map
