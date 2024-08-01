<template>
  <section class="flex justify-center mt-9">
    <router-link to="/" class="bg-black p-2 rounded-sm text-white font-black text-4xl h-14 w-14 absolute left-1 top-1 hover:scale-95"><=</router-link>
        <div class="bg-red-600 rounded-lg shadow-md p-4 mb-4 gap-4 flex flex-col w-1/2">
            <div class="text-black text-4xl font-bold italic">
              FACTOS DE CHUCK NURRIS
            </div>
            <div 
        
              v-for="(fact, index) in facts"
              :key="index"    
              class="bg-white border-l-4 rounded-md  border-yellow-500 pl-4 flex flex-col gap-5"        
              >
                <div class="text-lg font-black text-gray-800">Fact Chuck {{ index + 1 }}</div>
                <div class="text-sm text-gray-600 mt-1"> {{ fact }} </div>
                <div class="flex items-center mt-4">
                  <button @click="refreshFact(index)" class="text-gray-500 m-2 bg-white font-black text-xs ml-auto">Refresh</button>
                </div>
            </div>
            <router-link to="/" class="bg-white py-2 text-black rounded-2xl">BACK</router-link>
        </div>
  </section>  
</template>
<script setup lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

const url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0aed54e031msh4fdc0fc329eb309p1cdb43jsn0e00643695ef',
		'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
		accept: 'application/json'
	}
};
const facts = ref<string[]>(new Array(5).fill('Loading...'))

const fetchFact = async (index:number) => {
  try{
    const response = await fetch(url,options)
    if (!response.ok) {
      throw new Error('HTTP error! status: ${response.status}')
      }
      const result = await response.json()
      facts.value[index] = result.value
  } catch (error){
    console.error('Error fetching data', error)
    facts.value[index] = 'error loading fact'
  }
};
const refreshFact = (index:number) => {
  facts.value[index] = 'Loading...'
  fetchFact(index)
};

onMounted(()=>{
  for(let i = 0; i < facts.value.length; i++) {
    fetchFact(i);
  }
});

</script>