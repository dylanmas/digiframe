import { c as create_ssr_component, e as escape, d as add_attribute } from './ssr-mdArggYB.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var transitiontime = "";
  var queries = "";
  var color = "";
  var url = "";
  var ytvidid = "";
  var data = {
    output: {
      "imagedata": {
        "source": "unsplash",
        "transition": "sweepleft",
        "queries": "city,nature,landscape,architecture,mountain",
        "delayseconds": 60,
        "color": "#FFFFFF",
        "URL": "",
        "showdata": "true",
        "clocktype": "centerlarge",
        "weather": "true",
        "imagedata": "true",
        "qotd": "true",
        "ytvidid": ""
      },
      "settingsdata": {
        "frameorientation": "portrait",
        "brightnesslevel": "100",
        "autobrightness": "true",
        "backlight": "true",
        "wifi": {
          "SSID": "ATT8R7t5m5",
          "password": "jfkldsjklfds"
        },
        "factorymode": "false"
      }
    }
  };
  return `<div class="text-white max-w-[1000px] h-[100vh] p-10 flex flex-col"><div class="bg-neutral-800 flex space-x-2 mr-auto p-3 rounded-full shadow-lg" data-svelte-h="svelte-1x54113"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l1.872-1.092a.75.75 0 1 1 .756 1.295l-1.878 1.096V15a.75.75 0 0 1-1.5 0v-1.82l-1.878-1.095a.75.75 0 0 1-.27-1.025ZM3 13.5a.75.75 0 0 1 .75.75v1.82l1.878 1.095a.75.75 0 1 1-.756 1.295l-2.25-1.312a.75.75 0 0 1-.372-.648v-2.25A.75.75 0 0 1 3 13.5Zm18 0a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.372.648l-2.25 1.312a.75.75 0 1 1-.756-1.295l1.878-1.096V14.25a.75.75 0 0 1 .75-.75Zm-9 5.25a.75.75 0 0 1 .75.75v.944l1.122-.654a.75.75 0 1 1 .756 1.295l-2.25 1.313a.75.75 0 0 1-.756 0l-2.25-1.313a.75.75 0 1 1 .756-1.295l1.122.654V19.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"></path></svg> <h1 class="font-bold">DigiFrame</h1></div> <div class="bg-neutral-800 w-full p-2 rounded-lg shadow-xl mt-2"><h1 class="text-2xl font-bold mb-2" data-svelte-h="svelte-1pd1bl">My Image</h1> <img src="https://picsum.photos/1920/1080" class="w-full h-48 rounded-t-lg shadow-lg"> <div class="w-full flex bg-neutral-900 p-5 text-black rounded-b-lg space-x-2 mb-2 overflow-x-scroll"><div class="flex p-5 flex-col bg-neutral-600 text-white text-center rounded-lg shadow-md w-100" data-svelte-h="svelte-45x5ty"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mx-auto w-6 h-6 mt-auto"><path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd"></path></svg> <h1 class="mb-auto">Preview</h1></div> <button class="${"flex flex-col bg-neutral-600 text-white rounded-lg shadow-md items-center transition-all duration-500 " + escape(
    "scale-90 brightness-90",
    true
  )}"><div class="w-20 h-20 rounded-t-lg shadow-md bg-white flex items-center" data-svelte-h="svelte-2ctvvq"><svg class="mx-auto" width="36px" height="36px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Unsplash icon</title><path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z"></path></svg></div> <h1 class="text-center" data-svelte-h="svelte-n32enk">Unsplash</h1></button> <button class="${"flex flex-col bg-neutral-600 text-white rounded-lg shadow-md items-center transition-all duration-500 " + escape(
    "scale-90 brightness-90",
    true
  )}"><div class="w-20 h-20 rounded-t-lg shadow-md bg-green-400 flex items-center" data-svelte-h="svelte-4vosnf"><svg class="mx-auto fill-white" width="38px" height="38px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Pexels icon</title><path d="M1.5 0A1.5 1.5 0 000 1.5v21A1.5 1.5 0 001.5 24h21a1.5 1.5 0 001.5-1.5v-21A1.5 1.5 0 0022.5 0h-21zm6.75 6.75h5.2715a3.843 3.843 0 01.627 7.6348V17.25H8.25V6.75zm1.5 1.5v7.5h2.8984v-2.8145h.873a2.343 2.343 0 100-4.6855H9.75Z"></path></svg></div> <h1 class="text-center" data-svelte-h="svelte-j41zmt">Pexels</h1></button> <button class="${"flex flex-col bg-neutral-600 text-white rounded-lg shadow-md items-center transition-all duration-500 " + escape(
    "scale-90 brightness-90",
    true
  )}"><div class="w-20 h-20 rounded-t-lg shadow-md bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 flex items-center" data-svelte-h="svelte-1jwhfkd"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 mx-auto text-white"><path fill-rule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd"></path><path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z"></path></svg></div> <h1 class="text-center" data-svelte-h="svelte-1yh77sj">Color</h1></button> <button class="${"flex flex-col bg-neutral-600 text-white rounded-lg shadow-md items-center transition-all duration-500 " + escape(
    "scale-90 brightness-90",
    true
  )}"><div class="w-20 h-20 rounded-t-lg shadow-md bg-red-500 flex items-center" data-svelte-h="svelte-9b50zo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 mx-auto text-white"><path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd"></path></svg></div> <h1 class="text-center" data-svelte-h="svelte-pvren1">YouTube</h1></button> <button class="${"flex flex-col bg-neutral-600 text-white rounded-lg shadow-md items-center transition-all duration-500 " + escape(
    "scale-90 brightness-90",
    true
  )}"><div class="w-20 h-20 rounded-t-lg shadow-md bg-orange-500 flex items-center" data-svelte-h="svelte-1a9u7rf"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 mx-auto text-white"><path d="M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3ZM11.25 7.5V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z"></path></svg></div> <h1 class="text-center" data-svelte-h="svelte-cisv6t">URL</h1></button> <button class="${"flex flex-col bg-neutral-600 text-white rounded-lg shadow-md items-center transition-all duration-500 " + escape(
    "scale-90 brightness-90",
    true
  )}"><div class="w-20 h-20 rounded-t-lg shadow-md bg-purple-500 flex items-center" data-svelte-h="svelte-1f7hd06"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 mx-auto text-white"><path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd"></path></svg></div> <h1 class="text-center" data-svelte-h="svelte-1tmuyxt">Image</h1></button></div> <div class="flex flex-col bg-neutral-900 p-2 rounded-lg gap-2"><h1 class="font-bold text-lg">${escape(data.output.imagedata.source)} Preferences</h1> <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2 "><h1 class="mr-auto" data-svelte-h="svelte-g0em6p">Transition</h1> <button class="${"p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700 " + escape(
    "brightness-[70%]",
    true
  )}">Slide left</button> <button class="${"p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700 " + escape(
    "brightness-[70%]",
    true
  )}">Slide right</button> <button class="${"p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700 " + escape(
    "brightness-[70%]",
    true
  )}">Fade</button> <button class="${"p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700 " + escape(
    "brightness-[70%]",
    true
  )}">Fade to black</button> <button class="${"p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700 " + escape(
    "brightness-[70%]",
    true
  )}">None</button></div> <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2"><h1 class="mr-auto" data-svelte-h="svelte-lr8d21">Transition time (ms)</h1> <input class="shadow-md bg-neutral-700 max-w-96 min-w-24 rounded-md px-1" placeholder="Enter time"${add_attribute("value", transitiontime, 0)}> <button class="bg-neutral-700 p-1 rounded-md shadow-lg" data-svelte-h="svelte-cj7ljk">Apply</button></div> <div class="${"w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2 " + escape(
    "hidden",
    true
  )}"><h1 class="mr-auto" data-svelte-h="svelte-2nbui4">Queries</h1> <input class="shadow-md bg-neutral-700 max-w-96 min-w-24 rounded-md px-1" placeholder="e.g. Modern Painting, City"${add_attribute("value", queries, 0)}> <button class="bg-neutral-700 p-1 rounded-md shadow-lg" data-svelte-h="svelte-cr70ey">Apply</button></div> <div class="${"w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2 " + escape("hidden", true)}"><h1 class="mr-auto" data-svelte-h="svelte-18p3h4h">Color</h1> <input class="shadow-md bg-neutral-700 max-w-96 min-w-24 rounded-md px-1" placeholder="HEX code, no '#'"${add_attribute("value", color, 0)}> <button class="bg-neutral-700 p-1 rounded-md shadow-lg" data-svelte-h="svelte-1v3bda7">Color picker</button> <button class="bg-neutral-700 p-1 rounded-md shadow-lg" data-svelte-h="svelte-1ydypge">Apply</button></div> <div class="${"w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2 " + escape("hidden", true)}"><h1 class="mr-auto" data-svelte-h="svelte-1dp99as">Presets</h1> <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" data-svelte-h="svelte-4mmxy3">Gradient</button> <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" data-svelte-h="svelte-3nd302">DVD</button> <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" data-svelte-h="svelte-1tvmron">Pipes</button> <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" data-svelte-h="svelte-54ozim">Stars</button> <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" data-svelte-h="svelte-10xpne4">Top News</button> <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" data-svelte-h="svelte-7gru5a">Origami</button> <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" data-svelte-h="svelte-1y4bw5h">Ablaze</button> <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" data-svelte-h="svelte-1o97r49">Boids</button> <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" data-svelte-h="svelte-cmm2ts">Earth</button> <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" data-svelte-h="svelte-5rvipm">After Dark</button></div> <div class="${"w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2 " + escape(
    "hidden",
    true
  )}"><h1 class="mr-auto" data-svelte-h="svelte-pqam3z">URL</h1> <input class="shadow-md bg-neutral-700 max-w-96 min-w-24 rounded-md px-1" placeholder="Enter a URL"${add_attribute("value", url, 0)}> <button class="bg-neutral-700 p-1 rounded-md shadow-lg" data-svelte-h="svelte-10jwfiy">Apply</button></div> <div class="${"w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2 " + escape(
    "hidden",
    true
  )}"><h1 class="mr-auto" data-svelte-h="svelte-18wk00x">YouTube Video ID</h1> <input class="shadow-md bg-neutral-700 max-w-96 min-w-24 rounded-md px-1" placeholder="Enter ID"${add_attribute("value", ytvidid, 0)}> <button class="bg-neutral-700 p-1 rounded-md shadow-lg" data-svelte-h="svelte-poe6w6">Apply</button></div></div> <div class="flex flex-col bg-neutral-900 p-2 rounded-lg gap-2 mt-2"><h1 class="font-bold text-lg" data-svelte-h="svelte-9t8d9o">Image Preferences</h1> <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2"><h1 class="mr-auto" data-svelte-h="svelte-1c9sv78">Show/hide data</h1> <button class="${"bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 " + escape(
    "brightness-[70%]",
    true
  )}">Off</button> <button class="${"bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 " + escape(
    "brightness-110 scale-110",
    true
  )}">On</button></div> <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2"><h1 class="mr-auto" data-svelte-h="svelte-gialgg">Clock type</h1> <button class="${"bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 " + escape(
    "brightness-110 scale-110",
    true
  )}">Center Large</button> <button class="${"bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 " + escape(
    "brightness-[70%]",
    true
  )}">Large</button> <button class="${"bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 " + escape(
    "brightness-[70%]",
    true
  )}">Small</button> <button class="${"bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 " + escape(
    "brightness-[70%]",
    true
  )}">Off</button></div> <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2"><h1 class="mr-auto" data-svelte-h="svelte-1pje6z0">Weather</h1> <button class="${"bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 " + escape(
    "brightness-[70%]",
    true
  )}">Off</button> <button class="${"bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 " + escape(
    "brightness-110 scale-110",
    true
  )}">On</button></div> <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2"><h1 class="mr-auto" data-svelte-h="svelte-11oxogd">Image Data</h1> <button class="${"bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 " + escape(
    "brightness-[70%]",
    true
  )}">Off</button> <button class="${"bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 " + escape(
    "brightness-110 scale-110",
    true
  )}">On</button></div> <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2"><h1 class="mr-auto" data-svelte-h="svelte-1sik3zm">QOTD</h1> <button class="${"bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 " + escape(
    "brightness-[70%]",
    true
  )}">Off</button> <button class="${"bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 " + escape(
    "brightness-110 scale-110",
    true
  )}">On</button></div></div></div> <div class="bg-neutral-800 w-full p-2 rounded-lg shadow-xl space-y-2 mt-2"><h1 class="text-2xl font-bold" data-svelte-h="svelte-snrkqh">Device Settings</h1> <div class="flex flex-col bg-neutral-900 p-2 rounded-lg gap-2"><h1 class="font-bold text-lg" data-svelte-h="svelte-1tmo4bo">Frame Orientation</h1> <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2"><h1 class="mr-auto" data-svelte-h="svelte-1kcroqe">Orientation</h1> <button class="${"bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 " + escape(
    "brightness-110 scale-110",
    true
  )}">Portrait</button> <button class="${"bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 " + escape(
    "brightness-[70%]",
    true
  )}">Landscape</button> <button class="${"bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 " + escape(
    "brightness-[70%]",
    true
  )}">Portrait reversed</button> <button class="${"bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 " + escape(
    "brightness-[70%]",
    true
  )}">Landscape reversed</button></div></div> <div class="flex flex-col bg-neutral-900 p-2 rounded-lg gap-2"><h1 class="font-bold text-lg" data-svelte-h="svelte-12ghdxb">Brightness and Display</h1> <div class="w-full flex items-center bg-neutral-800 rounded-md p-2 gap-2" data-svelte-h="svelte-1mv2beq"><input type="range" class="bg-black h-1 rounded-full w-full p-2"></div> <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2"><h1 class="mr-auto" data-svelte-h="svelte-jfe72u">Auto brightness</h1> <button class="bg-neutral-700 p-1 rounded-md shadow-lg" data-svelte-h="svelte-m4cbsx">Turn on</button></div> <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2"><h1 class="mr-auto" data-svelte-h="svelte-18od7p5">Backlight toggle</h1> <button class="bg-neutral-700 p-1 rounded-md shadow-lg" data-svelte-h="svelte-1r7qjq3">Turn off</button></div></div> <div class="flex flex-col bg-neutral-900 p-2 rounded-lg gap-2"><h1 class="font-bold text-lg" data-svelte-h="svelte-nmdl66">System</h1> <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2"><h1 class="mr-auto" data-svelte-h="svelte-1uz5g2f">WiFi - ATT8R7t5m5</h1> <button class="bg-neutral-700 p-1 rounded-md shadow-lg" data-svelte-h="svelte-106htbx">WiFi Setup</button></div> <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2"><h1 class="mr-auto" data-svelte-h="svelte-toskw2">Updates</h1> <button class="bg-neutral-700 p-1 rounded-md shadow-lg" data-svelte-h="svelte-1g1p0xz">Check for updates</button></div> <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2"><h1 class="mr-auto" data-svelte-h="svelte-lndmoz">Factory reset</h1> <button class="bg-neutral-700 p-1 rounded-md shadow-lg" data-svelte-h="svelte-1uy71wl">Start</button></div></div> <div class="flex flex-col bg-neutral-900 p-2 rounded-lg gap-2"><h1 class="font-bold text-lg" data-svelte-h="svelte-y510jm">Power</h1> <div class="w-full flex items-center gap-2"><button class="bg-neutral-700 p-1 rounded-md shadow-lg w-full" data-svelte-h="svelte-18w74na">Refresh</button> <button class="bg-neutral-700 p-1 rounded-md shadow-lg w-full" data-svelte-h="svelte-v4t4t5">Restart</button> <button class="bg-neutral-700 p-1 rounded-md shadow-lg w-full" data-svelte-h="svelte-1ghtsz7">Turn off</button></div></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-A0CSCEXp.js.map
