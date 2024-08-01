<template>
    <div class="flex items-center justify-center h-screen">
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl hover:bg-[#E8E5E5]">
            
            <img class="w-full hover:opacity-70" :src="props.imagen" alt="Manarola, Italy">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 hover:text-2xl">{{ props.title }}</div>
                    <p class="text-gray-700 text-base">
                    {{ props.descripcion }}
                     </p>
                </div>
            <div class="px-6 pt-4 pb-2 flex justify-between items-center">
                <router-link :to="props.route" class="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-2xl">Start</router-link>
            </div>
        </div>
    </div> 
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';


interface Props {
  title: string;
  descripcion: string;
  imagen: string;
  route: string;
}

const props = defineProps<Props>();
const router = useRouter();


</script>
