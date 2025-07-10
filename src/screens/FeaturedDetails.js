import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageBanner from '../components/ImageBanner';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';
import { colors } from '../constants/theme';
import fonts from '../assets/fonts/fonts';
import featureDescriptions from '../data/FeatureDescriptions';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const FeatureDetailsScreen = ({ route, navigation }) => {
  const { image, title, rating } = route.params;
  const [readMore, setReadMore] = useState(false);

  const InfoBadge = ({ icon, label, value }) => (
    <View style={styles.infoWrapper}>
      <CustomText bold style={styles.infoValue}>{value}</CustomText>
      <View style={styles.infoBadge}>
        <Ionicons name={icon} size={wp('5.5%')} color="#fff" />
      </View>
      <CustomText medium style={styles.infoLabel}>{label}</CustomText>
    </View>
  );

  const current = featureDescriptions[title];

  return (
    <ScrollView style={styles.container}>
      <ImageBanner
        image={image}
        title={title}
        rating={rating}
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.badgeRow}>
        <InfoBadge icon="navigate" label="Difficulty" value={current.difficulty} />
        <InfoBadge icon="time-outline" label="Time Needed" value={current.time} />
        <InfoBadge icon="ticket-outline" label="Ticket" value={current.ticket} />
      </View>

      <CustomText bold style={styles.sectionTitle}>About</CustomText>
      <CustomText style={styles.aboutText}>
        {current.about}
        {readMore && current.more}
        <Text onPress={() => setReadMore(!readMore)} style={styles.readMore}>
          {readMore ? ' Read Less' : ' Read More'}
        </Text>
      </CustomText>

      <View style={styles.buttonRow}>
        <View style={styles.buttonWrapper}>
          <CustomButton
            title="Site Map"
            type="outlined"
            icon={
              <Ionicons
                name="map-outline"
                size={wp('4.5%')}
                color={colors.primary}
                style={styles.iconStyle}
              />
            }
            style={styles.siteMapButton}
            textStyle={styles.siteMapText}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <CustomButton
            title="Start"
            type="filled"
            style={styles.startButton}
            textStyle={styles.startText}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: wp('5%'),
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2%'),
  },
  sectionTitle: {
    color: colors.textLight,
    fontSize: wp('4%'),
    marginTop: hp('3.5%'),
    marginBottom: hp('1.5%'),
  },
  aboutText: {
    color: colors.aboutText,
    fontSize: wp('3%'),
    lineHeight: hp('2.8%'),
  },
  readMore: {
    color: colors.primary,
    fontFamily: fonts.medium,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('4%'),
    marginBottom: hp('6%'),
  },
  buttonWrapper: {
    width: '48%',
    paddingLeft: wp('1%'),
    paddingRight: wp('1%'),
  },
  siteMapButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: hp('1.5%'),
    borderRadius: wp('3%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  siteMapText: {
    color: colors.primary,
    fontSize: wp('3%'),
    fontFamily: fonts.medium,
  },
  startButton: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingVertical: hp('1.5%'),
    borderRadius: wp('3%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
 
  
  },
  startText: {
    color: colors.cattext,
    fontSize: wp('3%'),
    fontFamily: fonts.medium,
  },
  iconStyle: {
    marginRight: wp('2%'),
  },

  infoWrapper: {
    alignItems: 'center',
    width: '30%',
  },
  infoBadge: {
    backgroundColor: '#1C2A34',
    padding: hp('1.5%'),
    borderRadius: wp('4%'),
    marginVertical: hp('1%'),
  },
  infoValue: {
    color: '#fff',
    fontSize: wp('3.5%'),
    textAlign: 'center',
  },
  infoLabel: {
    color: '#ccc',
    fontSize: wp('3%'),
    textAlign: 'center',
  },
});

export default FeatureDetailsScreen;
