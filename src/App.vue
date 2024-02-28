<script setup>
import { asset, asset_group, asset_usage } from "./chartData";
import { ref } from "vue";

import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const y = ref([]);

y.value = asset.map((item) => item.label);

const chartOptions = ref({
  responsive: true,
  indexAxis: "y",
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
});

const chartData = ref({
  labels: y.value,
  datasets: asset.map((asset, index) => {
    const label = asset_group.find(
      (asset_group) => asset_group.id === asset.group_id
    );
    const data = asset_usage.find(
      (asset_usage) => asset_usage.asset_id === asset.id
    );
    if (data)
      return {
        label: label.label,
        backgroundColor: data.backgroundColor,
        data: [
          Math.round(
            (new Date(data.to).getTime() - new Date(data.from).getTime()) /
              (1000 * 3600 * 24)
          ),
        ],
      };
  }),
});
</script>
<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
