import fs from 'fs/promises';
import { json } from '@sveltejs/kit'
import path from 'path';
import { exec } from "child_process";

// Defining the path to the JSON file
const filePath = path.join(process.cwd(), "src/lib", "preferences.json");

export async function POST(request) {
  // Reading the contents of the JSON file
  const fileContents = await fs.readFile(filePath, 'utf-8');

  // Valid entries:
  //    frameorientation
  //    brightnessdisplay
  //    system
  //    power
  console.log(request.url.searchParams.get('category'))
  console.log(request.url.searchParams.get('data'))

  // Parsing the JSON data
  const data = JSON.parse(fileContents);
  console.log(data.settingsdata.frameorientation)

  switch (request.url.searchParams.get("category")) {
    case "frameorientation":
      data.settingsdata.frameorientation = request.url.searchParams.get("data");
      break;

    case "brightnessdisplay":
      data.settingsdata.brightnessdisplay = request.url.searchParams.get("data");
      break;

    case "factorymode":
      data.settingsdata.factorymode = request.url.searchParams.get("data");
      
      exec("cp src/lib/default.json src/lib/preferences.json", (error, stdout, stderr) => {
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

    case "power":
      data.settingsdata.power = request.url.searchParams.get("data");
      break;

    default:
      break;
  }

  // Updating the data with the request body
  Object.assign(data, request.body);

  // Writing the updated data back to the file

  const tst1 = await fs.writeFile(filePath, JSON.stringify(data));

  // Return the updated data
  return json({tst1}, {status: 200})

}

export async function GET() {
  const fileContents = await fs.readFile(filePath, 'utf-8');
  var output = await fs.readFile(filePath, 'utf-8');
  output = JSON.parse(output);

  // Return the updated data
  return json({output}, {status: 200})
}