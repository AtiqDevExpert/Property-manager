import {Text, View} from 'react-native';
import React from 'react';
import {
  CreateNewPasswordScreenLogo,
  Usernamelogo,
  PlotIcon,
  NavigationIcon,
} from '../../Assets/SVG/Svg';
import {Button} from '@components/Button/button';
import styles from './styles';

const ListofClientCard = () => {
  return (
    <View style={styles.cardView}>
      <View style={styles.cardView1}>
        <View style={styles.cardView2}>
          <Usernamelogo style={styles.logo} />
          <Text style={styles.username}>John Smith</Text>
        </View>
        <View>
          <Button
            text={'Call'}
            color={'#fff'}
            fontSize={12}
            height={20}
            width={60}
            borderWidth={1}
            backgroundColor={'#0277FA'}
            // onPress={sendCode}
          />
        </View>
      </View>

      <View style={styles.cardView3}>
        <View style={styles.cardView4}></View>
        <View>
          <View style={styles.cardView5}>
            <View style={{flexDirection: 'row'}}>
              <PlotIcon style={styles.logo} />
              <Text style={styles.address}> No of Plots</Text>
            </View>
            <View>
              <Text style={styles.plotamount}>03</Text>
            </View>
          </View>
          <View style={styles.cardView7}>
            <NavigationIcon style={styles.logo} />
            <Text style={styles.address}>
              Plot 266, Block B H.B.F.C Society, Lahore, Punjab Pakistan
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.totalInvestment}>Total Investment</Text>
        </View>
        <View>
          <Text style={styles.price}>50 Lacs</Text>
        </View>
      </View>
    </View>
  );
};

export default ListofClientCard;
