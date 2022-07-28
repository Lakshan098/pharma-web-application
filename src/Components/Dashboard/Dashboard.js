import './Dashboard.css';

function Dashboard(){
    return (
        <div className="dashboard">
            <section class="home-section">
                <div class="home-content">
                    
                    <div class="member-stats">
                        <div class="one">
                            <p class="value">Customers</p>
                            <p class="name">2548 Customers</p>
                        </div>
                    </div>

                    <div class="member-stats">
                        <div class="two">
                            <p class="value">Pharmacies</p>
                            <p class="name">589 Pharmacies</p>
                        </div>
                    </div>

                    <div class="member-stats">
                        <div class="three">
                            <p class="value">Delivery Agents</p>
                            <p class="name">365 Delivery Agents</p>
                        </div>
                    </div>
                </div>
             </section>
        </div>
        
      );
}

export default Dashboard;

         