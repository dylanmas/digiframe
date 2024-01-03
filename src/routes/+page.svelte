<script>
  import { onMount } from "svelte";

    var transitiontime = "";
    var queries = "";
    var color = "";
    var url = "";
    var ytvidid = "";

    var data = {output: {
        "imagedata":{
            "source":"unsplash",
            "transition":"sweepleft",
            "queries":"city,nature,landscape,architecture,mountain",
            "delayseconds":60,
            "color":"#FFFFFF",
            "URL":"",		
            "showdata":"true",
            "clocktype":"centerlarge",
            "weather":"true",
            "imagedata":"true",
            "qotd":"true",
            "ytvidid":""
        },
        "settingsdata":{
            "frameorientation":"portrait",
            "brightnesslevel":"100",
            "autobrightness":"true",
            "backlight":"true",
            "wifi":{
                "SSID":"ATT8R7t5m5",
                "password":"jfkldsjklfds"
            },
            "factorymode":"false"
        }
    }};

    onMount(async () => {
        getSettings();
    })

    async function changeSettings(apitype, category, data, subcategory) {
        const response = await fetch(`/api/${apitype}/?category=${category}&data=${data}&subcategory=${subcategory}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })

        getSettings();
    }

    async function getSettings() {
        const response = await fetch(`/api/settings`,{
            method: 'GET',
        })
        data = await response.json();

        console.log(data.output.imagedata);
    }

</script>

<div class="text-white max-w-[1000px] h-[100vh] p-10 flex flex-col">
    <div class="bg-neutral-800 flex space-x-2 mr-auto p-3 rounded-full shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l1.872-1.092a.75.75 0 1 1 .756 1.295l-1.878 1.096V15a.75.75 0 0 1-1.5 0v-1.82l-1.878-1.095a.75.75 0 0 1-.27-1.025ZM3 13.5a.75.75 0 0 1 .75.75v1.82l1.878 1.095a.75.75 0 1 1-.756 1.295l-2.25-1.312a.75.75 0 0 1-.372-.648v-2.25A.75.75 0 0 1 3 13.5Zm18 0a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.372.648l-2.25 1.312a.75.75 0 1 1-.756-1.295l1.878-1.096V14.25a.75.75 0 0 1 .75-.75Zm-9 5.25a.75.75 0 0 1 .75.75v.944l1.122-.654a.75.75 0 1 1 .756 1.295l-2.25 1.313a.75.75 0 0 1-.756 0l-2.25-1.313a.75.75 0 1 1 .756-1.295l1.122.654V19.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
        </svg>
        <h1 class="font-bold">DigiFrame</h1>
    </div>
    
    <div class="bg-neutral-800 w-full p-2 rounded-lg shadow-xl mt-2">
        <h1 class="text-2xl font-bold mb-2">My Image</h1>
        


        <div class="w-full flex bg-neutral-900 p-5 text-black rounded-b-lg space-x-2 mb-2 overflow-x-scroll">

            <button on:click={() => {changeSettings("image", "source", "Unsplash")}} class="flex flex-col bg-neutral-600 text-white rounded-lg shadow-md items-center transition-all duration-500 {data.output.imagedata.source == "Unsplash" ? "scale-110 brightness-110" : "scale-90 brightness-90"}">
                <div class="w-20 h-20 rounded-t-lg shadow-md bg-white flex items-center">
                    <svg class="mx-auto" width="36px" height="36px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Unsplash icon</title><path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z"/></svg>
                </div>
                <h1 class="text-center">Unsplash</h1>
            </button>

            <button on:click={() => {changeSettings("image", "source", "Image")}} class="flex flex-col bg-neutral-600 text-white rounded-lg shadow-md items-center transition-all duration-500 {data.output.imagedata.source == "Image" ? "scale-110 brightness-110" : "scale-90 brightness-90"}">
                <div class="w-20 h-20 rounded-t-lg shadow-md bg-purple-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 mx-auto text-white">
                    <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" />
                    </svg>
                </div>
                <h1 class="text-center">Image</h1>
            </button>
            
            <button on:click={() => {changeSettings("image", "source", "Color")}} class="flex flex-col bg-neutral-600 text-white rounded-lg shadow-md items-center transition-all duration-500 {data.output.imagedata.source == "Color" ? "scale-110 brightness-110" : "scale-90 brightness-90"}">
                <div class="w-20 h-20 rounded-t-lg shadow-md bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 mx-auto text-white">
                    <path fill-rule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd" />
                    <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z" />
                    </svg>
                </div>

                <h1 class="text-center">Color</h1>
            </button>

            <button on:click={() => {changeSettings("image", "source", "YouTube")}} class="flex flex-col bg-neutral-600 text-white rounded-lg shadow-md items-center transition-all duration-500 {data.output.imagedata.source == "YouTube" ? "scale-110 brightness-110" : "scale-90 brightness-90"}">
                <div class="w-20 h-20 rounded-t-lg shadow-md bg-red-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 mx-auto text-white">
                    <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                    </svg>
                </div>
                <h1 class="text-center">YouTube</h1>
            </button>
            
            <button on:click={() => {changeSettings("image", "source", "URL")}} class="flex flex-col bg-neutral-600 text-white rounded-lg shadow-md items-center transition-all duration-500 {data.output.imagedata.source == "URL" ? "scale-110 brightness-110" : "scale-90 brightness-90"}">
                <div class="w-20 h-20 rounded-t-lg shadow-md bg-orange-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 mx-auto text-white">
                    <path d="M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3ZM11.25 7.5V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
                    </svg>
                </div>
                <h1 class="text-center">URL</h1>
            </button>


            <button on:click={() => {changeSettings("image", "source", "Pattern")}} class="flex flex-col bg-neutral-600 text-white rounded-lg shadow-md items-center transition-all duration-500 {data.output.imagedata.source == "Pattern" ? "scale-110 brightness-110" : "scale-90 brightness-90"}">
                <div class="w-20 h-20 rounded-t-lg shadow-md bg-blue-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 mx-auto text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                </div>
                <h1 class="text-center">Pattern</h1>
            </button>

            <button on:click={() => {changeSettings("image", "source", "Spotify")}} class="flex flex-col bg-neutral-600 text-white rounded-lg shadow-md items-center transition-all duration-500 {data.output.imagedata.source == "Spotify" ? "scale-110 brightness-110" : "scale-90 brightness-90"}">
                <div class="w-20 h-20 rounded-t-lg shadow-md bg-green-500 flex items-center">
                    <svg fill="#FFFFFF" class="w-10 h-10 mx-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m17.61 16.906c0-.002 0-.004 0-.007 0-.34-.187-.636-.464-.791l-.005-.002c-1.922-1.131-4.235-1.8-6.703-1.8-.099 0-.197.001-.296.003h.015c-1.598.016-3.142.208-4.626.559l.142-.028c-.373.047-.659.363-.659.746 0 .024.001.047.003.07v-.003.012c0 .205.081.391.212.528.132.14.318.227.525.227.01 0 .021 0 .031-.001h-.001c.225-.034.42-.077.611-.133l-.032.008c1.136-.255 2.444-.407 3.786-.422h.01c.075-.002.164-.003.253-.003 2.193 0 4.246.599 6.005 1.642l-.054-.03c.146.097.323.159.513.172h.003.001c.405 0 .734-.328.734-.734 0-.006 0-.011 0-.017v.001zm1.5-3.36c0-.01 0-.021 0-.032 0-.395-.219-.74-.542-.918l-.005-.003c-2.358-1.387-5.195-2.207-8.223-2.207-.118 0-.237.001-.354.004h.018c-1.686.001-3.316.24-4.858.687l.123-.031c-.432.089-.753.466-.753.919 0 .029.001.057.004.085v-.004.004c0 .516.418.934.934.934h.004c.218-.028.414-.072.603-.131l-.024.007c1.168-.328 2.509-.516 3.894-.516h.027-.001c.099-.002.216-.004.334-.004 2.683 0 5.198.721 7.361 1.979l-.07-.038c.169.108.371.181.588.203h.006.004c.516 0 .934-.418.934-.934 0-.001 0-.003 0-.004zm1.69-3.874c.001-.015.001-.034.001-.052 0-.449-.251-.839-.62-1.039l-.006-.003c-1.32-.758-2.851-1.354-4.472-1.707l-.106-.019c-1.596-.372-3.429-.586-5.312-.586-.017 0-.034 0-.05 0h.003c-.084-.001-.184-.002-.284-.002-1.923 0-3.784.269-5.546.771l.142-.035c-.243.074-.448.214-.6.398l-.002.002c-.15.191-.241.436-.241.702 0 .02 0 .039.001.059v-.003.029c0 .305.122.582.321.784.196.203.471.328.775.328h.032-.002c.23-.02.443-.064.645-.131l-.02.006c1.359-.369 2.919-.58 4.529-.58.095 0 .19.001.285.002h-.014.044c1.699 0 3.352.194 4.939.56l-.147-.029c1.494.313 2.819.827 4.028 1.519l-.067-.035c.178.111.393.18.623.187h.002.01c.304 0 .579-.122.778-.32.205-.194.333-.469.333-.773 0-.012 0-.023-.001-.035v.002zm3.2 2.328v.09c0 2.187-.598 4.234-1.64 5.987l.03-.054c-1.067 1.824-2.544 3.301-4.311 4.337l-.056.03c-1.729 1.012-3.806 1.609-6.024 1.609s-4.295-.597-6.081-1.64l.057.031c-1.824-1.067-3.301-2.544-4.337-4.311l-.03-.056c-1.012-1.729-1.609-3.806-1.609-6.024s.597-4.295 1.64-6.081l-.031.057c1.067-1.824 2.544-3.301 4.311-4.337l.056-.03c1.729-1.012 3.806-1.609 6.024-1.609s4.295.597 6.081 1.64l-.057-.031c1.824 1.067 3.301 2.544 4.337 4.311l.03.056c1.012 1.699 1.61 3.746 1.61 5.933v.096-.005z"/></svg>
                </div>
                <h1 class="text-center">Spotify</h1>
            </button>

        </div>

        <div class="flex flex-col bg-neutral-900 p-2 rounded-lg gap-2">
            <h1 class="font-bold text-lg">{data.output.imagedata.source} Preferences</h1>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2 ">
                <h1 class="mr-auto">Transition</h1>
                <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700 {data.output.imagedata.transition == "slideleft" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "transition", "slideleft", "")}}>Slide left</button>
                <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700 {data.output.imagedata.transition == "slideright" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "transition", "slideright", "")}}>Slide right</button>
                <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700 {data.output.imagedata.transition == "fade" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "transition", "fade", "")}}>Fade</button>
                <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700 {data.output.imagedata.transition == "fadetoblack" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "transition", "fadetoblack", "")}}>Fade to black</button>
                <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700 {data.output.imagedata.transition == "none" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "transition", "none", "")}}>None</button>
            </div>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2">
                <h1 class="mr-auto">Transition time (ms)</h1>
                <input class="shadow-md bg-neutral-700 max-w-96 min-w-24 rounded-md px-1" placeholder="Enter time" bind:value={transitiontime} />
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg" on:click={() => {changeSettings("image", "delayseconds", transitiontime, "")}}>Apply</button>
            </div>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2">
                <h1 class="mr-auto">Presets</h1>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg {data.output.imagedata.patterntype == "0" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "patterntype", "0", "")}}>Diamond</button>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg {data.output.imagedata.patterntype == "1" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "patterntype", "1", "")}}>Bouncing Squares</button>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg {data.output.imagedata.patterntype == "2" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "patterntype", "2", "")}}>Rain</button>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg {data.output.imagedata.patterntype == "3" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "patterntype", "3", "")}}>Side Rain</button>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg {data.output.imagedata.patterntype == "4" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "patterntype", "4", "")}}>Lines</button>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg {data.output.imagedata.patterntype == "5" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "patterntype", "5", "")}}>Scattered Diamond</button>
            </div>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2 {data.output.imagedata.source == "Pexels" ? "" : (data.output.imagedata.source == "Unsplash" ? "" : "hidden")}">
                <h1 class="mr-auto">Queries</h1>
                <input class="shadow-md bg-neutral-700 max-w-96 min-w-24 rounded-md px-1" placeholder="e.g. Modern Painting, City" bind:value={queries} />
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg" on:click={() => {changeSettings("image", "queries", queries, "")}}>Apply</button>
            </div>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2 {data.output.imagedata.source == "Color" ? "" : "hidden"}">
                <h1 class="mr-auto">Color</h1>
                <input class="shadow-md bg-neutral-700 max-w-96 min-w-24 rounded-md px-1" placeholder="HEX code, no '#'" bind:value={color} />
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg" on:click={() => {changeSettings("image", "color", color, "")}}>Color picker</button>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg" on:click={() => {changeSettings("image", "color", color, "")}}>Apply</button>
            </div>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2 {data.output.imagedata.source == "URL" ? "" : "hidden"}">
                <h1 class="mr-auto">Presets</h1>
                <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" on:click={() => {changeSettings("image", "URL", "https://gradiyent.netlify.app/", "")}}>Gradient</button>
                <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" on:click={() => {changeSettings("image", "URL", "https://dvdscreensaver.net/", "")}}>DVD</button>
                <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" on:click={() => {changeSettings("image", "URL", "https://1j01.github.io/pipes", "")}}>Pipes</button>
                <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" on:click={() => {changeSettings("image", "URL", "http://www.chiptune.com/starfield/starfield.html", "")}}>Stars</button>
                <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" on:click={() => {changeSettings("image", "URL", "https://www.newsola.com/#/us/", "")}}>Top News</button>
                <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" on:click={() => {changeSettings("image", "URL", "https://lab.hakim.se/origami/", "")}}>Origami</button>
                <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" on:click={() => {changeSettings("image", "URL", "http://theorigin.net/ablazejs/", "")}}>Ablaze</button>
                <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" on:click={() => {changeSettings("image", "URL", "http://viz.runningwithdata.com/boids/", "")}}>Boids</button>
                <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" on:click={() => {changeSettings("image", "URL", "https://peterned.home.xs4all.nl/demooo/", "")}}>Earth</button>
                <button class="p-1 rounded-md shadow-lg transition-all duration-500 bg-neutral-700" on:click={() => {changeSettings("image", "URL", "https://dvdscreensaver.net/", "")}}>After Dark</button>
            </div>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2 {data.output.imagedata.source == "URL" ? "" : (data.output.imagedata.source == "Image" ? "" : "hidden")}">
                <h1 class="mr-auto">URL</h1>
                <input class="shadow-md bg-neutral-700 max-w-96 min-w-24 rounded-md px-1" placeholder="Enter a URL" bind:value={url} />
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg" on:click={() => {changeSettings("image", "URL", url, "")}}>Apply</button>
            </div>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2 {data.output.imagedata.source == "YouTube" ? "" : "hidden"}">
                <h1 class="mr-auto">YouTube Video ID</h1>
                <input class="shadow-md bg-neutral-700 max-w-96 min-w-24 rounded-md px-1" placeholder="Enter ID" bind:value={ytvidid} />
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg" on:click={() => {changeSettings("image", "ytvidid", ytvidid, "")}}>Apply</button>
            </div>
        </div>

        <div class="flex flex-col bg-neutral-900 p-2 rounded-lg gap-2 mt-2">
            <h1 class="font-bold text-lg">Image Preferences</h1>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2">
                <h1 class="mr-auto">Show/hide data</h1>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 {data.output.imagedata.showdata == "false" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "showdata", "false", "")}}>Off</button>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 {data.output.imagedata.showdata == "true" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "showdata", "true", "")}}>On</button>
            </div>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2">
                <h1 class="mr-auto">Clock type</h1>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 {data.output.imagedata.clocktype == "centerlarge" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "clocktype", "centerlarge", "")}}>Center Large</button>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 {data.output.imagedata.clocktype == "large" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "clocktype", "large", "")}}>Large</button>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 {data.output.imagedata.clocktype == "small" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "clocktype", "small", "")}}>Small</button>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 {data.output.imagedata.clocktype == "false" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "clocktype", "false", "")}}>Off</button>
            </div>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2">
                <h1 class="mr-auto">Weather</h1>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 {data.output.imagedata.weather == "false" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "weather", "false", "")}}>Off</button>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 {data.output.imagedata.weather == "true" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "weather", "true", "")}}>On</button>
            </div>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2">
                <h1 class="mr-auto">Weather location</h1>
                <input class="shadow-md bg-neutral-700 max-w-96 min-w-24 rounded-md px-1" placeholder="Enter city" bind:value={transitiontime} />
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg" on:click={() => {changeSettings("image", "delayseconds", transitiontime, "")}}>Apply</button>
            </div>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2">
                <h1 class="mr-auto">Image data</h1>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 {data.output.imagedata.imagedata == "false" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "imagedata", "false", "")}}>Off</button>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 {data.output.imagedata.imagedata == "true" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "imagedata", "true", "")}}>On</button>
            </div>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2">
                <h1 class="mr-auto">QOTD</h1>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 {data.output.imagedata.qotd == "false" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "qotd", "false", "")}}>Off</button>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 {data.output.imagedata.qotd == "true" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("image", "qotd", "true", "")}}>On</button>
            </div>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2">
                <h1 class="mr-auto">Custom text</h1>
                <input class="shadow-md bg-neutral-700 max-w-96 min-w-24 rounded-md px-1" placeholder="Enter text" bind:value={transitiontime} />
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg" on:click={() => {changeSettings("image", "delayseconds", transitiontime, "")}}>Apply</button>
            </div>
        </div>
    </div>

    <div class="bg-neutral-800 w-full p-2 rounded-lg shadow-xl space-y-2 mt-2">
        <h1 class="text-2xl font-bold">Device Settings</h1>
        
        <div class="flex flex-col bg-neutral-900 p-2 rounded-lg gap-2">
            <h1 class="font-bold text-lg">Frame Orientation</h1>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2">
                <h1 class="mr-auto">Orientation</h1>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 {data.output.settingsdata.frameorientation == "portrait" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("settings", "frameorientation", "portrait", "")}}>Portrait</button>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 {data.output.settingsdata.frameorientation == "landscape" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("settings", "frameorientation", "landscape", "")}}>Landscape</button>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 {data.output.settingsdata.frameorientation == "portrait reversed" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("settings", "frameorientation", "portrait reversed", "")}}>Portrait reversed</button>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg transition-all duration-500 {data.output.settingsdata.frameorientation == "landscape reversed" ? "brightness-110 scale-110" : "brightness-[70%]"}" on:click={() => {changeSettings("settings", "frameorientation", "landscape reversed", "")}}>Landscape reversed</button>
            </div>
        </div>

        <div class="flex flex-col bg-neutral-900 p-2 rounded-lg gap-2">
            <h1 class="font-bold text-lg">Brightness and Display</h1>

            <div class="w-full flex items-center bg-neutral-800 rounded-md p-2 gap-2">
                <input type="range" class="bg-black h-1 rounded-full w-full p-2" />
            </div>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2">
                <h1 class="mr-auto">Auto brightness</h1>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg" on:click={() => {
                    {data.output.imagedata.showdata == "false" ? changeSettings("image", "showdata", "true", "") : changeSettings("image", "showdata", "false", "")}
                }}>Turn on</button>
            </div>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2">
                <h1 class="mr-auto">Backlight toggle</h1>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg" on:click={() => {
                    {data.output.imagedata.showdata == "false" ? changeSettings("image", "showdata", "true", "") : changeSettings("image", "showdata", "false", "")}
                }}>Turn off</button>
            </div>
        </div>

        <div class="flex flex-col bg-neutral-900 p-2 rounded-lg gap-2">
            <h1 class="font-bold text-lg">System</h1>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2 gap-2">
                <h1 class="mr-auto">WiFi - ATT8R7t5m5</h1>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg" on:click={() => {
                    {data.output.imagedata.showdata == "false" ? changeSettings("image", "showdata", "true", "") : changeSettings("image", "showdata", "false", "")}
                }}>WiFi Setup</button>
            </div>

            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2">
                <h1 class="mr-auto">Updates</h1>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg" on:click={() => {changeSettings("image", "update", "update", "")}}>Check for updates</button>
            </div>
            <div class="w-full flex items-center bg-neutral-800 rounded-md pl-2">
                <h1 class="mr-auto">Factory reset</h1>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg" on:click={() => {changeSettings("settings", "factorymode", "true", "")}}>Start</button>
            </div>
        </div>

        <div class="flex flex-col bg-neutral-900 p-2 rounded-lg gap-2">
            <h1 class="font-bold text-lg">Power</h1>

            <div class="w-full flex items-center gap-2">
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg w-full" on:click={() => {changeSettings("settings", "system", "true", "factorymode")}}>Refresh</button>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg w-full" on:click={() => {changeSettings("image", "restart", "", "")}}>Restart</button>
                <button class="bg-neutral-700 p-1 rounded-md shadow-lg w-full" on:click={() => {changeSettings("image", "poweroff", "", "")}}>Turn off</button>
            </div>
        </div>
    </div>
</div>