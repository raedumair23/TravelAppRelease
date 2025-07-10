import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import images from '../assets/images/index';
import CustomText from '../components/CustomText';
import HorizontalCard from '../components/VerticalCards';
import VerticalCard from '../components/HorizontalCards';
import { colors } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';
import experiences from '../data/experiences';

const categories = ['All', 'Forest', 'Mountains', 'Beach', 'City', 'Diving'];

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigation = useNavigation();

  const filteredExperiences =
    activeCategory === 'All'
      ? experiences
      : experiences.filter(item => item.category === activeCategory);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <View>
          <CustomText style={styles.helloText} regular>Hello, Hazar</CustomText>
          <CustomText style={styles.title} bold>Let’s Travel</CustomText>
        </View>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNg3U6Fd9rdn-iwwOAdLAYsfuGIP55DBcISA&s' }}
          style={styles.profilePic}
        />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Temukan Liburan Anda"
          placeholderTextColor="#A3A3A3"
          style={styles.searchInput}
        />
        <Ionicons name="search" size={wp('4.5%')} color="#A3A3A3" />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {categories.map(cat => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryButton,
              activeCategory === cat && styles.categoryButtonActive,
            ]}
            onPress={() => setActiveCategory(cat)}
          >
            <CustomText
              medium={activeCategory !== cat}
              bold={activeCategory === cat}
              style={[
                styles.categoryText,
                activeCategory === cat && styles.categoryTextActive,
              ]}
            >
              {cat}
            </CustomText>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <CustomText style={styles.sectionTitle} medium>Popular Experiences</CustomText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardScroll}>
        {filteredExperiences.map(exp => (
          <HorizontalCard
            key={exp.id}
            title={exp.title}
            distance={exp.distance}
            image={exp.image}
          />
        ))}
      </ScrollView>

      <CustomText style={styles.sectionTitle} medium>Featured</CustomText>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            image: images.mountBromo,
            title: 'Mount Bromo',
            rating: 4.7,
          })
        }
      >
        <VerticalCard
          title="Mount Bromo"
          distance="5 km away"
          rating={4.7}
          image={images.mountBromo}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            image: images.SuetoOcean,
            title: 'Sua Ocean in Samoa',
            rating: 4.8,
          })
        }
      >
        <VerticalCard
          title="Sua Ocean in Samoa"
          distance="50 km away"
          rating={4.8}
          image={images.SuetoOcean}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1F29',
    paddingHorizontal: wp('5%'),
  },
  scrollContent: {
    paddingBottom: hp('10%'),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('6%'),
  },
  helloText: {
    color: '#A3A3A3',
    fontSize: wp('3.8%'),
  },
  title: {
    color: '#fff',
    fontSize: wp('5%'),
  },
  profilePic: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('15%'),
  },
  searchContainer: {
    backgroundColor: '#1C2A34',
    borderRadius: wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('0.5%'),
    marginTop: hp('3%'),
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: wp('3.5%'),
  },
  categoryScroll: {
    marginTop: hp('3%'),
    

  },
  categoryButton: {
    backgroundColor: '#1C2A34',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
    borderRadius: wp('3%'),
    marginRight: wp('2%'),
    },
  categoryButtonActive: {
    backgroundColor: '#5EDFFF',
  },
  categoryText: {
    color: '#fff',
    fontSize: wp('3%'),
  },
  categoryTextActive: {
    color: colors.cattext,
  },
  sectionTitle: {
    color: colors.textLight,
    fontSize: wp('4.5%'),
    marginTop: hp('4%'),
    marginBottom: hp('2%'),
  },
  cardScroll: {
    marginBottom: hp('1%'),
  },
});

export default HomeScreen;
