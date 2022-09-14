import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
       <View style={styles.birthdayCard}>
       {/* <View style={styles.cardFront}>
      <Text style={styles.happy}>HAPPY BIRTHDAY</Text>
      

       <View style={styles.balloons}>
         <View style={styles.balloonOne}></View>
        <View style={styles.balloonTwo}></View>
        <View style={styles.balloonThree}></View>
         <View style={styles.balloonFour}></View>
        </View>
       </View> */}

       <View style={styles.cardInside}>
        <Text style={styles.back}>HAPPY BIRTHDAY!</Text>
         <Text style={styles.para}>Dear Friend,</Text>
         <Text style={styles.para}>Happy birthday!! I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true.</Text>
        <Text style={styles.name}>Yolanda</Text>
      </View>
     </View>
    </>
  );
}

const styles = StyleSheet.create({
  birthdayCard: {
   position:"abs",
   width:"250px",
   height:"350px",
   cursor:"pointer",
   transform: [{ perspective: 2500 },{style:"preseve-3d"},]
  },
  birthdayCardHover:{
    transform:[
      {perspective:2500},
      { rotate: '5deg'},
    ]
  },
  cardFront:{
    position:"relative",
    backgroundColor:"#fff",
    width:"300px",
    height:"350px",
    overflow:"hidden",
    transform:[{ x: 0, y: 0 },],
    shadowOffset:{width:30,height:0},
    shadowRadius:50,
  },
  cardFrontHover:{
    transform:[
      {rotateY:'-160deg'}
    ]
  },
  happy:{
    fontFamily:'Tahoma,sans-serif',
    textAlign:"center",
    margin:"30px"
    
  },
  happyHover:{
    backfaceVisibility:"hidden"
  },
  balloons:{
    position:"absolute"

  },
  balloonOne:{
    position:"absolute",
    width:"85px",
    height:"95px",
    borderRadius:"50%",
    backgroundColor:"#ff3366",
    left:"9px",
    top:"90px",
    

  },
  balloonTwo:{
    position:"absolute",
    width:"85px",
    height:"95px",
    borderRadius:"50%",
    backgroundColor:"#06D6A0",
    left:"80px",
    top:"70px"

  },
  balloonThree:{
    position:"absolute",
    width:"85px",
    height:"95px",
    borderRadius:"50%",
    backgroundColor:"#ffd166",
    left:"150px",
    top:"90px"

  },
  balloonFour:{
    position:"absolute",
    width:"85px",
    height:"95px",
    borderRadius:"50%",
    backgroundColor:"#118AB2",
    left:"211px",
    top:"70px"

  },
  cardInside:{
    position:"absolute",
    backgroundColor:"#fff",
    width:"300px",
    height:"350px",
    zIndex:-1,
    left:500,
    top:10,
    shadowOffset:{width:"100px",height:"20px"},
    shadowRadius:"100px",
    
 

   
  },
  para:{
   fontFamily:"Brush Script MT,",
   color:"#333",
   margin:"10px",
  
   
  },
  name:{
    position:'absolute',
    left:'240px',
    top:"310px",
    color:'#333'
    },
  back:{
      fontFamily:"Tahoma,sans-serif",
      color:"#333",
      textAlign:'center',
      margin:'30px',
      outlineStyle: "dotted",
      outlineColor: '#333',
    }
});
