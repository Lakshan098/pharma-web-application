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
  const [pieChartData, setPieChartData] = useState({
    labels: [
      'Pending',
      'Ongoing',
      'Delivery',
      'Completed'
    ],
    datasets: [{
      label: 'Overview of Orders',
      data: [0, 0, 0, 0],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(50, 168, 82)'
      ],
      hoverOffset: 4
    }]
  });
  const [barChartData, setBarChartData] = useState([]);
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
        var piedata= {
          labels: [
            'Pending',
            'Ongoing',
            'Delivery',
            'Completed'
          ],
          datasets: [{
            label: 'Overview of Orders',
            data: [pending, ongoing, delivery, completed],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(50, 168, 82)'
            ],
            hoverOffset: 4
          }]
        };
        setPieChartData(piedata);
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
  
  const getLowestInventoryItems = async () => {
    var Id = localStorage.getItem('userId');
    setPID(Id.toString());
    await Axios.get('http://localhost:3000/PharmacyInventory/'+Id.toString()+'/lowest')
    .then((response) => {
      var barDataArr = [];
      response.data.forEach(element => {
        var item = {
          name : element.drug_name,
          quantity: element.quantity
        }
        barDataArr.push(item);
      });
      setBarChartData(barDataArr);
    }).catch(function (err) {
        console.log(err);
    });
  }

  useEffect(async () => {
    var Id = localStorage.getItem('userId');
    if(Id != null){
      setPID(Id.toString());
      getOrdersData();
      getLowestInventoryItems();
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
              <span className='listTitle'>Lowest Drugs</span>
              <BarChart data={barChartData} x={"quantity"} y={"name"}/>
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