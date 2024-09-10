import Card from "@/components/Card";

import ReactApexChart from "react-apexcharts";

const salesByCategory: {series: ApexNonAxisChartSeries; options: ApexCharts.ApexOptions} = {
  series: [985, 737, 270],
  options: {
    chart: {
      type: "donut",
      fontFamily: "Nunito, sans-serif",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 15,
      colors: ["#202020"],
    },
    colors: ["#5c1ac3", "#e2a03f", "#e7515a", "#e2a03f"],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      markers: {
        size: 6,
        offsetX: -6,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
      height: 50,
      offsetY: 20,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          background: "transparent",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "29px",
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: "26px",
              color: "#fff",
              offsetY: 16,
              formatter: (val) => {
                return val;
              },
            },
            total: {
              show: true,
              label: "Total",
              color: "#fff",
              fontSize: "29px",
              formatter: (w) => {
                return w.globals.seriesTotals.reduce(function (a: number, b: number) {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
    labels: ["Apparel", "Sports", "Others"],
    states: {
      hover: {
        filter: {
          type: "none",
          value: 0.15,
        },
      },
      active: {
        filter: {
          type: "none",
          value: 0.15,
        },
      },
    },
  },
};

const SalesByCategory = () => {
  return (
    <div className='h-full'>
      <Card>
        <div className='mb-1rem flex items-center justify-between text-white'>
          <h5 className='text-18 font-semibold'>Sales By Category</h5>
        </div>
        <div className='relative'>
          <div className='overflow-hidden rounded-lg'>
            <ReactApexChart
              series={salesByCategory.series}
              options={salesByCategory.options}
              type='donut'
              height={430}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SalesByCategory;
