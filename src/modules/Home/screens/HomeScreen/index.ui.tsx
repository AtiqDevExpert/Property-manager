import DashboardBlueDetail from '@components/DashboardBlueDetail';
import React,{useState} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenTypes} from '../../interfaces';
import styles from './styles';
import {InvestmentIcon, PlotIcon} from '@assets/SVG/Svg';
import {Colors} from '../../../../constants/Colors';
import {DoYouIcon} from '../../../../Assets/SVG/SvgDashboard';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import {
  ArrowIconnext,
  FilterIcon,
  ThreeLines,
  BellIcon,
} from '@assets/SVG//SvgDashboard';
import TotalPlotsDashboard from '@components/TotalPlotsDashboard';
import PlotComponent from '@components/PlotComponent';
import { Dimensions } from 'react-native';
import FilterModal from '@components/FilterModal';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SetupCompleteModal from '@components/SetupCompleteModal';
import WhatDoYouWantModal from '@components/WhatDoYouWantModal';
 import InvestmentModal from '@components/InvestmentModal';
//component containing the view of Login screen
const HomeUI = ({navigation, investmenetdata,
   plotdata,
   isModalVisible,
   setModalVisible,
   isModalDoYouVisible,
   setModalDoYouVisible,

  }: ScreenTypes.home) => {

  // const chartConfig = {
  //   backgroundGradientFrom: 'red',
  //   backgroundGradientTo: '#FFFFFF',
  //   decimalPlaces: 0,
  //   color: (opacity = 1) => `rgba(74, 181, 227, ${opacity})`,
  //   labelColor: (opacity = 1) => `rgba(121,130,147, ${opacity})`,
  //   style: {borderRadius: 6,backgroundColor:'yellow'},
  //   propsForDots: {r: '0', strokeWidth: '2', stroke: '#ffa726'},
  //   propsForBackgroundLines: {strokeWidth: 0},
  //   withInnerLines:false
  // };

const [dataJanu,setDataJanu]=useState([
15,14,15,15,15,15,

])


  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "red",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 25, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  const chartdata = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: dataJanu,
        color: (opacity = 1) => `rgba(134, 125, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      },
      {
        data: dataJanu,
        // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        // strokeWidth: 2 // optional
      },
      {
        data: dataJanu,
        // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        // strokeWidth: 2 // optional
      }

    ]
  };

const [yAxisLabel,setYAxisLabel0]= useState( ["1Lac", "2Lac", "3Lac", "4Lac", "5L"])



  return (
    <SafeAreaView style={{
      backgroundColor: '#fff',
       flex: 1}}>
      <ScrollView>





      <View style={{backgroundColor: '#00f ',}}>
            <BarChart
             // style={graphStyle}
              data={chartdata}
              width={300}
              height={220}
              yAxisLabel={yAxisLabel}
              chartConfig={chartConfig}
              verticalLabelRotation={0}
            />
             <View style={{justifyContent:'center',alignSelf:'center',flex:1,alignContent:'center',marginHorizontal:10}}>
            <BarChart
              data={chartdata}
           
              width={Dimensions.get('window').width }
              height={180}
              withHorizontalLabels={true}
              withOuterLines={false}
              yAxisLabel={yAxisLabel}
              chartConfig={chartConfig}
              bezier
              style={{marginTop: 8, marginLeft: -58}}
            />
          </View>

















          </View>






        <View style={{
          marginTop:30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width:"94%",
          alignSelf: 'center',
         // backgroundColor: '#0ff'

          }}>
        <ThreeLines style={styles.investmentICon} />
        <Text style={{
          fontSize:30,
          fontWeight:"700",
          color:Colors.darkPrimery
        }}>JAWAD ALI</Text>
        <BellIcon style={styles.investmentICon} />
        </View>

        <View style={{
          //backgroundColor:'yellow'
          }}>
          <View
            style={{
              // backgroundColor:"green",
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 10,
              marginTop: 40,
            }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '700',
                color: Colors.dashboardNetColor,
              }}>
              Net Balance
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: Colors.darkPrimery,
                lineHeight: 24,
              }}>
              Rs
            </Text>
            <Text
              style={{
                fontSize: 60,
                fontWeight: '700',
                color: Colors.darkPrimery,
                lineHeight: 72,
              }}>
              50,00000
            </Text>
          </View>
        </View>
        
        <View style={{  
               width: '94%',
               alignSelf: 'center',
               marginVertical: 24,
             // backgroundColor: "red"
            }}>
          <Text  style={{
                fontSize: 20,
                fontWeight: '500',
                color: Colors.black,
              }}>Monthly Profit Overview</Text>
        </View>

        <View style={styles.mainView}>
          <DashboardBlueDetail
            totalInvestment={'45,00000'}
            totalProfit={'5,00000'}
            TotalLoss={'00'}
            monthlyProfit={'45,00000'}
            startDate={'22-Mar-22'}
            endDate={'22- Jun - 22'}
          />
        </View>
        <View
          style={{
            backgroundColor: '#F5F5F5',
            borderRadius: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '94%',
              alignSelf: 'center',
              marginVertical: 15,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: Colors.darkPrimery,
              }}>
              My Investment
            </Text>
            <InvestmentIcon style={styles.investmentICon}
            onPress={ console.log("investment icon ")} />
          </View>

          {investmenetdata.map((item, index) => {
            return (
              <>
                <View
                  style={{
                    backgroundColor: Colors.white,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '94%',
                    alignSelf: 'center',
                    marginVertical: 10,
                    borderRadius: 9,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '600',
                      color: Colors.dashboardgray,
                      marginVertical: 12,
                      marginHorizontal: 17,
                    }}>
                    {item.month}
                  </Text>
                  <Text
                    style={{
                      marginVertical: 12,
                      marginHorizontal: 17,
                      fontSize: 20,
                      fontWeight: '600',
                      color: Colors.darkPrimery,
                    }}>
                    {item.amount}
                  </Text>
                </View>
              </>
            );
          })}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '94%',
              alignSelf: 'center',
              marginVertical: 20,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: Colors.darkPrimery,
              }}>
              Total Plots
            </Text>
          </View>

          <View>
            <TotalPlotsDashboard
              totalPlotsValue={'7'}
              totalClientsValue={'20'}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '94%',
              alignSelf: 'center',
              marginVertical: 15,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: Colors.darkPrimery,
              }}>
              My Plots
            </Text>
            <TouchableOpacity 
            //onPress={ console.log("check it ")}
            >
            <FilterIcon style={styles.investmentICon} />
            </TouchableOpacity>
          </View>
         
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '94%',
                alignSelf: 'center',
                //marginVertical: 5,
               // backgroundColor: 'green',
                height: '35%',
                // flex: 1,
              }}>
              <FlatList
                nestedScrollEnabled
                style={{
                  marginVertical: 1,
                  borderRadius: 20,
                  //  backgroundColor:"orange"
                }}
                data={plotdata}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}: {item: any; index: number}) => {
                  return <PlotComponent item1={item} />;
                }}
                keyExtractor={item => item.id}
              />
            </View>

        </View>

      </ScrollView>

      {/* <>
            <FilterModal
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
            
            />
        </> */}

        
      <>
            <InvestmentModal
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
            
            />
        </>

        {/* <>
            <WhatDoYouWantModal
            isModalVisible={isModalDoYouVisible}
            setModalVisible={setModalDoYouVisible}
            ModalLogo={DoYouIcon}
            modalText1={"Setup Complete!"}
            modalButton={"Sale"}
            modalButton1={"Purchase"}
            />
        </> */}

    </SafeAreaView>
  );
};

export default HomeUI;
