import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import "./Home.css";
import jsonData from '../content/collateral_trend_sample_data.json';

const getDataArray = () => {
  var data = jsonData;

  let arrayResult = [];
  for (let i = 0; i < data.length; i++) {
    let elament = []
    for (let j = 0; j < data[i].data.length; j++) {
      elament.push({x : parseInt(data[i].data[j].x), y : data[i].data[j].y})
    }
    arrayResult.push({name: data[i].name, data: elament})
  }
  return arrayResult
}

const ApexChart = () => {
  const [options] = useState({
    chart: {
      type: 'area',
      height: 350
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Area with Negative Values',
      align: 'left',
      style: {
        fontSize: '14px'
      }
    },
    xaxis: {
      type: 'string',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      tickAmount: 4,
      floating: false,
      labels: {
        style: {
          colors: '#8e8da4',
        },
        offsetY: -7,
        offsetX: 0,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false
      }
    },
    fill: {
      opacity: 0.5
    },
    tooltip: {
      x: {
        format: "yyyy",
      },
      fixed: {
        enabled: false,
        position: 'topRight'
      }
    },
    grid: {
      yaxis: {
        lines: {
          offsetX: -30
        }
      },
      padding: {
        left: 20
      }
    }
  });

  
  const [series] = useState(getDataArray());

  return (
  
    <div className="content1">
      <div>
        <div id="chart">
          <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    </div>
  );
}
export default ApexChart;