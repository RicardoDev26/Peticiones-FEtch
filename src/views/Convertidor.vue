<template>
   <router-link to="/" class="bg-black p-2 rounded-sm text-white font-black text-4xl h-14 w-14 absolute left-1 top-1 hover:scale-95"><=</router-link>
    <div class="min-h-screen flex flex-col items-center justify-center bg-white">
      <div class="bg-red-400 p-6 rounded-lg shadow-md w-80">
        <h1 class="text-2xl font-bold text-black mb-4 text-center">Text to Speech</h1>
        <textarea
          v-model="text"
          class="w-full p-2 border border-black rounded mb-4"
          placeholder="Enter text here..."
          rows="6"
        ></textarea>
        <button
          @click="convertTextToSpeech"
          class="w-full bg-white text-black font-bold py-2 rounded hover:bg-blue-600"
        >
          Convert
        </button>
        <div v-if="audioUrl" class="mt-4">
          <audio :src="audioUrl" id="audioUrl" controls class="w-full"></audio>
        </div>
      </div>
      <router-link to="/" class="mt-5 bg-red-500 w-40 py-3 text-white rounded-2xl">BACK</router-link>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';
const text = ref ('')
const audioUrl = ref (null)

      async function convertTextToSpeech() {
        const url = 'https://voicerss-text-to-speech.p.rapidapi.com/';
        const data = new FormData()
        data.append('src', text.value)
        data.append('hl', 'en-us')
        data.append('r', '0')
        data.append('c', 'mp3')
        data.append('f', '8khz_8bit_mono')
  
        const options = {
          method: 'POST',
          headers: {
            'x-rapidapi-key': '0aed54e031msh4fdc0fc329eb309p1cdb43jsn0e00643695ef',
            'x-rapidapi-host': 'voicerss-text-to-speech.p.rapidapi.com',
          },
          body: data,
        };
  
        try {
          const response = await fetch(url, options)
          const result = await response.blob()
          audioUrl.value = URL.createObjectURL(result)
        } catch (error) {
          console.error(error)
        }
      };  

  </script>
  
  <style scoped>
  </style>
  