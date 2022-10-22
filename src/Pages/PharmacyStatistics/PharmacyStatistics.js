import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import Footer from '../../Components/Footer/Footer';
import BarChart from '../../Components/Charts/barChart';
import PieChart from '../../Components/Charts/pieChart';
import AreaChart from '../../Components/Charts/areaChart';
import './PharmacyStatistics.css';
import {useState,useEffect} from 'react';
import Table from '../../Components/Table/Table';
import { Link, useNavigate} from 'react-router-dom';
import React from 'react';
import Widget from '../../Components/Widget/Widget';
import Axios from "../../api/axios";


const piedata= {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
}

const tableData=[
  {
    id: 1,
    customer_name: "Snow",
    placed_date: "22/08/2022",
    status: "ongoing",
  },
  {
    id: 2,
    customer_name: "Jamie Lannister",
    placed_date: "22/08/2022",
    status: "delivery",
  },
  {
    id: 3,
    customer_name: "Lannister",
    placed_date: "22/08/2022",
    status: "completed",
  },
  {
    id: 4,
    customer_name: "Stark",
    placed_date: "22/08/2022",
    status: "pending",
  },
  {
    id: 5,
    customer_name: "Targaryen",
    placed_date: "22/08/2022",
    status: "pending",
  },
  {
    id: 6,
    customer_name: "Melisandre",
    placed_date: "22/08/2022",
    status: "completed",
  },
  {
    id: 7,
    customer_name: "Clifford",
    placed_date: "22/08/2022",
    status: "delivery",
  },
  {
    id: 8,
    customer_name: "Frances",
    placed_date: "22/08/2022",
    status: "delivery",
  },
  {
    id: 9,
    customer_name: "Roxie",
    placed_date: "22/08/2022",
    status: "completed",
  },
  {
    id: 10,
    customer_name: "Roxie",
    placed_date: "22/08/2022",
    status: "delivery",
  },
]

const tableColumns = [{ field: "id", headerName: "Order ID", width: 230 },
{
  field: "customer_name",
  headerName: "Customer Name",
  width: 230,
},
{
  field: "placed_date",
  headerName: "Placed Date",
  width: 230,
},
{
  field: "status",
  headerName: "Status",
  width: 230,
  renderCell: (params) => {
    return (
      <div className={`cellWithStatus ${params.row.status}`}>
        {params.row.status}
      </div>
    );
  },
},]


const barData=  [{
  name: 'Jan',
  value: 4000,
},
{
  name: 'Feb',
  value: 3000,
},
{
  name: 'Mar',
  value: 2000,
},
{
  name: 'Apr',
  value: 2780,
},
{
  name: 'May',
  value: 1890,
}]

const data = [{
  name: 'Page A',
  uv: 4000,
},
{
  name: 'Page B',
  uv: 3000,
},
{
  name: 'Page C',
  uv: 2000,
},
{
  name: 'Page D',
  uv: 2780,
},
{
  name: 'Page E',
  uv: 1890,
}]

function PharmacyStatistics(){
  const navigate = useNavigate();
  const [pieChartData, setPieChartData] = useState(piedata);
  const [barChartData, setBarChartData] = useState(barData);
  const [lineChartData, setLineChartData] = useState(data);
  const [rows , setRows] = useState([]);
  const [columns, setColumns] = useState(tableColumns);

  const [completedOrderCount, setCompletedOrderCount] = useState(0);
  const [pendingOrderCount, setPendingOrderCount] = useState(0);
  const [ongoingOrderCount, setOngoingOrderCount] = useState(0);
  const [deliveryOrderCount, setDeliveryOrderCount] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);


  const [PId , setPID] = useState('');
  const [loaded,setLoaded] = useState(false);

  const handleDelete = (id) => {
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/viewdetails" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];

  const getOrdersData = async () => {
    var Id = localStorage.getItem('userId');
    setPID(Id.toString());
    
    await Axios.get('http://localhost:3000/PharmacyOrder/'+Id.toString())
      .then((response) => {
        console.log(response.data);
        var completed = 0;
        var ongoing = 0;
        var delivery = 0;
        var income = 0;
        var pending = 0;
        var orderArr=[];
        response.data.forEach(element => {
          var orderItem= {
            id: element.order_id,
            customer_name: element.username,
            placed_date: element.time_stamp,
            status: element.status,
          };
          orderArr.push(orderItem);
          switch (element.status) {
            case "pending":
              pending = pending + 1;
              break;
            case "ongoing":
              ongoing = ongoing + 1;
              break;
            case "delivery":
              delivery = delivery + 1;
              break;
            case "completed":
              completed = completed +1;
              income = income + element.price;
              break;
            default:
              break;
          }
        });
        setRows(orderArr);
        setOngoingOrderCount(ongoing);
        setDeliveryOrderCount(delivery);
        setCompletedOrderCount(completed);
        setTotalIncome(income);
        setPendingOrderCount(pending);
      }).catch(function (err) {
        console.log(err);
    });
  }
  

  useEffect(async () => {
    var Id = localStorage.getItem('userId');
    if(Id != null){
      setPID(Id.toString());
      getOrdersData();
    }else{
      navigate("/");
    }
    
    
  }, []);

    return (
        <div>
          <div className='header'>
            <Navbar/>
          </div>
          <div className="widgets">
            <Widget type="pending" amount={pendingOrderCount} />    
            <Widget type="ongoing" amount={ongoingOrderCount} />
            <Widget type="delivery" amount={deliveryOrderCount} />
            <Widget type="completed" amount={completedOrderCount} />
            <Widget type="profit" amount={totalIncome} />
          </div>
          <div className='big-container' style={{marginBottom:60}}>
            <div className='line-chart'>
              <span className='listTitle'>Monthly Profit</span>
              <AreaChart data={lineChartData} dataKey={"uv"}/>
            </div>
          </div>
          <div className='big-container'style={{marginBottom:60}}>
            <div className='bar-chart'>
              <span className='listTitle'>Monthly Income</span>
              <BarChart data={barChartData} x={"value"} y={"name"}/>
            </div>
            <div className='pie-chart-container'>
              <span className='listTitle'>Overview of Orders</span>
              <div className='pie-chart'>
                <PieChart data={pieChartData}/>
              </div>
            </div>
          </div>
          <div className='big-container'>
            <div className='grid-container'>
              <span className='listTitle'>Order History</span>
              <Table rows={rows} columns={columns.concat(actionColumn)} />
            </div>
          </div>
          <Footer/>
        </div>
        
      );
}

export default PharmacyStatistics;