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

const baseUrl = "http://localhost:3000";

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
  const [lineChartData, setLineChartData] = useState([]);
  const [rows , setRows] = useState([]);
  const [columns, setColumns] = useState(tableColumns);

  const [completedOrderCount, setCompletedOrderCount] = useState(0);
  const [pendingOrderCount, setPendingOrderCount] = useState(0);
  const [ongoingOrderCount, setOngoingOrderCount] = useState(0);
  const [deliveryOrderCount, setDeliveryOrderCount] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);


  const [PId , setPID] = useState('');
  const [ordersloaded,setOrdersLoaded] = useState(false);

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
    
    await Axios.get(baseUrl+'/PharmacyOrder/'+Id.toString())
      .then((response) => {
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
            amount: element.price
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
        generateIncomeData(orderArr);
        setOrdersLoaded(true);
      }).catch(function (err) {
        console.log(err);
    });
  }
  
  const generateIncomeData = (orderArr) => {
    var today = new Date();
    var startDate = new Date();
    today.setMonth(today.getMonth()+1);
    startDate.setFullYear(today.getFullYear());
    startDate.setDate(1);
    startDate.setMonth(today.getMonth()-10);
    var arr = [];
    while (startDate.getTime() < today.getTime()) {
      var amount = 0;
      var month = getMonth(startDate.getMonth());
      orderArr.forEach(element => {
        var placed_date = new Date(element.placed_date);

        if(placed_date.getFullYear() == startDate.getFullYear() && placed_date.getMonth() == startDate.getMonth()){
          amount = amount + element.amount;
        }
      });
      var dataItem = {
        month : month,
        income : amount
      }
      arr.push(dataItem);
      startDate.setMonth(startDate.getMonth()+1);
    }
    setLineChartData(arr);
    console.log(arr);
  }

  const getMonth = (month) => {
    var str = '';
    switch (month) {
      case 0: str = "JAN";
        break;
      case 1: str = "FEB";
        break;
      case 2: str = "MAR";
        break;
      case 3: str = "APR";
        break;
      case 4: str = "MAY";
        break;
      case 5: str = "JUN";
        break;
      case 6: str = "JUL";
        break;
      case 7: str = "AUG";
        break;
      case 8: str = "SEP";
        break;
      case 9: str = "OCT";
        break;
      case 10: str = "NOV";
        break;
      case 11: str = "DEC";
        break; 
      default: str = "";
        break;
    }
    return str;
  }
  const getLowestInventoryItems = async () => {
    var Id = localStorage.getItem('userId');
    setPID(Id.toString());
    await Axios.get(baseUrl+'/PharmacyInventory/'+Id.toString()+'/lowest')
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
              <AreaChart data={lineChartData} dataKey={"income"}/>
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