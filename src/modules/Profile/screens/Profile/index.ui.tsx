import DashboardBlueDetail from '@components/DashboardBlueDetail';
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenTypes} from '../../interfaces';
import styles from './styles';
import {InvestmentIcon,PlotIcon} from '@assets/SVG/Svg';
import {Colors} from '../../../../constants/Colors';
import {ArrowIconnext,FilterIcon}  from '@assets/SVG//SvgDashboard';
import TotalPlotsDashboard from '@components/TotalPlotsDashboard';
//component containing the view of Login screen
const HomeUI = ({navigation, data}: ScreenTypes.home) => {
  return (
    <SafeAreaView>
      <ScrollView>
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
            backgroundColor: 'red',
            borderRadius: 20,
            //height: '80%',
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
            <InvestmentIcon style={styles.investmentICon} />
          </View>

          {data.map((item, index) => {
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
              totalPlotsValue={"7"}
              totalClientsValue={"20"}
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
            <FilterIcon style={styles.investmentICon} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '94%',
              alignSelf: 'center',
              marginVertical: 15,
              backgroundColor:"green"
            }}>
          </View>

         


        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeUI;
