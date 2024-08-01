<template>
   <router-link to="/" class="bg-black p-2 rounded-sm text-white font-black text-4xl h-14 w-14 absolute z-10 left-1 top-1 hover:scale-95"><=</router-link>
  <section class="w-full flex justify-center gap-4 h-full">
    <div class="w-3/4 h-full">
      <div id="plotly-chart" class="h-full bg-red-400"></div>
    </div>
    <div class="w-1/4">
      <div class="bg-red-600 shadow-md rounded-lg w-full p-6">
        <h1 class="text-2xl font-black mb-4">MSFT Stock Data</h1>
        <div id="stockData" class="space-y-4">
          <div v-for="data in stockData" :key="data.date" class="bg-gray-50 p-4 rounded-lg shadow">
            <h2 class="text-xl font-semibold">{{ data.date }}</h2>
            <p>Open: {{ data.open }}</p>
            <p>High: {{ data.high }}</p>
            <p>Low: {{ data.low }}</p>
            <p>Close: {{ data.close }}</p>
          </div>
        </div>
        <router-link to="/" class="bg-white w-full text-black rounded-2xl px-4 py-2 mt-6">BACK</router-link>
      </div>
    </div>  
  </section> 
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Plotly from 'plotly.js-dist';

const url = 'https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&datatype=json'
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '0aed54e031msh4fdc0fc329eb309p1cdb43jsn0e00643695ef',
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com'
  }
}

const stockData = ref([])

async function fetchStockData() {
  try {
    const response = await fetch(url, options)
    const result = await response.json()
    displayStockData(result)
    plotStockData(result)
  } catch (error) {
    console.error(error)
  }
}

function displayStockData(data) {
  const timeSeries = data['Time Series (Daily)']
  if (!timeSeries) {
    stockData.value = [{ date: 'Error retrieving stock data', open: '-', high: '-', low: '-', close: '-'}]
    return
  }

  const dates = Object.keys(timeSeries).slice(0, 5)
  stockData.value = dates.map(date => {
    const dailyData = timeSeries[date]
    return {
      date: date,
      open: dailyData['1. open'],
      high: dailyData['2. high'],
      low: dailyData['3. low'],
      close: dailyData['4. close'],
    }
  })
}

function plotStockData(data) {
  const timeSeries = data['Time Series (Daily)']
  if (!timeSeries) return

  const dates = Object.keys(timeSeries)
  const trace1 = {
    x: dates,
    close: dates.map(date => timeSeries[date]['4. close']),
    decreasing: { line: { color: '#7F7F7F' } },
    high: dates.map(date => timeSeries[date]['2. high']),
    increasing: { line: { color: '#17BECF' } },
    low: dates.map(date => timeSeries[date]['3. low']),
    open: dates.map(date => timeSeries[date]['1. open']),
    type: 'candlestick',
    xaxis: 'x',
    yaxis: 'y'
  };

  const layout = {
    dragmode: 'zoom',
    margin: {
      r: 10,
      t: 25,
      b: 40,
      l: 60
    },
    showlegend: false,
    xaxis: {
      autorange: true,
      domain: [0, 1],
      range: [dates[dates.length - 1], dates[0]],
      rangeslider: { range: [dates[dates.length - 1], dates[0]] },
      title: 'Date',
      type: 'date'
    },
    yaxis: {
      autorange: true,
      domain: [0, 1],
      type: 'linear'
    }
  };

  Plotly.newPlot('plotly-chart', [trace1], layout);
}

onMounted(() => {
  fetchStockData()
})
</script>

<style scoped>
</style>
