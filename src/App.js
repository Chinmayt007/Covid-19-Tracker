import React from 'react';
import {Cards,Chart,CountryPicker} from "./components";
import styles from "./App.module.css"
import {fetchData} from "./api/index";
import Footer from './footer';
class App extends React.Component{
  state={
   data:{},
   country:"",
  }
  async componentDidMount(){
    const fetchedData= await fetchData();
    console.log(fetchedData);
    this.setState({data:fetchedData});
  }

  handleCountryChange =async(country)=>{
    const fetchedData= await fetchData(country);
    this.setState({data:fetchedData,country});
  }
  render(){
    const {data,country}=this.state;
    return(
      <>
      <div className={styles.container}>
      <img className={styles.image} src="https://i.ibb.co/7QpKsCX/image.png" alt="corona"/>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} country={country}/>
      </div>
      <div>
      <Footer />
    </div>
    </>
    )
  }
}

export default App;