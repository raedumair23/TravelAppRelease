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

const FeatureDetailsScreen = ({ route, navigation }) => {
  const { image, title, rating } = route.params;
  const [readMore, setReadMore] = useState(false);

  const InfoBadge = ({ icon, label, value }) => (
    <View style={styles.infoWrapper}>
      <CustomText bold style={styles.infoValue}>{value}</CustomText>
      <View style={styles.infoBadge}>
        <Ionicons name={icon} size={22} color="#fff" />
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

      {/* Info Badges */}
      <View style={styles.badgeRow}>
        <InfoBadge icon="navigate" label="Difficulty" value={current.difficulty} />
        <InfoBadge icon="time-outline" label="Time Needed" value={current.time} />
        <InfoBadge icon="ticket-outline" label="Ticket" value={current.ticket} />
      </View>

      {/* About Section */}
      <CustomText bold style={styles.sectionTitle}>About</CustomText>
      <CustomText style={styles.aboutText}>
        {current.about}
        {readMore && current.more}
        <Text onPress={() => setReadMore(!readMore)} style={styles.readMore}>
          {readMore ? ' Read Less' : ' Read More'}
        </Text>
      </CustomText>

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <View style={styles.buttonWrapper}>
          <CustomButton
            title="Site Map"
            type="outlined"
            icon={
              <Ionicons
                name="map-outline"
                size={18}
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
    backgroundColor: '#0A1F29',
    paddingHorizontal: 20,
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  aboutText: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 14,
    lineHeight: 22,
  },
  readMore: {
    color: colors.primary,
    fontFamily: fonts.medium,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 40,
  },
  buttonWrapper: {
    width: '48%',
  },
  siteMapButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  siteMapText: {
    color: colors.primary,
    fontSize: 16,
    fontFamily: fonts.medium,
  },
  startButton: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startText: {
    color: '#0A1F29',
    fontSize: 16,
    fontFamily: fonts.medium,
  },
  iconStyle: {
    marginRight: 8,
  },

  // Info Badge Styling
  infoWrapper: {
    alignItems: 'center',
    width: '30%',
  },
  infoBadge: {
    backgroundColor: '#1C2A34',
    padding: 14,
    borderRadius: 16,
    marginVertical: 6,
  },
  infoValue: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  infoLabel: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default FeatureDetailsScreen;
