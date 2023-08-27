import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {SearchIcon} from '../../Assets/SVG/Svg';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {Colors} from '../../constants/Colors';
import {
  NewPropertyPlotIcon,
  AreaIcon,
  LocationIcon,
  AreaIcon1
} from '../../Assets/SVG/Svg';

const PlotComponent = ({item1}) => {
  // const data = [
  //   { 
  //     Phase:"Phase 1",
  //     PLot:"Plot # 201204",
  //     Block:"Block C",
  //     Location:"New colony 33 street n New colony 33 street nyy....",
  //     price:"2,000,0000",
  //     width:"2000*2000",
  //     area:"5 Canal",
  //     image: null,
  //     name: 'Jawad ',
  //     mail: 'jawad@gmail.com',
  //     id: '1',
  //   },
  //   {Phase:"Phase 1",
  //   PLot:"Plot # 201204",
  //   Block:"Block C",
  //   Location:"New colony 33 street n New colony 33 street nyy....",
  //   price:"2,000,0000",
  //   width:"2000*2000",
  //   area:"5 Canal",
  //     image: null,
  //     name: 'aSAD Ahmad',
  //     mail: 'asadahmad@gmail.com',
  //     id: '2',
  //   },
  //   { Phase:"Phase 1",
  //   PLot:"Plot # 201204",
  //   Block:"Block C",
  //   Location:"New colony 33 street n New colony 33 street nyy....",
  //   price:"2,000,0000",
  //   width:"2000*2000",
  //   area:"5 Canal",
  //     image: null,
  //     name: 'Nabeel Ahmad',
  //     mail: 'nabeelahmad@gmail.com',
  //     id: '3',
  //   },
  //   {
  //     Phase:"Phase 1",
  //     PLot:"Plot # 201204",
  //     Block:"Block C",
  //     Location:"New colony 33 street n New colony 33 street nyy....",
  //     price:"2,000,0000",
  //     width:"2000*2000",
  //     area:"5 Canal",
  //     image: null,
  //     name: 'Alipaki Ahmad',
  //     mail: 'jawad@gmail.com',
  //     id: '4',
  //   },
  //   {
  //     Phase:"Phase 1",
  //     PLot:"Plot # 201204",
  //     Block:"Block C",
  //     Location:"New colony 33 street n New colony 33 street nyy....",
  //     price:"2,000,0000",
  //     width:"2000*2000",
  //     area:"5 Canal",
  //     image: null,
  //     name: 'Jawad Ahmad',
  //     mail: 'jawad@gmail.com',
  //     id: '5',
  //   },
  //   {
  //     Phase:"Phase 1",
  //     PLot:"Plot # 201204",
  //     Block:"Block C",
  //     Location:"New colony 33 street n New colony 33 street nyy....",
  //     price:"2,000,0000",
  //     width:"2000*2000",
  //     area:"5 Canal",
  //     image: null,
  //     name: 'Jawad Ahmad',
  //     mail: 'jawad@gmail.com',
  //     id: '6',
  //   },
  //   {
  //     Phase:"Phase 1",
  //     PLot:"Plot # 201204",
  //     Block:"Block C",
  //     Location:"New colony 33 street n New colony 33 street nyy....",
  //     price:"2,000,0000",
  //     width:"2000*2000",
  //     area:"5 Canal",
  //     image: null,
  //     name: 'Jawad Ahmad',
  //     mail: 'jawad@gmail.com',
  //     id: '7',
  //   },
  //   {
  //     Phase:"Phase 1",
  //     PLot:"Plot # 201204",
  //     Block:"Block C",
  //     Location:"New colony 33 street n New colony 33 street nyy....",
  //     price:"2,000,0000",
  //     width:"2000*2000",
  //     area:"5 Canal",
  //     image: null,
  //     name: 'Jawad Ahmad',
  //     mail: 'jawad@gmail.com',
  //     id: '8',
  //   },
  //   {
  //     Phase:"Phase 1",
  //     PLot:"Plot # 201204",
  //     Block:"Block C",
  //     Location:"New colony 33 street n New colony 33 street nyy....",
  //     price:"2,000,0000",
  //     width:"2000*2000",
  //     area:"5 Canal",
  //     image: null,
  //     name: 'Jawad Ahmad',
  //     mail: 'jawad@gmail.com',
  //     id: '9',
  //   },
  //   {
  //     Phase:"Phase 1",
  //     PLot:"Plot # 201204",
  //     Block:"Block C",
  //     Location:"New colony 33 street n New colony 33 street nyy....",
  //     price:"2,000,0000",
  //     width:"2000*2000",
  //     area:"5 Canal",
  //     image: null,
  //     name: 'Jawad Ahmad',
  //     mail: 'nabeelismaeel1122@gmail.com',
  //     id: '10',
  //   },
  // ];
const divider=(index:number)=>{
  if(data.length-1==index){
    return 0
  }else{ return 1
  }
}
//   const renderItem = ({item, index}) => {
//     return (
//       <>
//         <View style={{
//           //backgroundColor:"yellow", 
//           marginVertical:10
//           }}>
//           <View style={{
//             backgroundColor: Colors.darkPrimery,
//             flexDirection: 'row',
//             borderTopLeftRadius:10,
//             borderTopRightRadius:10,
//             alignItems: 'center',
//             justifyContent: 'center',
//             }}>

//             <View style={{ 
//               alignItems: 'center',
//               justifyContent: 'center'
//               }}>
//               <Text style={styles.text5}>{item.Phase}</Text>
//             </View>

//             <View style={{ 
//               alignItems: 'center',
//               justifyContent: 'center',
//               borderLeftWidth:1,
//               borderRightWidth:1,
//               marginHorizontal:8,
//               borderColor:"#D9D9D9",
//               marginVertical:7
//               }}>
//               <Text style={[styles.text5,{marginHorizontal:10}]}>{item.PLot}</Text>
//             </View>

//             <View style={{ 
//               alignItems: 'center',
//               justifyContent: 'center'
//               }}>
//               <Text style={styles.text5}>{item.Block}</Text>
//             </View>
           
//           </View>

//           <View style={{
//           backgroundColor:Colors.white, 
//           borderBottomLeftRadius:10, 
//           borderBottomRightRadius:10,
//           shadowColor: "#000",
//           shadowOffset: {
//             width: 0,
//             height: 6,
//           },
//           shadowOpacity: 0.37,
//           shadowRadius: 7.49,
          
//           elevation: 12,
//          // marginBottom:8
//           }}>
//             <View>
//               <View style={styles.ndummyChild1}>
               
//                 <View style={styles.ndummyChild2}>
//                   <LocationIcon style={styles.logo} />
//                   <Text style={styles.text2}>{item.Location}</Text>
//                 </View>
               
//                 <View style={styles.ndummyChild3}>
//                   <Text style={[styles.bluePrice, {marginHorizontal: 10}]}>
//                   {item.price}
//                   </Text>
//                 </View>

//               </View>

//               <View style={styles.ndummyChild21}>
//                 <AreaIcon style={styles.logo} />
//                 <Text style={styles.text2}>{item.width}</Text>
//               </View>

//               <View style={styles.ndummyChild21}>
//                 <AreaIcon1 style={styles.logo} />
//                 <Text style={styles.text2}>{item.area}</Text>
//               </View>

//             </View>

//              <View style={{
            
//             backgroundColor: 'rgba(2,119,250,0.13)',
//             flexDirection: 'row',
//             borderRadius:10,
//             alignItems: 'center',
//             marginHorizontal:5,
//             justifyContent: 'flex-start',
//             marginVertical:10,
//             marginBottom:15,
//               width:'100%',
//               flexWrap:'wrap'

//             }}>

//             {data.map((item,index)=>{
//               return(
//                 <>
//                 <View style={{ 
//               alignItems: 'center',
//               justifyContent: 'center',
//               borderRightWidth:divider(index)                ,
//               marginLeft:5,
//               borderColor:Colors.darkPrimery,
//               marginVertical:5
//               }}>
//               <Text style={styles.text6}>{item.name} 20%</Text>
//             </View>
//                 </>
//               )
//             })}
// {/* 
//             <View style={{ 
//               alignItems: 'center',
//               justifyContent: 'center',
//               borderLeftWidth:1,
//               borderRightWidth:1,
//               marginHorizontal:5,
//               borderColor:Colors.darkPrimery,
//               marginVertical:5
//               }}>
//               <Text style={[styles.text6,{marginHorizontal:7}]}>Jawad 30%</Text>
//             </View>

//             <View style={{ 
//               alignItems: 'center',
//               justifyContent: 'center'
//               }}>
//               <Text style={styles.text6}>Hammad 50%</Text>
//             </View> */}
           
//           </View>
         
//           </View>
//         </View>
//       </>
//     );
//   };
// const data =item1.name;
const data=item1.data;
//console.log(item1.data)
;  return (
    <>

<View style={{
          //backgroundColor:"yellow", 
          marginVertical:10,
          marginHorizontal:5
          }}>
          <View style={{
            backgroundColor: Colors.darkPrimery,
            flexDirection: 'row',
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            alignItems: 'center',
            justifyContent: 'center',
            }}>

            <View style={{ 
              alignItems: 'center',
              justifyContent: 'center'
              }}>
              <Text style={styles.text5}>
                {item1.Phase}
                </Text>
            </View>

            <View style={{ 
              alignItems: 'center',
              justifyContent: 'center',
              borderLeftWidth:1,
              borderRightWidth:1,
              marginHorizontal:8,
              borderColor:"#D9D9D9",
              marginVertical:7
              }}>
              <Text style={[styles.text5,{marginHorizontal:10}]}>
                {item1.PLot}
                </Text>
            </View>

            <View style={{ 
              alignItems: 'center',
              justifyContent: 'center'
              }}>
              <Text style={styles.text5}>
                {item1.Block}
                </Text>
            </View>
           
          </View>

          <View style={{
          backgroundColor:Colors.white, 
          borderBottomLeftRadius:10, 
          borderBottomRightRadius:10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
          
          elevation: 12,
         // marginBottom:8
          }}>
            <View>
              <View style={styles.ndummyChild1}>
               
                <View style={styles.ndummyChild2}>
                  <LocationIcon style={styles.logo} />
                  <Text style={styles.text2}>
                    {item1.Location}
                    </Text>
                </View>
               
                <View style={styles.ndummyChild3}>
                  <Text style={[styles.bluePrice, {marginHorizontal: 10}]}>
                  {item1.price}
                  </Text>
                </View>

              </View>

              <View style={styles.ndummyChild21}>
                <AreaIcon style={styles.logo} />
                <Text style={styles.text2}>
                  {item1.width}
                  </Text>
              </View>

              <View style={styles.ndummyChild21}>
                <AreaIcon1 style={styles.logo} />
                <Text style={styles.text2}>
                  {item1.area}
                  </Text>
              </View>

            </View>

             <View style={{
            
            backgroundColor: 'rgba(2,119,250,0.13)',
            flexDirection: 'row',
            borderRadius:10,
            alignItems: 'center',
            //marginHorizontal:5,
          
            justifyContent: 'flex-start',
            marginVertical:10,
            marginBottom:15,
              width:'98%',
              alignSelf: 'center',
              flexWrap:'wrap'

            }}>

            {data.map((item,index)=>{
              return(
                <>
                <View style={{ 
              alignItems: 'center',
              justifyContent: 'center',
              borderRightWidth:divider(index)                ,
              marginLeft:5,
              borderColor:Colors.darkPrimery,
              marginVertical:5
              }}>
              <Text style={styles.text6}>{item.name} 20%</Text>
            </View>
                </>
              )
            })}
           
          </View>
         
          </View>
        </View>



      {/* <View
        style={{
          marginVertical: 5,
        }}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View> */}
    </>
  );
};

export default PlotComponent;
