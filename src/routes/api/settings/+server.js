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

  // Parsing the JSON data
  const data = JSON.parse(fileContents);

  switch (request.url.searchParams.get("category")) {
    case "frameorientation":
      data.settingsdata.frameorientation = request.url.searchParams.get("data");
      break;

    case "brightnessdisplay":
      data.settingsdata.brightnessdisplay =
        request.url.searchParams.get("data");
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

    case "timezone":
      exec(
        `timedatectl set-timezone Etc/GMT${
          request.url.searchParams.get("subcategory") == "plus" ? "+" : "-"
        }${request.url.searchParams.get("data")}`,
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

      console.log(request.url.searchParams.get("subcategory"))

      break;

    case "timedate":
      exec(
        `timedatectl set-time Etc/GMT${request.url.searchParams.get(
          "data"
        )}`,
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