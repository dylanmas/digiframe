import fs from 'fs/promises';
import { j as json } from './index-TYVuJacS.js';
import path from 'path';
import { exec } from 'child_process';

const filePath = path.join(process.cwd(), "src/lib", "preferences.json");
async function POST(request) {
  const fileContents = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(fileContents);
  switch (request.url.searchParams.get("category")) {
    case "source":
      data.imagedata.source = request.url.searchParams.get("data");
      break;
    case "transition":
      data.imagedata.transition = request.url.searchParams.get("data");
      break;
    case "delayseconds":
      data.imagedata.delayseconds = request.url.searchParams.get("data");
      break;
    case "queries":
      data.imagedata.queries = request.url.searchParams.get("data");
      break;
    case "color":
      data.imagedata.color = request.url.searchParams.get("data");
      break;
    case "URL":
      data.imagedata.URL = request.url.searchParams.get("data");
      break;
    case "showdata":
      data.imagedata.showdata = request.url.searchParams.get("data");
      break;
    case "clocktype":
      data.imagedata.clocktype = request.url.searchParams.get("data");
      break;
    case "weather":
      data.imagedata.weather = request.url.searchParams.get("data");
      break;
    case "imagedata":
      data.imagedata.imagedata = request.url.searchParams.get("data");
      break;
    case "qotd":
      data.imagedata.qotd = request.url.searchParams.get("data");
      break;
    case "ytvidid":
      data.imagedata.ytvidid = request.url.searchParams.get("data");
      break;
    case "patterntype":
      data.imagedata.patterntype = request.url.searchParams.get("data");
      break;
    case "update":
      data.imagedata.source = request.url.searchParams.get("data");
      exec("digiframe-update", (error, stdout, stderr) => {
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
      break;
  }
  Object.assign(data, request.body);
  const tst1 = await fs.writeFile(filePath, JSON.stringify(data));
  return json({ tst1 }, { status: 200 });
}

export { POST };
//# sourceMappingURL=_server-c7HIajLX.js.map
