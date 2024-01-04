<script>
    import { onMount } from "svelte";
    import fs from 'fs/promises';
    import { json } from '@sveltejs/kit'
    import path from 'path'
    import isOnline from 'is-online'

    var foo = false;
    var foo1 = false;
    var foo2 = false;
    var sig1 = 0;
    var sig2 = 1;
    var delay = 2000; //set this to 67 seconds to stay under rate limit

    var boot = true;
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
    var patterntype = "0";

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    var customizationMode = false;
    var config = {};

    var isconn = true;
    
    onMount(async () => {
        fileRead();
        splashScreen();
        sequencer();
        WeatherDaemon();
        
        while (true) {
            foo = !foo;
            await sleep(delay);
            foo1 = !foo1
            foo == true ? sig2+=2 : sig1+=2;
            await sleep(10000);
        }
    })

    //NOTE
    var splash = false;

    async function splashScreen() {
      await sleep(5000);
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
            patterntype = data.output.imagedata.patterntype
            
            if (source == "update" && boot == true) {
              customizationMode = 0;
              const response = await fetch(`/api/image/?category=source&data=Unsplash&subcategory=`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' }
              })
              
            }

            if (source == "update" && boot == false) {
              customizationMode = 1;
              console.log("FDSJFJSDJFSDJF")
            }

            boot = false;

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

    // Animation section

    var screenWidth = 0;
    var bars = 1
    var barscolor = "red"
    var animparams = ""
    var prevpat = "";

    var sequencervar = ["","hidden","hidden","hidden","hidden","hidden","hidden","hidden","hidden",]
    async function sequencer() {
      if (screenWidth > 480) {
        bars = screenWidth / 480
        bars = Math.ceil(bars)
      }
      while (true) {
        if (source != "Pattern" || prevpat != patterntype) {
          sequencervar = ["","hidden","hidden","hidden","hidden","hidden","hidden","hidden","hidden",]
        }

        prevpat = patterntype;
        let asdf = ""
        sequencervar.shift()
        sequencervar[8] = asdf
        await sleep(2000)
      }
    }

    // Weather

    var weather_tempToday = 0;
    var weather_celsius = false;
    var weather_highToday = 0;
    var weather_lowToday = 0;
    var weather_tomorrow = 0;

    async function WeatherDaemon() {

      while (true) {


        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=42.0334&longitude=-88.0834&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=America%2FChicago&forecast_days=3`, {
          method: 'GET'
        })
    
        const data = await response.json();
                
        console.log();
        weather_tempToday = Math.round(data.current.temperature_2m)
        weather_highToday = Math.round(data.daily.temperature_2m_max[0]) 
        weather_lowToday = Math.round(data.daily.temperature_2m_min[0])
        weather_tomorrow = Math.round((data.daily.temperature_2m_max[1] + data.daily.temperature_2m_min[0]) / 2)

        console.log()

        // await sleep(900000);
        await sleep(100000);
      }
      
    }

</script>

<!-- Data overlay -->
<div class="absolute w-full h-[100vh] overflow-clip">
  <!-- Top -->
  <div class="absolute z-40 left-0 {(clocktype == "false" && imagedata == "false") ? "opacity-0" : ""} {clocktype == "centerlarge" ? "h-[100vh]" : "h-40"} {splash == true ? "opacity-0" : ""} w-full bg-transparent transition-all duration-500 {customizationMode == true ? "opacity-0" : (
    showdata == "true" ? "" : "opacity-0"
    )}" style="background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(255,255,255,0) 100%);">
    <div class="flex w-full p-10 text-white">
      
      <h1 class="font-bold text-black transition-all duration-500 {clocktype == "small" ? "text-4xl mr-auto" : ""} {clocktype == "large" ? "text-7xl mr-auto" : ""} {clocktype == "centerlarge" ? "fixed top-0 left-0 w-full h-[100vh] flex flex-col text-9xl text-center" : ""} {clocktype == "false" ? "opacity-0 mr-auto" : "opacity-100"}">
        <h1 class="{clocktype == "centerlarge" ? "my-auto" : ""}">12:52 PM</h1>
        <div class="" />
      </h1>
      <mb class="flex flex-col text-right text-2xl transition-all duration-500 {imagedata == "true" ? "opacity-100" : "opacity-0"}">Rodrigo Williamson - Forests of Alberta
        <h1 class="text-lg font-semibold opacity-[65%]">{source}</h1>
      </mb>

    </div>
    
  </div>

  <!-- Bottom -->
  <div class="absolute z-40 bottom-0 left-0 {(qotd == "false" && weather == "false") ? "opacity-0" : ""} {splash == true ? "opacity-0" : ""} w-full bg-transparent transition-all duration-500 {customizationMode == true ? "opacity-0" : (
    showdata == "true" ? "" : "opacity-0"
    )}" style="background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.8) 100%);">
    <div class="flex w-full p-10 text-white">
      
      <h1 class="w-full transition-all duration-500 {qotd == "false" ? "opacity-0 mr-auto" : "opacity-100"}">
        <h1 class="text-2xl">Even if you are not ready for the day, it cannot always be night.</h1>
        <h1 class="text-lg opacity-[65%]">Donda West</h1>
      </h1>

      <h1 class=" font-bold w-full text-right transition-all duration-500 {weather == "false" ? "opacity-0 mr-auto" : "opacity-100"}">
        <div class="flex items-center text-4xl gap-2">
          <div class="flex flex-col text-left ml-auto">
          
            <div class="flex gap-2">
              <h1 class="text-sm opacity-[65%]">HI: {weather_highToday}</h1>
              <h1 class="text-sm opacity-[65%]">LO: {weather_lowToday}</h1>
            </div>
            <div class="flex items-center gap-2">
              <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clip-rule="evenodd" />
              </svg>
              <h1>{weather_tempToday}°</h1>
            </div>

          </div>
          
          <div class="h-20 w-[2px] rounded-full bg-white opacity-[65%] mx-2" />

          <div class="flex flex-col text-left">
            
            <h1 class="text-sm opacity-[65%]">TOMORROW</h1>
            <div class="flex items-center gap-2">
              <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
              <h1>{weather_tomorrow}°</h1>
            </div>

          </div>
        </div>
      </h1>
      
    </div>
    
  </div>
</div>

<!-- Logo -->
<div bind:clientWidth={screenWidth} class="w-full h-[100vh] fixed top-0 left-0 bg-white z-30 flex flex-col transition-all duration-500 {splash == true ? "" : "opacity-0"}">
    <div class="rounded-full shadow-lg my-auto mx-auto bg-neutral-800 p-5 flex space-x-2 text-white items-center animate-fadein">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
          <path fill-rule="evenodd" d="M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l1.872-1.092a.75.75 0 1 1 .756 1.295l-1.878 1.096V15a.75.75 0 0 1-1.5 0v-1.82l-1.878-1.095a.75.75 0 0 1-.27-1.025ZM3 13.5a.75.75 0 0 1 .75.75v1.82l1.878 1.095a.75.75 0 1 1-.756 1.295l-2.25-1.312a.75.75 0 0 1-.372-.648v-2.25A.75.75 0 0 1 3 13.5Zm18 0a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.372.648l-2.25 1.312a.75.75 0 1 1-.756-1.295l1.878-1.096V14.25a.75.75 0 0 1 .75-.75Zm-9 5.25a.75.75 0 0 1 .75.75v.944l1.122-.654a.75.75 0 1 1 .756 1.295l-2.25 1.313a.75.75 0 0 1-.756 0l-2.25-1.313a.75.75 0 1 1 .756-1.295l1.122.654V19.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
      </svg>
      <h1 class="font-bold text-white text-3xl">
          DigiFrame
      </h1>
    </div>
</div>

<!-- Sources -->
<div class="absolute flex w-full h-[100vh] overflow-clip transition-all duration-500 left-0 {customizationMode == true ? "scale-75 rounded-4xl shadow-xl rounded-[2rem] -top-96" : "scale-100 top-0"}">
  <div class="relative overflow-clip shadow-lg transition-all duration-500 {source == "Unsplash" ? "w-full scale-100" : "scale-0 -top-full"}">
    {#if source == "Unsplash"}
    {#if !foo1}
    <img src={"https://source.unsplash.com/random/1280x720?sig="+sig2+"&?"+queries+"&?orientation=landscape"} class="object-cover absolute w-full h-full transition-all shadow-lg duration-[1.5s] z-10 {foo == true ? "-translate-x-[50%] brightness-50" : "translate-x-[0%]"}" />
    <img src={"https://source.unsplash.com/random/1280x720?sig="+sig1+"&?"+queries+"&?orientation=landscape"} class="object-cover absolute w-full h-full transition-all shadow-lg duration-[1.5s] z-20 {foo == true ? "translate-x-[0%]" : "translate-x-[100%]"}" />
    {:else}
    <img src={"https://source.unsplash.com/random/1280x720?sig="+sig1+"&?"+queries+"&?orientation=landscape"} class="object-cover absolute w-full h-full transition-all shadow-lg duration-[1.5s] z-10 {foo == false ? "-translate-x-[50%] brightness-50" : "translate-x-[0%]"}" />
    <img src={"https://source.unsplash.com/random/1280x720?sig="+sig2+"&?"+queries+"&?orientation=landscape"} class="object-cover absolute w-full h-full transition-all shadow-lg duration-[1.5s] z-20 {foo == false ? "translate-x-[0%]" : "translate-x-[100%]"}" />
    {/if}
    {/if}
  </div>

  <!--NOTE-->
  <div class="relative overflow-clip shadow-lg transition-all duration-500 bg-blue-900 {source == "Color" ? "w-full scale-100" : "scale-0 -top-full"}">   
  </div>

  <!--  -->
  <div class="relative overflow-clip shadow-lg transition-all duration-500 bg-black {source == "YouTube" ? "w-full" : "scale-0 -top-full"}">   
    {#if source == "YouTube"}
    <iframe class="ytv w-full h-[100vh]" src={'https://www.youtube.com/embed/'+ ytvidid +'?autoplay=1&controls=0&loop=1&mute=1&playsinline=1&playlist=' + ytvidid} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    {/if}
  </div>
  <!--  -->

  <!--NOTE-->
  <div class="relative overflow-clip shadow-lg transition-all duration-500 bg-black {source == "Pattern" ? "w-full" : "scale-0 -top-full"}">   
    
    <!-- Different gradients to test with:
      linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(194,0,0,1) 12.5%, rgba(128,0,0,1) 25%, rgba(194,0,0,1) 37.5%, rgba(255,0,0,1) 50%, rgba(194,0,0,1) 62.5%, rgba(128,0,0,1) 75%, rgba(194,0,0,1) 88%, rgba(255,0,0,1) 100%);
      linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(128,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(128,0,0,1) 37.5%, rgba(255,0,0,1) 50%, rgba(128,0,0,1) 62.5%, rgba(0,0,0,1) 75%, rgba(128,0,0,1) 88%, rgba(255,0,0,1) 100%);
      blue
      linear-gradient(180deg, rgba(0,104,126,1) 0%, rgba(0,54,65,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,54,65,1) 37.5%, rgba(0,104,126,1) 50%, rgba(0,54,65,1) 62.5%, rgba(0,0,0,1) 75%, rgba(0,54,65,1) 88%, rgba(0,104,126,1) 100%);
      linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);
    -->
    
    {#if patterntype == "0"}
      <div class="w-full h-[100vh] bg-black flex">
        {#if source == "Pattern"}
        {#each Array(bars) as i}
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[0]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[1]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[2]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[3]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[4]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[5]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[6]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[5]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[4]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[3]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[2]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[1]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        {/each}  
        {/if}
      </div>

    {:else if patterntype == "1"}
      <div class="absolute z-10 w-full v-[100vh] bg-white">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
      </div>

    {:else if patterntype == "2"}
      <div class="w-full h-[100vh] bg-black flex rotate-180">
        {#if source == "Pattern"}
        {#each Array(bars) as i}
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[20px] h-[200vh] animate-scalepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,55,66,1) 65%, rgba(0,156,189,1) 100%);"></div>
        {/each}  
        {/if}
      </div>

    {:else if patterntype == "3"}
      <div class="w-full h-[100vh] bg-black flex flex-col rotate-180">
        {#if source == "Pattern"}
        {#each Array(bars) as i}
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        <div class="h-[20px] w-[200vw] animate-scalexpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
        {/each}  
        {/if}
      </div>

    {:else if patterntype == "4"}
      <div class="w-full h-[100vh] bg-black flex flex-col rotate-180">
          {#if source == "Pattern"}
          {#each Array(bars) as i}
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          <div class="h-[20px] w-[200vw] animate-scalelpreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,156,189,1) 100%);"></div>
          {/each}  
          {/if}
      </div>
    {:else if patterntype == "5"}
    
      <div class="w-full h-[100vh] bg-black flex">
        {#if source == "Pattern"}
        {#each Array(bars) as i}
        
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        <div class="w-[40px] h-[200vh] transition-all duration-[2s] {animparams} animate-pulsepreset {sequencervar[Math.floor(Math.random() * 8)]}" style="background: linear-gradient(180deg, rgba(0,156,189,1) 0%, rgba(0,125,150,1) 12.5%, rgba(0,87,106,1) 25%, rgba(0,125,150,1) 37.5%, rgba(0,156,189,1) 50%, rgba(0,125,150,1) 62.5%, rgba(0,87,106,1) 75%, rgba(0,125,150,1) 88%, rgba(0,156,189,1) 100%);"></div>
        
        {/each}  
        {/if}
      </div>

    {/if}

  </div>

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

<!-- Logo 2 -->
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

<!-- Update screen -->
<div class="absolute bottom-0 flex w-full duration-500 transition-all {customizationMode == true ? "opacity-100" : "opacity-0"}" on:click={() => {customizationMode = false}}>
    <div class="mx-10 w-full">
        <div class="{source == "update" ? "" : "hidden"} rounded-3xl my-10 shadow-lg mx-auto bg-neutral-800 gap-5 p-5 flex flex-col text-white items-center">
          
          <svg class="w-10 h-10 animate-spin" fill="#FFFFFF" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">

          <g>

          <path d="M8,1V2.8A5.2,5.2,0,1,1,2.8,8H1A7,7,0,1,0,8,1Z"/>

          </g>

          </svg>

          <h1 class="font-bold text-white text-5xl text-center">
              Updating...
          </h1>
          <div class="w-full flex gap-2 items-center">
              <div class="text-2xl font-bold bg-red-500 p-1 w-10 h-10 text-center rounded-full ml-auto">
                  !
              </div>
              <h1 class="text-white text-xl text-center mr-auto font-bold">
                  Do not unplug or turn off your frame. This can take a while.
              </h1>
          </div>
          <div class="w-full flex gap-2 items-center">
              <h1 class="text-white text-xl text-center mx-auto">
                  Your frame will reboot automatically to complete the update.
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
                  DFY5-6F19
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

<!-- No connection screen -->
<div class="{ isconn == true ? "opacity-0" : "opacity-100" } transition-all duration-500 overflow-clip">
  <div class="bg-neutral-700 w-full h-[100vh]">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[50vw] scale-[300%] text-neutral-900">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
    </svg>
  </div>
  
  <div class="absolute z-40 bottom-0 flex w-full duration-500 transition-all">
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
                    DFY5-6F19
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

  .bg {
    animation:slide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
    bottom:0;
    left:-50%;
    opacity:.5;
    position:fixed;
    right:-50%;
    top:0;
    z-index:-1;
  }

  .bg2 {
    animation-direction:alternate-reverse;
    animation-duration:4s;
  }

  .bg3 {
    animation-duration:5s;
  }

  .content {
    background-color:rgba(255,255,255,.8);
    border-radius:.25em;
    box-shadow:0 0 .25em rgba(0,0,0,.25);
    box-sizing:border-box;
    left:50%;
    padding:10vmin;
    position:fixed;
    text-align:center;
    top:50%;
    transform:translate(-50%, -50%);
  }

  @keyframes slide {
    0% {
      transform:translateX(-25%);
    }
    100% {
      transform:translateX(25%);
    }
  }

</style>