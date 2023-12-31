<script>
    import { onMount } from "svelte";
    import fs from 'fs/promises';
    import { json } from '@sveltejs/kit'
    import path from 'path'
    import isOnline from 'is-online';

    var foo = false;
    var foo1 = false;
    var foo2 = false;
    var sig1 = 0;
    var sig2 = 1;
    var delay = 2000; //set this to 67 seconds to stay under rate limit

    var source = "";
    var transition = "";
    var queries = "";
    var delayseconds = "";
    var color = "";
    var url = "";
    var showdata = "false";
    var clocktype = "";
    var weather = "";
    var imagedata = "";
    var qotd = "";
    var ytvidid = "";
    var quote = "";

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    var customizationMode = false;
    var config = {};

    var isconn = true;
    
    onMount(async () => {
        fileRead();
        splashScreen();
        
        while (true) {
            foo = !foo;
            await sleep(delay);
            foo1 = !foo1
            foo == true ? sig2+=2 : sig1+=2;
            await sleep(10000);
        }
    })

    var splash = true;

    async function splashScreen() {
      await sleep(4000);
      if (source == "update") {
        const response = await fetch(`/api/${"image"}/?category=${"source"}&data=${"Unsplash"}&subcategory=${""}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        })
      }
      await sleep(1000);
      splash = false;
    }
    
    async function fileRead() {
        while (true) {
            const response = await fetch(`/api/settings`, {
                method: 'GET'
            })
        
            const data = await response.json();
                    
            console.log(data);
            
            if (data.output.settingsdata.factorymode == "true") {
                customizationMode = true;
            } else {
                customizationMode = false;
            }

            source = data.output.imagedata.source;
            transition = data.output.imagedata.transition;
            queries = data.output.imagedata.queries;
            delayseconds = data.output.imagedata.delayseconds;
            color = data.output.imagedata.color;
            url = data.output.imagedata.URL;
            showdata = data.output.imagedata.showdata;
            clocktype = data.output.imagedata.clocktype;
            weather = data.output.imagedata.weather;
            imagedata = data.output.imagedata.imagedata;
            qotd = data.output.imagedata.qotd;
            ytvidid = data.output.imagedata.ytvidid

            if (source == "update") {
              customizationMode = 1;
            }

            isconn = await isOnline();

            await sleep(1000);
        }
    }

    var pause = false;
    var offsetAdd = 60;
    var otheroffset = 0;

    function changeSel(updown) {
        if (updown == "up") {
        selected <= 0 ? selected = 0 : selected--;
        } else {
        selected >= 2 ? selected = 2 : selected++;
        }
    }
    
    var selected = 0;
    var selectedNames = ["Unsplash", "Color", "Custom Image"];

</script>

<div class="absolute z-40 left-0 {clocktype == "centerlarge" ? "h-[100vh]" : "h-40"} {splash == true ? "opacity-0" : ""} w-full bg-transparent transition-all duration-500 {customizationMode == true ? "opacity-0" : (
    showdata == "true" ? "" : "opacity-0"
    )}" style="background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(255,255,255,0) 100%);">
    <div class="flex w-full p-10 text-white">
        
        <h1 class="font-bold transition-all duration-500 {clocktype == "small" ? "text-4xl mr-auto" : ""} {clocktype == "large" ? "text-7xl mr-auto" : ""} {clocktype == "centerlarge" ? "fixed top-0 left-0 w-full h-[100vh] flex flex-col text-9xl text-center" : ""} {clocktype == "false" ? "opacity-0 mr-auto" : "opacity-100"}"><h1 class="{clocktype == "centerlarge" ? "my-auto" : ""}">12:52 PM</h1></h1>
        <mb class="flex flex-col text-right text-2xl transition-all duration-500 {imagedata == "true" ? "opacity-100" : "opacity-0"}">Rodrigo Williamson - Forests of Alberta
            <h1 class="text-lg font-semibold opacity-[65%]">{source}</h1>
        </mb>

    </div>
</div>

<div class="w-full h-[100vh] fixed top-0 left-0 bg-white z-30 flex flex-col transition-all duration-500 {splash == true ? "" : "opacity-0"}">
    <div class="rounded-full shadow-lg my-auto mx-auto bg-neutral-800 p-5 flex space-x-2 text-white items-center animate-fadein">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
          <path fill-rule="evenodd" d="M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l1.872-1.092a.75.75 0 1 1 .756 1.295l-1.878 1.096V15a.75.75 0 0 1-1.5 0v-1.82l-1.878-1.095a.75.75 0 0 1-.27-1.025ZM3 13.5a.75.75 0 0 1 .75.75v1.82l1.878 1.095a.75.75 0 1 1-.756 1.295l-2.25-1.312a.75.75 0 0 1-.372-.648v-2.25A.75.75 0 0 1 3 13.5Zm18 0a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.372.648l-2.25 1.312a.75.75 0 1 1-.756-1.295l1.878-1.096V14.25a.75.75 0 0 1 .75-.75Zm-9 5.25a.75.75 0 0 1 .75.75v.944l1.122-.654a.75.75 0 1 1 .756 1.295l-2.25 1.313a.75.75 0 0 1-.756 0l-2.25-1.313a.75.75 0 1 1 .756-1.295l1.122.654V19.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
      </svg>
      <h1 class="font-bold text-white text-3xl">
          DigiFrame
      </h1>
    </div>
</div>

<div class="absolute flex w-full h-[100vh] overflow-clip transition-all duration-500 left-0 {customizationMode == true ? "scale-75 rounded-4xl shadow-xl rounded-[2rem] -top-96" : "scale-100 top-0"}">
  <div class="relative overflow-clip shadow-lg transition-all duration-500 {source == "Unsplash" ? "w-full scale-100" : "scale-0 -top-full"}">
        {#if !foo1}
        <img src={"https://source.unsplash.com/random/3840x2160?sig="+sig2+"&?"+queries+"&?orientation=landscape"} class="object-cover absolute w-full h-full transition-all shadow-lg duration-[1.5s] z-10 {foo == true ? "-translate-x-[50%] brightness-50" : "translate-x-[0%]"}" />
        <img src={"https://source.unsplash.com/random/3840x2160?sig="+sig1+"&?"+queries+"&?orientation=landscape"} class="object-cover absolute w-full h-full transition-all shadow-lg duration-[1.5s] z-20 {foo == true ? "translate-x-[0%]" : "translate-x-[100%]"}" />
        {:else}
        <img src={"https://source.unsplash.com/random/3840x2160?sig="+sig1+"&?"+queries+"&?orientation=landscape"} class="object-cover absolute w-full h-full transition-all shadow-lg duration-[1.5s] z-10 {foo == false ? "-translate-x-[50%] brightness-50" : "translate-x-[0%]"}" />
        <img src={"https://source.unsplash.com/random/3840x2160?sig="+sig2+"&?"+queries+"&?orientation=landscape"} class="object-cover absolute w-full h-full transition-all shadow-lg duration-[1.5s] z-20 {foo == false ? "translate-x-[0%]" : "translate-x-[100%]"}" />
        {/if}
  </div>

  <div class="relative overflow-clip shadow-lg transition-all duration-500 bg-blue-900 {source == "Color" ? "w-full scale-100" : "scale-0 -top-full"}">   
  </div>

  <!-- {#if source == "YouTube"} -->
  <div class="relative overflow-clip shadow-lg transition-all duration-500 bg-black {source == "YouTube" ? "w-full" : "scale-0 -top-full hidden"}">   
    <iframe class="ytv w-full h-[100vh]" src={'https://www.youtube.com/embed/'+ ytvidid +'?autoplay=1&controls=0&loop=1&mute=1&playsinline=1&playlist=' + ytvidid} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  </div>
  <!-- {/if} -->

  <!-- Fun ones: https://dvdscreensaver.net/ - https://gradiyent.netlify.app/ -->
  <div class="relative overflow-clip shadow-lg transition-all duration-500 bg-black {source == "URL" ? "w-full scale-100" : "scale-0 -top-full hidden"}">   
    {#if source == "URL"}
    <iframe class="w-full h-[100vh]" src="{url}"></iframe>
    {/if}
    </div>

    <div class="relative overflow-clip shadow-lg transition-all duration-500 bg-black {source == "Image" ? "w-full scale-100" : "scale-0 -top-full"}">   
    <img class="object-cover absolute w-full h-full transition-all shadow-lg duration-[1.5s]" src="{url}" />
    </div>  
  
</div>



<!-- 
    
    <div class="absolute right-0 flex h-[100vh] duration-500 transition-all {customizationMode == true ? "opacity-100" : "opacity-0"}">
      <div class="rounded-full mx-10 shadow-lg my-auto bg-neutral-800 p-3 gap-3 flex flex-col">
        <button class="rounded-full bg-red-500 text-white p-4 transition-all duration-200 hover:scale-110 hover:bg-red-400"
          on:click={() => {customizationMode = false}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
    
        <button class="rounded-full bg-blue-500 text-white p-4 transition-all duration-200 hover:scale-110 hover:bg-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>
    
    <div class="absolute left-0 flex h-[100vh] duration-500 transition-all {customizationMode == true ? "opacity-100" : "opacity-0"}">
      <div class="rounded-full mx-10 shadow-lg my-auto bg-neutral-800 p-3 gap-3 flex flex-col">
        <button class="rounded-full bg-blue-500 text-white p-4 transition-all duration-200 hover:scale-110 hover:bg-blue-400"
          on:click={() => {changeSel("up")}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
        
        <button class="rounded-full bg-blue-500 text-white p-4 transition-all duration-200 hover:scale-110 hover:bg-blue-400"
          on:click={() => {changeSel("down")}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>
    </div>
 -->

<div class="absolute top-0 flex w-full duration-500 transition-all {customizationMode == true ? "opacity-100" : "opacity-0"}">
  <div class="rounded-full my-10 shadow-lg mx-auto bg-neutral-800 p-5 flex space-x-2 text-white items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
        <path fill-rule="evenodd" d="M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l1.872-1.092a.75.75 0 1 1 .756 1.295l-1.878 1.096V15a.75.75 0 0 1-1.5 0v-1.82l-1.878-1.095a.75.75 0 0 1-.27-1.025ZM3 13.5a.75.75 0 0 1 .75.75v1.82l1.878 1.095a.75.75 0 1 1-.756 1.295l-2.25-1.312a.75.75 0 0 1-.372-.648v-2.25A.75.75 0 0 1 3 13.5Zm18 0a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.372.648l-2.25 1.312a.75.75 0 1 1-.756-1.295l1.878-1.096V14.25a.75.75 0 0 1 .75-.75Zm-9 5.25a.75.75 0 0 1 .75.75v.944l1.122-.654a.75.75 0 1 1 .756 1.295l-2.25 1.313a.75.75 0 0 1-.756 0l-2.25-1.313a.75.75 0 1 1 .756-1.295l1.122.654V19.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
    </svg>
    <h1 class="font-bold text-white text-3xl">
        DigiFrame
    </h1>
  </div>
</div>

<div class="absolute bottom-0 flex w-full duration-500 transition-all {customizationMode == true ? "opacity-100" : "opacity-0"}" on:click={() => {customizationMode = false}}>
    <div class="mx-10 w-full">
        <div class="{source == "update" ? "" : "hidden"} rounded-3xl my-10 shadow-lg mx-auto bg-neutral-800 gap-5 p-5 flex flex-col text-white items-center">
          <h1 class="font-bold text-white text-5xl text-center">
              System is updating...
          </h1>
          <div class="w-full flex gap-2 items-center">
              <div class="text-2xl font-bold bg-red-500 p-1 w-10 h-10 text-center rounded-full ml-auto">
                  !
              </div>
              <h1 class="text-white text-xl text-center mr-auto font-bold">
                  Do NOT unplug or turn off your frame.
              </h1>
          </div>
        </div>
      
        <div class="{source == "update" ? "hidden" : ""} rounded-3xl my-10 shadow-lg mx-auto bg-neutral-800 gap-5 p-5 flex flex-col text-white items-center">
          <h1 class="font-bold text-white text-5xl text-center">
              Let's get set up.
          </h1>
          <div class="w-full flex gap-2 items-center">
              <div class="text-2xl font-bold bg-neutral-600 p-1 w-10 h-10 text-center rounded-full ml-auto">
                  1
              </div>
              <h1 class="text-white text-xl text-center mr-auto">
                  Use another device to connect to the WiFi network: <b>DigiFrame-313</b> 
              </h1>
          </div>
          <div class="w-full flex gap-2 items-center">
              <div class="text-2xl font-bold bg-neutral-600 p-1 w-10 h-10 text-center rounded-full ml-auto">
                  2
              </div>
              <h1 class="text-white text-xl text-center mr-auto">
                  Enter the code show below into the DigiFrame app:
              </h1>
          </div>
          <div class="w-full flex gap-2 items-center">
              <div class="text-4xl font-bold text-center rounded-full mx-auto">
                  3C25-6F89
              </div>
          </div>
          <div class="w-full flex gap-2 items-center">
              <div class="text-2xl font-bold bg-neutral-600 p-1 w-10 h-10 text-center rounded-full ml-auto">
                  3
              </div>
              <h1 class="text-white text-xl text-center mr-auto">
                  Finish setup in the DigiFrame app.
              </h1>
          </div>
        </div>
    </div>
</div>

<div class="{ isconn == true ? "opacity-0" : "opacity-100" } transition-all duration-500 overflow-clip">
  <div class="bg-neutral-700 w-full h-[100vh]">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[50vw] scale-[300%] text-neutral-900">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
    </svg>
  </div>
  
  <div class="absolute bottom-0 flex w-full duration-500 transition-all">
      <div class="mx-10 w-full">
          <div class="rounded-3xl my-10 shadow-lg mx-auto bg-neutral-800 gap-5 p-5 flex flex-col text-white items-center">
            <h1 class="font-bold text-white text-5xl text-center">
                Internet connection lost.
            </h1>
            <h1>If you need to change the internet settings on your DigiFrame, you can follow these steps:</h1>
            <div class="w-full flex gap-2 items-center">
                <div class="text-2xl font-bold bg-neutral-600 p-1 w-10 h-10 text-center rounded-full ml-auto">
                    1
                </div>
                <h1 class="text-white text-xl text-center mr-auto">
                    Use another device to connect to the WiFi network: <b>DigiFrame-313</b> 
                </h1>
            </div>
            <div class="w-full flex gap-2 items-center">
                <div class="text-2xl font-bold bg-neutral-600 p-1 w-10 h-10 text-center rounded-full ml-auto">
                    2
                </div>
                <h1 class="text-white text-xl text-center mr-auto">
                    Open a browser and enter the code show below into the webpage:
                </h1>
            </div>
            <div class="w-full flex gap-2 items-center">
                <div class="text-4xl font-bold text-center rounded-full mx-auto">
                    3C25-6F89
                </div>
            </div>
            <div class="w-full flex gap-2 items-center">
                <div class="text-2xl font-bold bg-neutral-600 p-1 w-10 h-10 text-center rounded-full ml-auto">
                    3
                </div>
                <h1 class="text-white text-xl text-center mr-auto">
                    On the webpage, configure WiFi settings to reconnect your frame.
                </h1>
            </div>
          </div>
      </div>
  </div>
</div>

<style>
    
.ytv {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100vw;
        height: 100vh;
        transform: translate(-50%, -50%);

        @media (min-aspect-ratio: 16/9) {
        height: 56.25vw
        }

        @media (max-aspect-ratio: 16/9) {
        width: 177.78vh
        }
    }

</style>