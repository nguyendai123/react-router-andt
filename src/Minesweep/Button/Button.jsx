import React,{useState} from "react";
import "./Button.css";

const Button = ({setZero,arr,i,j,data,setData}) => {
  const[ display, setDisplay] =useState("");
  const handleclick = ()=>{
    setDisplay("display");
  }
  
  const load= (i,j)=>{
    setDisplay("display1");
    console.log("check array",arr,i,j);
    var T=[];
    const checkhang = (i,j)=>{
      var m=i,n=j,k2;
      while(arr[m][n]==0 && n<=7) {
          
          arr[m][n++]=100;
          k2=n-1;
          
         } 
         arr[m][n]=100;
     m=i,n=j-1;
     var k1=k2;
     while(arr[m][n]==0 && n>=1){
          
          arr[m][n--]=100;
          k1=n+1;
          
         } 
         arr[m][n]=100;
         console.log(k1,k2);
         for(let h=k1;h<=k2,h<=7;h++){
          if(arr[m-1][h]==0 && i!=1) checkhang(i-1,h)
          if(arr[m+1][h]==0 && i!=7) checkhang(i+1,h)
          if(arr[m+1][h]!=0 && arr[m+1][h]!=11) arr[m+1][h]=100
          if(arr[m-1][h]!=0 && arr[m+1][h]!=11) arr[m-1][h]=100
         }
    }
//       while ( m<=7 ){
//         n=j;
//         while ( arr[m][n]==0 && n<=7){
//        arr[m][n]=100;
//         n++;
//       }
//       m++;n=j;
      
//       }  
    
//    m=i;n=j
//    while ( arr[m][n]==0 && m<=7){
//     n=j;
//     while (  arr[m][n]==0 &&  n>=1){
//       if(arr[m][n]==0 ) arr[m][n]=100;
//     n--;
//   }
//     m++;n=j;
//   }  
//   m=i;n=j
//   while (  arr[m][n]==0 &&  m>=1 ){
//     n=j;
//     while (  arr[m][n]==0 &&  n>=1){
//       if(arr[m][n]==0 ) arr[m][n]=100;
    
//     }
//     m--;n=j;
//  }  
//  m=i;n=j
//  while (   arr[m][n]==0 &&  m>=1 ){ 
//   n=j;
//   while(   arr[m][n]==0 &&  n>=1){
//     if(arr[m][n]==0 ) arr[m][n]=100;
//   n--;
// }
// m--;n=j;
// }  
checkhang(i,j)
    console.log("check after arr",arr);
  }
  const handleclickZero= ()=>{
    
    alert("Click");
    
    load(i,j)
   
    setData([...arr]);
  }
  return <>
  {data>0 && <div className={display } onClick={()=>handleclick()}>{data}</div>}
  {data ==0 && <div className={display } onClick={()=>handleclickZero()}>{data}</div>}
  </>
};

export default Button;
