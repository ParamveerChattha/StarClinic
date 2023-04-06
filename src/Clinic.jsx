import CustomerSearch from "./components/dashboard/CustomerSearch";
import CustomerTable from "./components/dashboard/searchedRecord/CustomerTable";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import StyledDiv from "./Styled";




 const Clinic = () =>
<>
<StyledDiv>

<div>
<Header/>
</div>
<div>
<Sidebar/>
</div>
<div>
<CustomerTable/>
</div>
<div>
<CustomerSearch name='name'/>
</div>
<div>
  <Footer/>
</div>

</StyledDiv>
</>

export default Clinic