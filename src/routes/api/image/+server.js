import fs from "fs/promises";
import { json } from "@sveltejs/kit";
import path from "path";
import { exec } from "child_process";

// Defining the path to the JSON file
const filePath = path.join(process.cwd(), "src/lib", "preferences.json");

export async function POST(request) {
  // Reading the contents of the JSON file
  const fileContents = await fs.readFile(filePath, "utf-8");

  // Valid entries:
  //    frameorientation
  //    brightnessdisplay
  //    system
  //    power

  // Parsing the JSON data
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

    default:
      break;
  }

  // Updating the data with the request body
  Object.assign(data, request.body);

  // Writing the updated data back to the file

  const tst1 = await fs.writeFile(filePath, JSON.stringify(data));

  // Return the updated data
  return json({ tst1 }, { status: 200 });
}
