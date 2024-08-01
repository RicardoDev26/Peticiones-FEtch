<template>
    <div class="mt-9">
        <div class="italic text-7xl font-black text-black">PRUEBA DE PETICIONES FETCH</div>
        <div class="flex justify-center gap-7">
            <Views 
            title="Chuck Norris Facts"
            descripcion="En el siguiente apartado vendran 5 factos de chuck norris"
            imagen="https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_621/MTkwNTc1OTc4ODIwMzQ3MDA1/chuck-norris-jokes-1.webp"
            route="/ChuckNorris"
            />
            <Views 
            imagen="https://www.volumetricatrading.com/dyn-res/img-blog/14/grfico-diario-de-velas-japonesas-sp-500.png"
            title="Grafica de velas"
            descripcion="Mostrara una grafica sobre la economia de bitcoin"
            route="/CryptoCoinValue"
            />
            <Views 
            imagen="https://www.icesi.edu.co/blogs_estudiantes/miguelrenza/files/2021/09/texto-a-voz.jpg"
            title="Convertidor de texto a voz"
            descripcion="Tendran un convertidor donde podras convertir cualqueir texto a voz"
            route="/Convertidor"
            />
         </div>  
    </div>
</template>
<script setup>
import Views from '../components/Views.vue'
</script>