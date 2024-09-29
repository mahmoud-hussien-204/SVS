import Card from "@/components/Card";

import ReactApexChart from "react-apexcharts";

const dailySales: {options: ApexCharts.ApexOptions} = {
  options: {
    chart: {
      height: 160,
      type: "bar",
      fontFamily: "Nunito, sans-serif",
      toolbar: {
        show: false,
      },
      stacked: true,
      stackType: "100%",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
    },
    colors: ["#e2a03f", "#202020"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    xaxis: {
      labels: {
        show: false,
      },
      categories: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 10,
        right: -20,
        bottom: -20,
        left: -20,
      },
    },
    tooltip: {
      theme: "dark",
      cssClass: "!bg-base-300",
    },
  },
};

const BuyCoinReport = ({data}: {data: any}) => {
  return (
    <div className='h-full'>
      <Card>
        <div className='mb-1rem flex items-center justify-between text-white'>
          <h5 className='text-18 font-semibold'>Buy Coin Report</h5>
        </div>
        <div>
          <div className='overflow-hidden rounded-lg'>
            <ReactApexChart
              series={[
                {
                  name: "Monthly Buy Coin",
                  data,
                },
              ]}
              options={dailySales.options}
              type='bar'
              height={360}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BuyCoinReport;
